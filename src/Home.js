import React from "react";
import "./home.css";
import Footer from "./Footer";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel"
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
       
      <div className="home_image">
          <Carousel  interval="4000" home_images >
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg "
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ZGU1MTFjY2Mt-w1500._CB669562935_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YmQ1NDM5ZDgt-w1500._CB412095397_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
          <div className="home__row">
          <Product
            id="B01L1P34MS"
            title="Ethiopian Gonder Habeshan Hand Made Custom Unique Dress and Traditional Women Clothing"
           price={24.99}
            rating={5}
     image="https://m.media-amazon.com/images/I/61EQEw1QxiL._MCnd_AC_UL320_.jpg"
          />
          
          <Product
            id="B08FFMSNHW"
            title="6Pcs Matte Liquid Lipstick Makeup Set, Matte liquid Long-Lasting Wear Non-Stick Cup Not Fade Waterproof Lip Gloss (Set A)"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61YVyDv6rbL._AC_UL320_.jpg"
          />

<Product
            id="B01C2EH92I"
            title="Luminess Air Basic Airbrush System with 7-Piece Silk 4-IN-1 Airbrush Foundation & Cosmetic Starter Kit, Warm"
            price={152.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/8100-oG0SsL._AC_UL320_.jpg"
          />

        </div>



            <div className="home__row">
            <Product
            id="B07953D198"
            title="Ethiopian/Eritrean Coffee Cups with Rékébot. Tilet Edition. Full Set. ጥለት ረከቦት & ስኒ."
           price={108.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61nnISKAuDL._AC_UL320_.jpg"
          />
           
           <Product
            id="B00A3CMQDO"
            title="3D Rose Ethiopia: Tigray-Axum-Woven Baskets-Market-Af16 Ajn0250-Alison Jones Iron On Heat Transfer, 10 x 10, White"
            
            price={17.99}
            rating={3}
             image="https://m.media-amazon.com/images/I/71bf1I-ZVJL._AC_UL320_.jpg"
          
          />
        
        <Product
            id="B08H567BPH"
            title="PEPPER JOBS 15.6inch USB-C Portable Monitor HD Laptop Monitor Extender for Dual Monitor Display Gaming Monitor Screen Dual Speakers and Smart Cover HDMI-in OTG for Samsung DeX Huawei PS4 "
            price={199.99}
            rating={3}
             image="https://m.media-amazon.com/images/I/51ts7ICmHzL._AC_SR160,160_.jpg"
            
          />
        
           
       
            </div>
  
      
       
         

        <div className="home__row">
          <Product
            id="	B0885SCXFZ"
            title="TCL 50-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 50S535, 2021 Model"
            price={449.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91tMNAWWsPL._AC_UY218_.jpg"
          />
            <Product
            id="B084BX1C4L"
            title="Hisense 65-Inch Class R8 Series Dolby Vision & Atmos 4K ULED Roku Smart TV with Alexa Compatibility and Voice Remote (65R8F, 2020 Model)"
            price={799.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51xxoC-+F8L._AC_SY200_.jpg"/>
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829331"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
           <Product
            id="B07Z3BKFQW"
            title="Video Camera Camcorder Full HD 1080P 30FPS 24.0 MP IR Night Vision Vlogging Camera Recorder 3.0 Inch IPS Screen 16X Zoom Camcorders Camera Remote Control with 2 Batteries"
            price={69.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71cIXkUvQQL._AC_UY218_.jpg"
          />
          <div className="home-page-entire-row">
               <div className="home-page-first-list-wrapper">
                    <div className="home-page-first-list">
                        {/* <h2>Deals under $200</h2>
                        {this.renderList()} */}
                    </div>
                    </div>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
