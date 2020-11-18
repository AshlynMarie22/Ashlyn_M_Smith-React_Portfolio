import React from "react";
import "./Contact.css"

function Contact() {
    return(
      <section className="row-contact">
          <form>
            <div className="form-group">
              <label for="FormControlName">Name</label>
              <input
                className="form-control"
                id="FormControlName"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
        </form>
        <button type="submit" className="btn btn-primary btn-lg custom-lg rounded-80" >Submit</button>
          </section>
      )}
      export default Contact;