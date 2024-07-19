import React from "react";

const Login = () => {
  return (
    <>
      <div className="page_heading">
        <h1>Sign In</h1>
      </div>
      <main>
        <section className="signin-form">
          <h2>WELCOME BACK</h2>
          <form id="signinForm">
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>

          <p>
            Forgot your password?{" "}
            <a href="./resetPassword.html">Reset Password</a>
          </p>
          <p>
            Don't have an account? <a href="./Register.html">Register</a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;
