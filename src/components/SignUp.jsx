import React from 'react'

const SignUp = () => {
  return (
<>
<div className="page_heading">
        <h1>Register</h1>
    </div>
    <main>
        <section className="registration-form">
            <h2>CREATE AN ACCOUNT</h2>
            <form id="registerForm">
                <div>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" required />
                </div>
                <div>
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" placeholder="abc@gmail.com" id="email" required />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <div>
                    <label for="cnic">CNIC:</label>
                    <input type="text" id="cnic" placeholder="00000-0000000-0" required  pattern="\d{5}-\d{7}-\d"/>
                </div>
                <div>
                    <label for="vehicleNo">Vehicle No:</label>
                    <input type="text" id="vehicleNo" placeholder="ABC-1234 / AA-000"required  pattern="[A-Za-z]{2,3}-\d{3,4}"/>
                </div>
                <div>
                    <label for="chasisNo">Chassis No:</label>
                    <input type="text" id="chasisNo" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="./signIn.html">Sign In</a></p>
        </section>
    </main>
</>
  )
}

export default SignUp