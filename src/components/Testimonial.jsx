import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i className='fa-solid fa-arrow-left'></i>","<i className='fa-solid fa-arrow-right'></i>"],
    dots: false,
    items:1,
  };
  return (
    <OwlCarousel {...options} className="owl-theme">
      <div className="item">
        <div className="testimonial-box">
          <div className="author-img">
            <img src="assets/author.png" alt="author" className="img-fluid" />
          </div>
          <div className="testimonial-cnt">
            <div className="desc">
              <p>
                Hapto has been an integral part of our work ecosystem, keeping
                track of things has
              </p>
              <h5>Alan Thicke, Manager, Polymer</h5>
              <h6>
                <img
                  src="assets/Icon ionic-logo-polymer.png"
                  alt="testimonial-icon"
                  className="img-fluid"
                />
                POLYMER
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="testimonial-box">
          <div className="author-img">
            <img src="assets/author.png" className="img-fluid" />
          </div>
          <div className="testimonial-cnt">
            <div className="desc">
              <p>
                Hapto has been an integral part of our work ecosystem, keeping
                track of things has
              </p>
              <h5>Alan Thicke, Manager, Polymer</h5>
              <h6>
                <img
                  src="assets/Icon ionic-logo-polymer.png"
                  className="img-fluid"
                />
                POLYMER
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="testimonial-box">
          <div className="author-img">
            <img src="assets/author.png" className="img-fluid" />
          </div>
          <div className="testimonial-cnt">
            <div className="desc">
              <p>
                Hapto has been an integral part of our work ecosystem, keeping
                track of things has
              </p>
              <h5>Alan Thicke, Manager, Polymer</h5>
              <h6>
                <img
                  src="assets/Icon ionic-logo-polymer.png"
                  className="img-fluid"
                />
                POLYMER
              </h6>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Testimonial;
