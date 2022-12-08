import React, { useState } from "react";
import "../../App.css";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <h1 className="sign-up">
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label for="name">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="full Name"
          />
          <label for="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label for="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here..
      </button>
    </h1>
  );
}
