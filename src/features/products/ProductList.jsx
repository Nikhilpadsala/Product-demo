import { Link } from "react-router-dom";

// import {Link} from"react-router-dom"
const ProductList=({data})=>{
    return(
        data?.map((product,index)=>{
            // console.log(product);
            return(
                <Link to={`/product/${product?.id}`}>
            <div className="product" key={index}>
            <div className="image-box">
                    <img className="images" id="image-1" src={product?.thumbnail} />
            </div>
            <div className="text-box">
                 <h2 className="item" title={product?.title}>{product?.title?.length > 10? `${product?.title.slice(0,10)}...`:product?.title}</h2>
                 {/* <h4 className="item">{product?.brand}</h4> */}
                 <h3 className="item">{product?.category}</h3>
                <h3 className="price"> ₹{product?.price}/-</h3>
                <p style={{fontSize:'12px'}} className="description" title="description">{product?.description?.length > 40 ? `${product.description.slice(0,40)}...`:product?.description}</p>
                 <label style={{fontSize: '16px'}} type="number"  for="item-1-quantity">Quantity:</label>
                 <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
            </div>
          </div>
          </Link>
            )
        })
    )
}

export default ProductList