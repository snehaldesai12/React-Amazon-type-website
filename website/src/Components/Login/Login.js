import React, { useState } from "react";
import '../Signup/Signup.css'
import logo from '../images/logo.png'
import loginimg from '../images/loginimg.png'
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {

    const initloginval = {

        "email": "",
        "password": ""
    }

    const [loginformval, setLoginformval] = useState(initloginval);
    console.log(loginformval);

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        const obj = {

            ...loginformval, [name]: value
        }

        setLoginformval(obj);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8000/userLogin", loginformval)
            .then(result => {

                console.log(result.data);

                if (result.data.error == "email not present")
                    alert("Email not present");
                else if (result.data.error == "Wrong password")
                    alert("Wrong password");
                else
                    alert("Login successful");
            })
            .catch(err => {
                console.log(err);
                alert("error executing query")

            })

    }


    return (
        <>
            <div className="maindiv">
                <div className="signupdiv">
                    <div className="dividediv" >
                        <div className="blankdiv">
                            <img src={loginimg} alt=" " className="signupimg" ></img>
                        </div>
                        <div className="signupformdiv">
                            <form method="post" className="frm" onSubmit={handleSubmit}>
                                {/* <div>Welcome</div> */}
                                <div >
                                    <img className="logoclass" src={logo} alt=" " />
                                </div>
                                <div className="signuptxt">LOGIN </div>

                                <div className="inputsdiv">

                                    <div className="inputindidiv">
                                        <input type="email" name="email" className="inputs" placeholder=" " onChange={handleChange} required />
                                        <label className="inplabel">Email</label>
                                    </div>

                                    <div className="inputindidiv">
                                        <input type="password" name="password" className="inputs" placeholder=" " onChange={handleChange} required />
                                        <label className="inplabel">Password</label>
                                    </div>

                                    <div className="inputindidiv">
                                        <button type="submit" className="signupbtn">LOGIN</button>
                                    </div>


                                </div>

                                <div>Already have an account?
                                    <Link to="/" className="loginlink"> Signup</Link>
                                </div>


                            </form>
                        </div>


                    </div>
                </div>

            </div>


        </>
    )
}

export default Login;