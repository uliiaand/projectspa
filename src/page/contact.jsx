function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted');
    };
  
    return (
    <div className="purple lighten-4" style={{ minHeight: '80vh', padding: '20px 0', marginTop: '50px', marginBottom: '50px '}}>
      <div className="container">
        <h2 className="center-align purple-text text-darken-1">Contact Us</h2>
        <p className="flow-text center-align">
          Have questions about our recipes? Want to share your own? We'd love to hear from you!
        </p>

        <div className="row">
          <div className="col s12 m6">
            <div className="card purple lighten-5">
              <div className="card-content">
                <span className="card-title purple-text text-darken-1">Contact Information</span>
                <p>
                  <i className="material-icons purple-text text-darken-1">email</i> 
                  <strong> Email:</strong> recipes@example.com
                </p>
                <p>
                  <i className="material-icons purple-text text-darken-1">phone</i> 
                  <strong> Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <i className="material-icons purple-text text-darken-1">location_on</i> 
                  <strong> Address:</strong> 123 Recipe Lane, Foodville, FC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card purple lighten-5">
              <div className="card-content">
                <span className="card-title purple-text text-darken-1">Send Us a Message</span>
                <form>
                  <div className="input-field">
                    <input id="name" type="text" className="validate" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="input-field">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="input-field">
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <button 
                    className="btn waves-effect waves-light blue accent-3" 
                    type="submit"
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Contact};