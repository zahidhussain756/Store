import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Barveza</h3>
                <p>
                  Pirmahal <br />
                  Rajhana Road distt TTS
                  <br />
                  Pakistan
                  <br />
                  <br />
                  <strong>Phone:</strong> +923009866420
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Social Media Network</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <button
                      type="button"
                      class="btn btn-social-icon btn-outline-facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </button>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <button
                      type="button"
                      class="btn btn-social-icon btn-outline-linkedin"
                    >
                      <i class="fa fa-linkedin"></i>
                    </button>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <button
                      type="button"
                      class="btn btn-social-icon btn-outline-youtube"
                    >
                      <i class="fa fa-youtube"></i>
                    </button>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <button
                      type="button"
                      class="btn btn-social-icon btn-outline-twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Communing Soon</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                {/* <div className="social-links mt-3">
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#" class="fa fa-twitter">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
