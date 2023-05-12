import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // state for handling the inputs
  const Navigate = useNavigate();
  const empty = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [handle, setHandle] = useState(empty);
  const accountHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const createUser = async () => {
    if (
      handle.name === "" ||
      handle.email === "" ||
      handle.subject === "" ||
      handle.message === ""
    ) {
      alert("Please fill in all the input fields.");
    } else {
      await fetch("http://localhost:6100/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      alert("Message has been sent successfully.");
      Navigate("/contact");
    }
  };

  return (
    <div className="container">
      <>
        {/*Section: Contact v.2*/}
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        onChange={accountHandler}
                        type="text"
                        name="name"
                        value={handle.name}
                        className="form-control"
                      />
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        onChange={accountHandler}
                        type="text"
                        required
                        id="email"
                        name="email"
                        value={handle.email}
                        className="form-control"
                      />
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        onChange={accountHandler}
                        type="text"
                        id="subject"
                        name="subject"
                        value={handle.subject}
                        className="form-control"
                      />
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        onChange={accountHandler}
                        type="text"
                        id="message"
                        name="message"
                        value={handle.message}
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
              </form>
              <div className="text-center text-md-left">
                <button className="btn btn-success" onClick={createUser}>
                  Send
                </button>
              </div>
              <div className="status" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>Pirmahal, Barvezastore, Pak</p>
                </li>
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>+ 92 300 9866420</p>
                </li>
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>Zahidhussain756@gmail.com</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </>
    </div>
  );
}

export default Contact;
