import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form className="form">
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="E-mail" />
          <small>We'll never share your email with anyone else.</small>
          <div className="gender">
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
          </div>
          <div className="row">
            <select>
              <option>Select Country</option>
              {[
                "United States",
                "Canada",
                "Germany",
                "France",
                "United Kingdom",
                "Australia",
                "India",
                "China",
                "Japan",
                "Russia",
                "Italy",
                "Brazil",
                "South Africa",
                "Spain",
                "Mexico",
              ].map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
            <input type="text" placeholder="City" />
          </div>
          <button type="submit">Sign Up</button>
          <p className="terms">
            By clicking the 'Sign Up' button, you confirm that you accept our{" "}
            <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
          </p>
        </form>
        <p className="login">
          Have an account? <a href="/">Log In</a>
        </p>
      </div>

      <div className="form-container">
        <h2>Profile</h2>
        <form className="form">
          <div className="image-upload">
            <div
              className="image-placeholder"
              onClick={() => document.getElementById("fileInput").click()}
            >
              +
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Upload
            </button>
            <button type="button">Delete</button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
            />
          </div>
          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="row">
            <select>
              <option>Select Country</option>
              {[
                "United States",
                "Canada",
                "Germany",
                "France",
                "United Kingdom",
                "Australia",
                "India",
                "China",
                "Japan",
                "Russia",
                "Italy",
                "Brazil",
                "South Africa",
                "Spain",
                "Mexico",
              ].map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
            <input type="text" placeholder="City" />
          </div>
          <div className="row">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default App;
