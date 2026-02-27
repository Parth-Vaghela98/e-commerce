import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faCartShopping, faCar, faMoneyBill, faGlobe, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faYoutube, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import category from "../Home/Gallery/category-1.jpg";
import men from "../Home/Gallery/category-2.jpg";
import kid from "../Home/Gallery/category-3.jpg";
import cosmetic from "../Home/Gallery/category-4.jpg";
import accessories from "../Home/Gallery/category-5.jpg";
import blazer from "../Home/Gallery/product-1.jpg";
import flowy from "../Home/Gallery/product-2.jpg";
import frock from "../Home/Gallery/product-3.jpg";
import slim from "../Home/Gallery/product-4.jpg";
import shirt from "../Home/Gallery/product-5.jpg";
import striped from "../Home/Gallery/product-6.jpg";
import v_neck from "../Home/Gallery/product-7.jpg";
import comfy from "../Home/Gallery/product-8.jpg";
import banner from "../Home/Gallery/banner-1.jpg";
import bag from "../Home/Gallery/ht-1.jpg.webp";
import earrings from "../Home/Gallery/ht-2.jpg.webp";
import shirt_2 from "../Home/Gallery/ht-3.jpg.webp";
import jeans from "../Home/Gallery/bs-1.jpg.webp";
import briefcase from "../Home/Gallery/bs-2.jpg.webp";
import leather_bag from "../Home/Gallery/bs-3.jpg.webp";
import wrap_skirt from "../Home/Gallery/f-1.jpg.webp";
import Metallic_earrings from "../Home/Gallery/f-2.jpg.webp";
import cross_body_bag from "../Home/Gallery/f-3.jpg.webp";
import summer from "../Home/Gallery/discount.jpg.webp";
import clipes from "../Home/Gallery/insta-1.jpg";
import henger from "../Home/Gallery/insta-2.jpg";
import chai from "../Home/Gallery/insta-3.jpg";
import hat from "../Home/Gallery/insta-4.jpg";
import hand from "../Home/Gallery/insta-5.jpg";
import camisole from "../Home/Gallery/insta-6.jpg";





function Home() {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/product_details", {
      state: {
        image: blazer,
        title: "Buttons tweed blazer",
        price: 59,
        rating: 5,
      },
    });
  };


  const product = {
    blazer: blazer,
    "zara - blazer": "Buttons Tweed Blazer",
    "$59": 59,
    name: "Blazer"
  };


  const handleAddToCart = () => {
    navigate("/addcart", { state: { product } });
  };

  // check login
  const userData = JSON.parse(localStorage.getItem("user"));

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="main">
      <div className="nav-bar">
        <div className='logo'>
          <h1>Ashion</h1>
        </div>
        <div className='nav'>
          <ul className="ul">
            <li>HOME</li>
            <li>WOMEN'S</li>
            <li>MAN'S</li>
            <li>SHOP</li>
            <li>PAGES</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="search">

          {!userData ? (
            <>
              <Link to="/signup" className="login-link">Signup</Link>
              <Link to="/signin" className="login-link">Signin</Link>
            </>
          ) : (
            <>
              <span className="welcome-text">
                Welcome {userData?.user?.name || "User"}
              </span>

              <button onClick={handleLogout} className="logout-btn">
                Log out
              </button>
            </>
          )}

          <p><FontAwesomeIcon icon={faSearch} /></p>
          <p><FontAwesomeIcon icon={faHeart} /></p>
          <p onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </p>

        </div>



      </div>
      <div className="clothes">

        <div className="row">
          <div className="col-md-6 imgce" >
            <img id="style" src={category} />
            <div className="center">
              <h1 id="styles-text">Women’s fashion</h1>
              <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-<br></br>unt labore edolore magna aliquapendisse ultrices gravida.</p>
              <h4>SHOP NOW</h4>
            </div>
          </div>
          <div className="col-md-6 colmm">
            <div className="col-md-3 imgce">
              <img id="mens" src={men} style={{ marginTop: 10, marginLeft: 13, }} />

              <div className="C-2">
                <h1>Men’s fashion</h1>
                <p>358 items</p>
                <h4>SHOP NOW</h4>
              </div>
            </div>
            <div className="col-md-3 imgce">
              <img id="cos" src={cosmetic} style={{ marginLeft: 13, }} />
              <div className="C-2">
                <h1>Cosmetics</h1>
                <p>159 items</p>
                <h4>SHOP NOW</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 imags">
            <div className="col-md-3 imgce">
              <img id="k-f" src={kid} style={{ marginLeft: 13, }} />
              <div className="C-2">
                <h1>Kid’s fashion</h1>
                <p>273 items</p>
                <h4>SHOP NOW</h4>
              </div>
            </div>
            <div className="col-md-3 imgce">
              <img id="ass" src={accessories} style={{ marginLeft: 13, }} />
              <div className="C-2">
                <h1>Accessories</h1>
                <p>792 items</p>
                <h4>SHOP NOW</h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="o-store">

        <div className="ca-list">
          <h2 >NEW PRODUCT</h2>
          <ul className="ul-2">
            <li>All</li>
            <li>Women’s</li>
            <li>Men’s</li>
            <li>Kid’s</li>
            <li>Accessories</li>
            <li>Cosmetics</li>
          </ul>
        </div>

        <div className="ca-shopping row">


          <div className="card" style={{ width: "18rem", cursor: "pointer" }} onClick={handleClick}>
            <img src={product.blazer} className="card-img-top" alt={product.name} />

            <div className="add-to-cart">
              <p className="liked">
                <FontAwesomeIcon icon={faHeart} />
              </p>
              <p className="cart" onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartShopping} />
              </p>
            </div>

            <div className="card-body">
              <p className="card-text">{product["zara - blazer"]}</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">${product["$59"]}</h2>
            </div>
          </div>



          <div className="card" style={{ width: '18rem' }}>
            <img src={flowy} className="card-img-top" alt="Flowy" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Flowy Dress</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$49.0</h2>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={frock} className="card-img-top" alt="Frock" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Elegant Frock</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$59.0</h2>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={slim} className="card-img-top" alt="Slim Dress" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Slim Fit Dress</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$59.0</h2>
            </div>
          </div>
        </div>

        <div className="ca-shopping row">

          <div className="card" style={{ width: '18rem' }}>
            <img src={shirt} className="card-img-top" alt="Blazer" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Fit micro corduroy shirt</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$59.0</h2>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={striped} className="card-img-top" alt="Flowy" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Tropical kimono</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$49.0</h2>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={v_neck} className="card-img-top" alt="Frock" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">V-neck camisole</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$59.0</h2>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={comfy} className="card-img-top" alt="Slim Dress" />
            <div className="add-to-cart">
              <p className="liked"><FontAwesomeIcon icon={faHeart} /></p>
              <p className="cart"> <FontAwesomeIcon icon={faCartShopping} />  </p>
            </div>
            <div className="card-body">
              <p className="card-text">Relsxed-fit shirt</p>
              <p className="card-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h2 className="card-price">$59.0</h2>
            </div>
          </div>
        </div>

      </div>


      <div className="banner">
        <img id="" src={banner} />
        <div className="slid-show">
          <span>THE CHLOE COLLECTION</span>
          <h1>The Project Jacket</h1>
          <h4>SHOP NOW</h4>
        </div>
      </div>


      <div className="container">
        <div className="hot-trend">
          <h2>HOT TREND</h2>
          <div className="ht-product row">
            <img src={bag} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Chain bucket bag</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={earrings} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Pendant earrings</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={shirt_2} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Cotton T-Shirt                                                                                                                                                                                                   </p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>

        </div>

        <div className="hot-trend">
          <h2>Best seller</h2>
          <div className="ht-product row">
            <img src={jeans} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Cotton jeans</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={briefcase} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Zip-pockets pebbled tote
                briefcase</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={leather_bag} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Round leather bag</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>

        </div>

        <div className="hot-trend">
          <h2>Feature</h2>
          <div className="ht-product row">
            <img src={wrap_skirt} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Bow wrap skirt</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={Metallic_earrings} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Metallic earrings</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>
          <div className="ht-product row">
            <img src={cross_body_bag} alt="Bag" className="product-image" />
            <div className="httext">
              <p>Flap cross-body bag</p>
              <p className="mini">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <h3>$59.00</h3>
            </div>
          </div>

        </div>

      </div>

      <div className="container-2">
        <div className="s-img">
          <img id="" src={summer} />
        </div>
        <div className="discount">
          <div className="d-text">
            <span>Discount</span>
            <h1>Summer 2019</h1>
            <p>Sale 50%</p>
          </div>
          <div className="time">
            <h2>29 Day  07 Hour  00 Min  59 Sec</h2>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="circle">

        </div>
      </div>


      <div className="container-3">
        <div className="font">
          <div className="car">
            <p id="f-a"><FontAwesomeIcon icon={faCar} /></p>
          </div>
          <div className="f-text">
            <span>Free Shipping</span><br></br>
            <p>For all oder over $99</p>
          </div>
        </div>

        <div className="font">
          <div className="car">
            <p id="f-a"><FontAwesomeIcon icon={faMoneyBill} /></p>
          </div>
          <div className="f-text">
            <span>Money Back Guarantee</span><br></br>
            <p>If good have Problems</p>
          </div>
        </div>

        <div className="font">
          <div className="car">
            <p id="f-a"><FontAwesomeIcon icon={faGlobe} /></p>
          </div>
          <div className="f-text">
            <span>Online Support 24/7</span><br></br>
            <p>Dedicated support</p>
          </div>
        </div>

        <div className="font">
          <div className="car">
            <p id="f-a"><FontAwesomeIcon icon={faReceipt} /></p>
          </div>
          <div className="f-text">
            <span>Payment Secure</span><br></br>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>

      <div className="container-4">
        <img src={clipes} id="i-2" />
        <img src={henger} id="i-2" />
        <img src={chai} id="i-2" />
        <img src={hat} id="i-2" />
        <img src={hand} id="i-2" />
        <img src={camisole} id="i-2" />

      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Ashion</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Orders Tracking</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <p><FontAwesomeIcon icon={faFacebook} /></p>
              <p><FontAwesomeIcon icon={faXTwitter} /></p>
              <p><FontAwesomeIcon icon={faYoutube} /></p>
              <p><FontAwesomeIcon icon={faInstagram} /></p>
              <p><FontAwesomeIcon icon={faPinterest} /></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 2025 All rights reserved | This template is made with <span className="heart">❤</span> by Colorlib
          </p>
        </div>
      </footer>



    </div>
  );
}

export default Home;
