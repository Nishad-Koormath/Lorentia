import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorentia | Contact",
};


const ContactUs = () => {
  return (
      <div className="pt-5">
        <div className="container py-5">
          <h1 className="display-4 text-center text-warning fw-bolder mb-5">Contact Us</h1>

          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="h4 mb-4">Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <h2 className="h4 mb-4">Contact Information</h2>
              <div className="mb-4 d-flex">
                <i className="bi bi-geo-alt me-3 fs-4"></i>
                <div>
                  <h5 className="mb-1">Visit Us</h5>
                  <p className=" mb-0">
                    123 Luxury Lane
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex">
                <i className="bi bi-telephone me-3 fs-4"></i>
                <div>
                  <h5 className="mb-1">Call Us</h5>
                  <p className=" mb-0">(555) 123-4567</p>
                </div>
              </div>

              <div className="mb-4 d-flex">
                <i className="bi bi-envelope me-3 fs-4"></i>
                <div>
                  <h5 className="mb-1">Email Us</h5>
                  <p className=" mb-0">info@perfumora.com</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="mb-3">Business Hours</h5>
                <ul className="list-unstyled">
                  <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
                  <li>Saturday: 10:00 AM - 6:00 PM</li>
                  <li>Sunday: 12:00 PM - 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
