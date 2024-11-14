import React from 'react'
import styles from './HomePage.module.css';
import logoo from "../img/logoo.png";
import { IoIosSearch } from "react-icons/io";
import { TiShoppingBag } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import Product from "../img/Package.png";
import Customer from "../img/Customer-Service 3.png";
import Delivery from "../img/Delivery.png";
import arrow from "../img/img3.png";
import img2 from "../img/img2.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img9 from "../img/img9.png";
import img8 from "../img/img8.png";
import img14 from "../img/img14.png";
import box from "../img/Package.png";
import delivery from "../img/Delivery.png";
import customer from "../img/Customer-Service 3.png";
import img15 from "../img/img15.png";
import img16 from "../img/img16.png"
import img17 from "../img/img17.png";
import img18 from "../img/img18.png";
import drug from "../img/100 1.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";








function HomePage() {
  return (
    <div className={styles.Page}>
      <div className={styles.box1}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logoo} alt="Avatar" />
          </div>
          <div className={styles.detail} >
            <ul>
              <li>Shop All</li>
              <li>shop by Benefits</li>
              <li>About</li>
              <li>Bundles</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.icon}>
            <ul>
              <li><IoIosSearch/></li>
              <li><TiShoppingBag /></li>
              <li><FaRegUser /></li>
            </ul>
          </div>
        </div>
        <div className={styles.font}>
          <p>MICROSECONDS MATTER</p>
          <h1>Win your horserace <br />
            with TTL supplements</h1>
          <p>Scientifically formulated racehorse supplements <br /> from the home of champions </p>
          <div className={styles.box1btn}>
            <button>Discover</button>
          </div>
          <div className={styles.Last}>
            <ul>
              <li> <img src={Product} alt="product" />
                Never Got Returned  <br />Products</li>
              <li><img src={Delivery} alt="delivery" /> Fast Delivery</li>
              <li> <img src={Customer} alt="customer" />Customer Support</li>
              <li><img src={Customer} alt="customer" />Lorem isprem</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.detail2}>
          <h3>Uniquely formulated <br />
            for horse trainers</h3>
          <h1>Who Want to Win</h1>
          <p>From joint health to muscle strength, our products <br />
            keep your horse fit, fast, and ready to win. With <br />
            advanced formulations trusted by top trainers, you <br />
            can push past the competition and achieve the <br />
            results you’ve been aiming for.
          </p>
          <div className={styles.btn2}>
            <button>Get Race Ready <img src={arrow} alt="arrow" /></button>
          </div>
        </div>
        <div className={styles.img2}>
          <img src={img2} alt="riding" />
        </div>
      </div>

      <div className={styles.box2}>
        <div className={styles.img2}>
          <img src={img4} alt="riding" />
        </div>
        <div className={styles.detail3}>
          <h3>Uniquely formulated <br />
            for horse trainers</h3>
          <h1>Who Want to Win</h1>
          <p>From joint health to muscle strength, our products <br />
            keep your horse fit, fast, and ready to win. With <br />
            advanced formulations trusted by top trainers, you <br />
            can push past the competition and achieve the <br />
            results you’ve been aiming for.
          </p>
          <div className={styles.btn2}>
            <button>Get Race Ready <img src={arrow} alt="arrow" /></button>
          </div>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.box3detail}>
          <h1>Our <span>Core</span>Products</h1>
          <p>Keep your horse race-ready with our all-natural, <br />
            performance-enhancing solutions.</p>
        </div>
        <div className={styles.box3item}>
          <div class={styles.productlist}>
            <div class={styles.card}>
              <img src={img5} alt="UN-LOCK+" className={styles.image} />
              <h3 className={styles.title}>UN-LOCK+</h3>
              <p className={styles.description}>Horserace performance muscle formula for endurance, fatigue...</p>
              <div className={styles.supports}>
                <span className={styles.supporticon}>💪 Endurance</span>
                <span className={styles.supporticon}>🛠️ Recovery</span>
              </div>
              <div className={styles.pricecontainer}>
                <span className={styles.price}>$149.00</span>
                <span className={styles.priceperday}>$0.75 per day</span>
              </div>
              <a href="#" className={styles.shopbutton}>Shop Now →</a>
            </div>

            <div className={styles.card}>
              <img src={img6} alt="Flexify-HA" className={styles.image} />
              <h3 className={styles.title}>Flexify-HA</h3>
              <p className={styles.description}>Joint support formula for cartilage, flexibility and joint health</p>
              <div className={styles.supports}>
                <span className={styles.supporticon}>🦴 Joint Health</span>
              </div>
              <div className={styles.pricecontainer}>
                <span className={styles.price}>$149.00</span>
                <span className={styles.priceperday}>$0.75 per day</span>
              </div>
              <a href="#" className={styles.shopbutton}>Shop Now →</a>
            </div>

            <div class={styles.card}>
              <img src={img5} alt="UN-LOCK+" className={styles.image} />
              <h3 className={styles.title}>UN-LOCK+</h3>
              <p className={styles.description}>Horserace performance muscle formula for endurance, fatigue...</p>
              <div className={styles.supports}>
                <span className={styles.supporticon}>💪 Endurance</span>
                <span className={styles.supporticon}>🛠️ Recovery</span>
              </div>
              <div className={styles.pricecontainer}>
                <span className={styles.price}>$149.00</span>
                <span className={styles.priceperday}>$0.75 per day</span>
              </div>
              <a href="#" className={styles.shopbutton}>Shop Now →</a>
            </div>

            <div class={styles.card}>
              <img src={img5} alt="UN-LOCK+" className={styles.image} />
              <h3 className={styles.title}>UN-LOCK+</h3>
              <p className={styles.description}>Horserace performance muscle formula for endurance, fatigue...</p>
              <div className={styles.supports}>
                <span className={styles.supporticon}>💪 Endurance</span>
                <span className={styles.supporticon}>🛠️ Recovery</span>
              </div>
              <div className={styles.pricecontainer}>
                <span className={styles.price}>$149.00</span>
                <span className={styles.priceperday}>$0.75 per day</span>
              </div>
              <a href="#" className={styles.shopbutton}>Shop Now →</a>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.background1}>
        <img src={img8} alt="" />
      </div>
      <div className={styles.box4}>
        <div className={styles.Header}>
          <h1><span>Support</span>Your Horse,Head to Hoof</h1>
          <p>Click to learn how our products enhance specific areas.</p>
        </div>
        <div className={styles.box4item}>
          <div className={styles.it1}>
            <div class={styles.card}>
              <img src={img5} alt="UN-LOCK+" className={styles.image} />
              <h3 className={styles.title}>UN-LOCK+</h3>
              <p className={styles.description}>Horserace performance muscle formula for endurance, fatigue...</p>
              <div className={styles.supports}>
                <span className={styles.supporticon}>💪 Endurance</span>
                <span className={styles.supporticon}>🛠️ Recovery</span>
              </div>
              <div className={styles.pricecontainer}>
                <span className={styles.price}>$149.00</span>
                <span className={styles.priceperday}>$0.75 per day</span>
              </div>
              <a href="#" className={styles.shopbutton}>Shop Now →</a>
            </div>
          </div>
          <div>
            <div className={styles.img9}>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <img src={img14} alt="" />
        <div className={styles.background1btn}>
          <button>Get Started Today! →</button>
        </div>
      </div>
      <div className={styles.box5}>
        <div className={styles.smallbox}>
          <div className={styles.small}>
            <img src={box} alt="" />
            <h3>Return Policy</h3>
            <p>We've never had a return.<br />
              That how fonfident we are.</p>
          </div>
          <div className={styles.small}><img src={delivery} alt="" />
            <h3>Return Policy</h3>
            <p>We've never had a return.<br />
              That how fonfident we are.</p></div>
          <div className={styles.small}><img src={customer} alt="" />
            <h3>Return Policy</h3>
            <p>We've never had a return.<br />
              That how fonfident we are.</p></div>

        </div>
      </div>
      <div className={styles.box6}>
        <div className={styles.sub_save}>
          <div>
            <h1><span>Subscribe</span> & Save</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <ul>
              <li>Save Upto 20%</li>
              <li>From as little as $0.70 a day</li>
              <li>Pause or cancel anytime</li>
            </ul>
          </div>
          <div className={styles.sub_savebtn}><button>Shop Now</button></div>
        </div>
        <div className={styles.sub_img}>
          <img src={img15} alt="" />
        </div>
      </div>

      <div className={styles.box7}>
        <div className={styles.image_grid}>
          <img src={img16} alt="Horse Riding" className="image" />
          <img src={img17} alt="Horse Care" className="image" />
          <img src={img18} alt="Horse Racing" className="image" />
          <img src={img18} alt="Horse Training" className="image" />
          <img src={img18} alt="Horse in Nature" className="image" />
          <img src={img18} alt="Horse Jumping" className="image" />
        </div>

        <div className={styles.subscribe_section}>
      <h2 className={styles.title}>Stay Ahead of the Pack</h2>
      <p className={styles.subtitle}>Sign up for tips, offers, and more</p>
      <form className={styles.subscribe_form}>
        <input type="email" placeholder="Type your email" className={styles.email_input} required />
        <button type="submit" className={styles.subscribe_button}>Subscribe Now →</button>
      </form>
      <div className={styles.social_icons}>
        <a href="#" ><FaFacebookF />
</a>
        <a href="#" ><FaInstagram />
</a>
        <a href="#" ><FaTwitter />
</a>
        <a href="#" ><FaLinkedinIn />
</a>
        <a href="#" ><FaYoutube />
</a>
      </div>
    </div>
      </div>

      <footer className={styles.footer}>
    <div className={styles.footerContainer}>
    
      <div className={styles.trustSection}>
        <img src={drug} alt="Drug Free Logo" className={styles.trustLogo}/>
        <div className={styles.trustText}>
          <h3><span className={styles.highlight}>Trust</span> in Every Scoop</h3>
          <p>Non-swabbable formulas for your peace of mind</p>
        </div>
      </div>

      
      <div className={styles.linksSection}>
        <h4 className={styles.sectionTitle}>Quick Links</h4>
        <ul className={styles.linksList}>
          <li><a href="#" className="#">Shop</a></li>
          <li><a href="#" className="#">About</a></li>
          <li><a href="#" className="#">Bundles</a></li>
          <li><a href="#" className="#">Contact</a></li>
        </ul>
      </div>

      
      <div className={styles.contactSection}>
        <h4 className={styles.sectionTitle}>Contact Us</h4>
        <ul className={styles.contactList}>
          <li><span className={styles.contactIcon}>✉️</span> contact@company.com</li>
          <li><span className={styles.contactIcon}>📞</span> (414) 687 - 5892</li>
          <li><span className={styles.contactIcon}>📍</span> 794 Mcallister St San Francisco, 94102</li>
        </ul>
      </div>
    </div>

    
    <div className={styles.footerBottom}>
      <p>Copyright © 2024 The Trainer Locker</p>
      <p>All Rights Reserved | <a href="#" className="footerLink">Terms and Conditions</a> | <a href="#" className="footerLink">Privacy Policy</a></p>
    </div>
  </footer>


    </div>

  )
}

export default HomePage;
