import './pro-deatailling.css';
import { useLocation, useNavigate } from "react-router-dom";

function Deatailling() {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive product info from Home
  const { image, title, price, rating } = location.state || {};

  // Build a product object to send to cart
  const product = {
    image,
    name: title || "Product Name",
    price: price || 59,
    rating: rating || 4.5,
    brand: "Zara",
    category: "Blazer",
  };

  // When clicked, go to Add Cart page
  const handleAddToCart = () => {
    navigate("/addcart", { state: { product } });
  };

  return (
    <div className="product-page">
      {/* LEFT: IMAGE */}
      <div className="image-box" style={{ width: "300px", height: "400px" }}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="product-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        ) : (
          <div className="placeholder-text">Image Preview</div>
        )}
      </div>

      {/* RIGHT: DETAILS */}
      <div className="product-details">
        <h2 className="brand">{title || "Product Title"}</h2>
        <p className="title">Exclusive Design & Quality</p>

        <div className="rating">
          <span className="rating-value">{rating || 4.5} ★</span>
          <span className="ratings-count"> | 5 Ratings</span>
        </div>

        <div className="price">
          <span className="current-price">₹{price || 59}</span>
          <span className="mrp">MRP ₹69</span>
          <span className="discount">(10% OFF)</span>
        </div>

        <p className="tax-info">inclusive of all taxes</p>

        <div className="buttons">
          <button className="add-to-bag" onClick={handleAddToCart}>
            ADD TO BAG
          </button>
          <button className="wishlist">♡ WISHLIST</button>
        </div>
      </div>
    </div>
  );
}

export default Deatailling;
