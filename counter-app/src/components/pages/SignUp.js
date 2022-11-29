import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <h1 className="sign-up">
      <div>
        <form className="login-form">
          <label for="email">email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label for="password">password</label>
          <input
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
      <button className="link-btn">
        Don't have an account? Register here.
      </button>
    </h1>
  );
}
