import React from 'react'

export function Login() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register &amp; Login</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <link rel="stylesheet" href="Login.css" />
  <div className="container" id="signup" style={{ display: "none" }}>
    <h1 className="form-title">Register</h1>
    <form method="post" action="">
      <div
        id="signUpMessage"
        className="messageDiv"
        style={{ display: "none" }}
      />
      <div className="input-group">
        <i className="fas fa-user" />
        <input type="text" id="fName" placeholder="First Name" required="" />
        <label htmlFor="fname">First Name</label>
      </div>
      <div className="input-group">
        <i className="fas fa-user" />
        <input type="text" id="lName" placeholder="Last Name" required="" />
        <label htmlFor="lName">Last Name</label>
      </div>
      <div className="input-group">
        <i className="fas fa-envelope" />
        <input type="email" id="rEmail" placeholder="Email" required="" />
        <label htmlFor="rEmail">Email</label>
      </div>
      <div className="input-group">
        <i className="fas fa-lock" />
        <input
          type="password"
          id="rPassword"
          placeholder="Password"
          required=""
        />
        <label htmlFor="rPassword">Password</label>
      </div>
      <button className="btn" id="submitSignUp">
        Sign Up
      </button>
    </form>
    <p className="or">----------or--------</p>
    <div className="icons">
      <i className="fab fa-google" />
      <i className="fab fa-facebook" />
    </div>
    <div className="links">
      <p>Already Have Account ?</p>
      <button id="signInButton">Sign In</button>
    </div>
  </div>
  <div className="container" id="signIn">
    <h1 className="form-title">Sign In</h1>
    <form method="post" action="">
      <div
        id="signInMessage"
        className="messageDiv"
        style={{ display: "none" }}
      />
      <div className="input-group">
        <i className="fas fa-envelope" />
        <input type="email" id="email" placeholder="Email" required="" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-group">
        <i className="fas fa-lock" />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required=""
        />
        <label htmlFor="password">Password</label>
      </div>
      <p className="recover">
        <a href="#">Recover Password</a>
      </p>
      <button className="btn" id="submitSignIn">
        Sign In
      </button>
    </form>
    <p className="or">----------or--------</p>
    <div className="icons">
      <i className="fab fa-google" />
      <i className="fab fa-facebook" />
    </div>
    <div className="links">
      <p>Don't have account yet?</p>
      <button id="signUpButton">Sign Up</button>
    </div>
  </div>
</>

    </div>
  )
}

// export default Login