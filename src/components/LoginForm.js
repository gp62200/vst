import React from 'react';
import './style.css';
function LoginForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="prn">
                  <label className="form__label" for="prn">PRN </label>
                  <input  type="number" id="prn" className="form__input" placeholder="Enter Prn"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
        
          </div>
          <div class="footer">
              <button type="submit" class="btn">Submit</button>
          </div>
      </div>      
    )       
}
export default LoginForm;