import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [profileImage, setProfileImage] = useState(null); // Состояние для изображения
  const [signUpErrors, setSignUpErrors] = useState({}); // Ошибки для формы Sign Up
  const [profileErrors, setProfileErrors] = useState({}); // Ошибки для формы Profile

  // Восстановление изображения из localStorage при загрузке страницы
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Создаем временный URL для отображения
      setProfileImage(imageURL); // Сохраняем в состояние
      localStorage.setItem("profileImage", imageURL); // Сохраняем в localStorage
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null); // Удаляем из состояния
    localStorage.removeItem("profileImage"); // Удаляем из localStorage
  };

  const validateForm = (formId) => {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll("input, select");
    const errors = {};

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        errors[input.name] = true;
      }
    });

    return errors;
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm("signUpForm");
    setSignUpErrors(errors); // Устанавливаем ошибки только для Sign Up
    if (Object.keys(errors).length === 0) {
      alert("Sign Up successful!");
    }
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm("updateForm");
    setProfileErrors(errors); // Устанавливаем ошибки только для Profile
    if (Object.keys(errors).length === 0) {
      alert("Profile updated successfully!");
    }
  };

  return (
    <div className="container">
      {/* Sign Up Form */}
      <div className="form-container">
        <h2>Create an Account</h2>
        <form className="form" id="signUpForm" onSubmit={handleSignUpSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className={signUpErrors.firstName ? "error" : ""}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className={signUpErrors.lastName ? "error" : ""}
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            className={`create-email ${signUpErrors.email ? "error" : ""}`}
          />
          <small>We'll never share your email with anyone else.</small>
          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                className={signUpErrors.gender ? "error" : ""}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                className={signUpErrors.gender ? "error" : ""}
              />{" "}
              Female
            </label>
          </div>
          <div className="row">
            <select
              name="country"
              className={signUpErrors.country ? "error" : ""}
            >
              <option value="">Select Country</option>
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
            <input
              type="text"
              placeholder="City"
              name="city"
              className={signUpErrors.city ? "error" : ""}
            />
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

      {/* Profile Form */}
      <div className="form-container profile-container">
        <h2>Profile</h2>
        <form className="form" id="updateForm" onSubmit={handleUpdateSubmit}>
          <div className="image-upload">
            <div
              className="image-placeholder"
              onClick={() => document.getElementById("fileInput").click()}
            >
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                "+"
              )}
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Upload
            </button>
            <button type="button" onClick={handleDeleteImage}>
              Delete
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              accept="image/*"
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className={profileErrors.name ? "error" : ""}
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              className={`profile-email ${profileErrors.email ? "error" : ""}`}
            />
          </div>
          <div className="row">
            <select
              name="country"
              className={`profile-country ${
                profileErrors.country ? "error" : ""
              }`}
            >
              <option value="">Select Country</option>
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
            <input
              type="text"
              placeholder="City"
              name="city"
              className={`profile-city ${profileErrors.city ? "error" : ""}`}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Zip Code"
              name="zipCode"
              className={profileErrors.zipCode ? "error" : ""}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className={profileErrors.phoneNumber ? "error" : ""}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default App;
