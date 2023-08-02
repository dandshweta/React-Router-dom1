import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((result) => {
      if (result.data) {
        setProducts(result.data.products);
      }
    });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>My Products</h1>
      <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                padding: 12,
                border: "1px solid silver",
                width: "180px",
                listStyleType: "none",
              }}
            >
              <Link to={`/product/${item.id}`}>
                {/* <Link to={"/product/:id"}> */}
                <p>{item.title}</p>
                <p>{item.price}</p>
                {/* <p>{item.Title}</p> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductInfo;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ProductInfo = () => {
//   const [products, setProducts] = useState([]);
//   //   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     axios.get("https://dummyjson.com/products").then((result) => {
//       if (result.data.products) {
//         setProducts(result.data.products);
//         // setLoading(false); // Set loading to false once data is fetched
//       }
//     });
//   }, []);

//   //   if (loading) {
//   //     return <div>Loading...</div>; // Show loading message while data is being fetched
//   //   }

//   return (
//     <div>
//       <h1>My Products</h1>
//       <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//         {products.map((item) => {
//           return (
//             <li
//               key={item.id}
//               style={{
//                 padding: 12,
//                 border: "1px solid silver",
//                 width: "180px",
//                 listStyleType: "none",
//               }}
//             >
//               <Link to={`/product/${item.id}`}>
//                 <p>{item.title}</p>
//                 <p>{item.price}</p>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ProductInfo;
