import React, { useState } from "react";
import './Signup.css'
import logo from '../images/logo.png'
import signupimg from '../images/signupimg.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {

    const initval = {

        name: "",
        email: "",
        password: ""
    }

    const [formval, setFormval] = useState(initval);

    console.log(formval);

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        const obj = {
            ...formval,
            [name]: value
        }

        setFormval(obj);
    }


    const handleSubmit=(e)=>{
        
        e.preventDefault();

        
        axios.post("http://localhost:8000/userSignup", formval)
        .then(response=>{
            alert("registration successful");
            console.log(response.data);
            setFormval(initval);
            
        })
        .catch(error=>{
            console.log("There is an error:" , error);
        })

        // console.log("this is val" ,formval);
        
    }


    return (
        <>
            <div className="maindiv">
                <div className="signupdiv">
                    <div className="dividediv" >
                        <div className="blankdiv">
                            <img src={signupimg} alt=" " className="signupimg" ></img>
                        </div>
                        <div className="signupformdiv">
                            <form method="" className="frm" onSubmit={handleSubmit} >
                                {/* <div>Welcome</div> */}
                                <div >
                                    <img className="logoclass" src={logo} alt=" " />
                                </div>
                                <div className="signuptxt">SIGNUP </div>

                                <div className="inputsdiv">

                                    <div className="inputindidiv">
                                        <input type="text" name="name" value={formval.name} onChange={handleChange} className="inputs" placeholder=" " pattern = "^[A-Za-z][a-zA-Z\s]{3,16}$" required />
                                        <label className="inplabel">Name</label>
                                    </div>

                                    <div className="inputindidiv">
                                        <input type="email" name="email" value={formval.email} onChange={handleChange} className="inputs" placeholder=" " required />
                                        <label className="inplabel">Email</label>
                                    </div>

                                    <div className="inputindidiv">
                                        <input type="password" name="password" value={formval.password} onChange={handleChange} className="inputs" placeholder=" " required />
                                        <label className="inplabel">Password</label>
                                    </div>

                                    <div className="inputindidiv">
                                        <button type="submit" className="signupbtn">Sign Up</button>
                                    </div>


                                </div>

                                <div>Already have an account? <Link to='/login' className="loginlink">Login</Link></div>


                            </form>
                        </div>


                    </div>
                </div>





            </div>



        </>
    )
}

export default Signup;