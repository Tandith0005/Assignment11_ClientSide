import React, { useEffect, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom"; // Changed from react-router to react-router-dom

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (error) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"})
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Please meet all password requirements");
      return;
    }

    // Get data from Form
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);
    
    // Here you would typically send the data to your backend
    setError(''); 
  };

  return (
    <div className="flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center font-raleway">
            Registration
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Please enter your credentials to Register
          </p>

          {error && <div className="alert alert-error mb-4">{error}</div> }

          <form onSubmit={handleSubmit} >
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" // Changed from "name" to "text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full mb-4"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <label className="label mt-2" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="input input-bordered w-full"
                required
              />
              <ReactPasswordChecklist
                rules={["minLength", "number", "capital", "match"]}
                minLength={5}
                value={password}
                valueAgain={confirmPassword}
                onChange={(isValid) => setIsValid(isValid)}
                className="mt-2"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full my-5">
                Register
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="space-y-3">
            <button type="button" className="btn btn-outline gap-2 w-full">
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;