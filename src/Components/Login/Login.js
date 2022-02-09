import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const userData = {
            email: data.email,
            password: data.password,
        }

        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => {
                console.log(res)
                if (res.status == 200) {
                    swal("Success!", "Welcome to the ATools!", "success");
                    setLoggedInUser(userData)
                    history.replace(from)
                    console.log(res)
                }
                if (res.status == 400) {
                    swal("Failed!", "You aren't loggedIn user!", "warning");
                }
            })
            .catch((error) => {
                console.log(error)
            });

        reset();
    };

    return (
        <section className="row" style={{ height: "100vh" }}>
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
                <div className="w-75 shadow p-3 rounded">

                    <div className="text-center">
                        <h1 className="fw-bold">Welcome Back</h1>
                        <small className="text-secondary">Sub-tile text goes here</small>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mt-3">
                            <input className="form-control" type="email" placeholder="Email address" {...register("email", { required: true })} />
                            {errors.email && <p className="text-danger fw-bold">Email field is missing!</p>}
                        </div>
                        <div className="form-group mt-3">
                            <input className="form-control" type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-danger">Password field is missing!</span>}
                        </div>
                        <div className="form-group mt-3">
                            <input className="form-control image-bg text-white" type="submit" />
                        </div>

                        <div className="d-flex justify-content-between">
                            {/* <div class="form-check">
                                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault"><small>Remember Password</small></label>
                            </div> */}
                            <div>
                                <label class="main">
                                    <input type="checkbox" style={{backgroundColor:"black"}} checked />
                                    <small  class="fw-bold">Remember Password</small>
                                </label>
                            </div>
                            <div>
                                <small className="fw-bold">Forgot Password?</small>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
            <div className="col-md-6 image-bg">
                {/* Image */}
            </div>
        </section>
    );
};

export default Login;