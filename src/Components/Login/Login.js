import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <section>
            <Navbar></Navbar>
            <section className="row" style={{ height: "100vh" }}>
                <div className="col-md-6 d-flex align-items-center justify-content-center" >
                    <div className="w-50 text-center">
                        <h1 className="fw-bold">Welcome Back</h1>
                        <small className="text-secondary">Sub-tile text goes here</small>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mt-3">
                                <input className="form-control" type="email" placeholder="Email address" {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">Email field is required</span>}
                            </div>

                            <div className="form-group mt-3">
                                <input className="form-control" type="password" placeholder="Password" {...register("password", { required: true })} />
                                {errors.name && <span className="text-danger">Name field is required</span>}
                            </div>

                            <div className="form-group mt-3">
                                <input className="form-control image-bg text-white" type="submit" />
                            </div>
                        </form>
                    </div>

                </div>
                <div className="col-md-6 image-bg">

                </div>
            </section>
        </section>
    );
};

export default Login;