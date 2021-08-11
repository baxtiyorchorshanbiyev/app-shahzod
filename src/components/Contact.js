import React, {useState, useEffect} from 'react';
//@H0j1_7777
const Contact = () => {
  return (
    <>
    <section className="contact">
      <div className="contact-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <form>
                <div className='d-flex justify-content-between align-items-center mt-5 mb-2'>
                <input name="name" type="text" required placeholder="Name" className="form-control mr-4" />
                <input name="number" type="number" required placeholder="Phone number" className="form-control" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <input name="email" type="email" required placeholder="Email" className="form-control mr-4 " />
                <input type="text" name="subject" placeholder="Subject" className="form-control"  />
                </div>
                <textarea name="commit" required className="form-control" placeholder="Message" cols="20" rows="3"> </textarea>
                <button type="submit" className="btn btn-send">Send Me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;