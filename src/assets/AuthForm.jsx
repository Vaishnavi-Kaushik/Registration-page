import React, { useState } from "react";


export default function AuthForm() {
    const [islogin, setislogin] = useState(true);
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={islogin ? 'active' : ""} onClick={() => setislogin(true)}>Login</button>
                    <button className={!islogin ? 'active' : ""} onClick={() => setislogin(false)}>Signup</button>
                </div>
                {islogin ? <>
                    <div className="form">
                        <h2>Login form</h2>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">forgot password?</a>

                        <button>Login</button>
                        <p>Not a member? <a href="#" onClick={() => { setislogin(false) }}>Signup now</a></p>


                    </div>
                </> : <>
                    <div className="form">
                        <h2>Signup Form</h2>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Signup</button>
                    </div>
                </>}
            </div>
        </div>
    );

}