import React from 'react';
import { Link } from 'react-router-dom'; // Note: Changed from 'react-router' to 'react-router-dom'
import AuthContext from '../Context/AuthContext';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get data from Form
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        console.log(formDataObject);
    };


    return (
        <div className=" flex items-center justify-center bg-base-200 p-4">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold text-center font-raleway">Welcome Back</h2>
                    <p className="text-center text-base-content/70 mb-6">Please enter your credentials to login</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input validator ml-2"
                                required
                            />
                        </div>
                        
                        <div className="form-control mt-4">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input validator ml-2"
                                required
                            />
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-2">
                                    <input 
                                        type="checkbox" 
                                        className="checkbox checkbox-sm" 
                                    />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <a href="/forgot-password" className="text-sm link link-hover">Forgot password?</a>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button type="submit" className='btn btn-primary w-full my-5'>
                                Login 
                            </button>
                        </div>
                    </form>
                    
                    <div className="divider">OR</div>
                    
                    <div className=" space-y-3">
                        <button className="btn btn-outline gap-2">
                            Continue with Google
                        </button>
                    </div>
                    
                    <div className="text-center mt-4">
                        Don't have an account? <Link to="/register" className="link link-primary">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;