import React from "react";
import "./Contact.css"

function Contact() {
    return(
      <section class="row-contact">
          <form>
            <div class="form-group">
              <label for="FormControlName">Name</label>
              <input
                class="form-control"
                id="FormControlName"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
        </form>
        <button type="submit" class="btn btn-primary btn-lg custom-lg rounded-80" >Submit</button>
          </section>
      )}
      export default Contact;