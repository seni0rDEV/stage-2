import { useContext } from "react";
import "./Store.css";
import image1 from "../assets/product_10.png";
import image2 from "../assets/product_11.png";
import image3 from "../assets/product_12.png";
import image4 from "../assets/product_13.png";
import image5 from "../assets/product_14.png";
import image6 from "../assets/product_15.png";
import image7 from "../assets/product_16.png";
import image8 from "../assets/product_17.png";
import image9 from "../assets/product_18.png";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Product 1",
    img: image1,
    size: "M",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    img: image2,
    size: "L",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 80,
  },
  {
    id: 3,
    name: "Product 3",
    img: image3,
    size: "XL",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui.",
    price: 100,
  },
  {
    id: 4,
    name: "Product 4",
    img: image4,
    size: "XXL",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 80,
  },
  {
    id: 5,
    name: "Product 5",
    img: image5,
    size: "M",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ",
    price: 100,
  },
  {
    id: 6,
    name: "Product 6",
    img: image6,
    size: "L",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 80,
  },
  {
    id: 7,
    name: "Product 7",
    img: image7,
    size: "XL",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
  },
  {
    id: 8,
    name: "Product 8",
    img: image8,
    size: "XXL",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    price: 80,
  },
  {
    id: 9,
    name: "Product 9",
    img: image9,
    size: "M",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 100,
  },
];

function Store() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <br />
      <p className="store-para">store front</p>
      <br />
      <br />
      <p className="pagination">
        showing <b>9</b> results of <b>50</b> items
      </p>
      <br />
      <h2 className="product-heading">FEATURED PRODUCTS</h2>
      <br />
      <div className="store-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button
                className="buy-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="subscribe-section">
        <h2>Subscribe to our News Update</h2>
        <p>By subscribing to our news you get 10% off on your first order</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Store;


// import { useContext } from "react";
// import "./Store.css";
// import image1 from "../assets/product_10.png";
// import image2 from "../assets/product_11.png";
// import image3 from "../assets/product_12.png";
// import image4 from "../assets/product_13.png";
// import image5 from "../assets/product_14.png";
// import image6 from "../assets/product_15.png";
// import image7 from "../assets/product_16.png";
// import image8 from "../assets/product_17.png";
// import image9 from "../assets/product_18.png";
// import { CartContext } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     img: image1,
//     size: "M",
//     price: 100,
//     description: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     img: image2,
//     size: "L",
//     price: 80,
//     description: "Sed do eiusmod tempor incididunt.",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     img: image3,
//     size: "XL",
//     price: 100,
//     description: "Ut enim ad minim veniam.",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     img: image4,
//     size: "XXL",
//     price: 80,
//     description: "Duis aute irure dolor in reprehenderit.",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     img: image5,
//     size: "M",
//     price: 100,
//     description: "Excepteur sint occaecat cupidatat non proident.",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     img: image6,
//     size: "L",
//     price: 80,
//     description: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     id: 7,
//     name: "Product 7",
//     img: image7,
//     size: "XL",
//     price: 100,
//     description: "Sed do eiusmod tempor incididunt.",
//   },
//   {
//     id: 8,
//     name: "Product 8",
//     img: image8,
//     size: "XXL",
//     price: 80,
//     description: "Ut enim ad minim veniam.",
//   },
//   {
//     id: 9,
//     name: "Product 9",
//     img: image9,
//     size: "M",
//     price: 100,
//     description: "Duis aute irure dolor in reprehenderit.",
//   },
// ];

// function Store() {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div>
//       <div className="banner">Welcome to Our Store</div>
//       <br />
//       <p className="store-para">store front</p>
//       <br />
//       <br />
//       <p className="pagination">
//         showing <b>9</b> results of <b>50</b> items
//       </p>
//       <br />
//       <h2 className="product-heading">FEATURED PRODUCTS</h2>
//       <br />
//       <div className="store-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-details">
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <button
//                 className="buy-button"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="subscribe-section">
//         <h2>Subscribe to our News Update</h2>
//         <p>By subscribing to our news you get 10% off on your first order</p>
//         <div className="subscribe-form">
//           <input type="email" placeholder="Enter your email" />
//           <button>Subscribe</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Store;
