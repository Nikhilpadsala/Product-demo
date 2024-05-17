import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"

import loader from"../../asets/image/loader.gif"
import "./product.css"
import ProductList from "./ProductList"
import { useNavigate } from "react-router-dom"

const Product = ()=>{
    const loading=useSelector((state)=>state.product.loading)
    const data=useSelector((state)=>state.product.data)
        console.log({loading,data});
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts())
    },[])
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleClick = () => {
        const token = localStorage.getItem("token")
            if(token) {
                localStorage.clear()
                navigate("/")
            }else{
                navigate("/login")
            }
    }

    return(
        <>
        <h1>All product</h1>
        <button
        
            style={{width: 'auto' , height: 'auto'}}
            onClick={handleClick}
         >
            {token ? `logout` : `login`}
        </button>
        
        <div class="listing-section">
           {loading ? 
                <img src={loader} height={600} width={800} />
           :
           data?.products?.length > 0 ?
           <ProductList
              data={data?.products}
           />
           :
           <div>
            <h1>no porudct found</h1>
           </div>
           }
        </div>
        </>
    )
}

export default Product