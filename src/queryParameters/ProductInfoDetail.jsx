import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const ProductInfoDetail = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams);
  const productId = searchParams.get("category");
  console.log(productId);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      if (result.data) {
        setProducts(result.data);
      }
    });
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={`/product?category=mensClothes`}> Mens Clothes</Link>
        <Link to={`/product?category=electronicItems`}> Electronics Items</Link>
        <Link to={`/product?category=womenClothes`}> Women Clothes</Link>
      </div>
      <div>
        <ul>
          {products.map((item) => (
            <li
              key={item.id}
              style={{
                listStyleType: "none",
                background: "pink",
                width: "20%",
                margin: "10px",
                padding: "12px",
                border: "1px solid silver",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "80px", height: "80px" }}
              />
              <p>Title: {item.title}</p>

              <p>Price: {item.price}</p>
              <p>Category:{item.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfoDetail;
