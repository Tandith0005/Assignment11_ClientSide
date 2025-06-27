import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "/Logo.png";
import catProfilePic from "../../assets/Images/CatProfilePic.jpg";
import UseAuth from "../../Hooks/UseAuth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.config";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = () => {
  const { user, loading } = UseAuth();
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!!!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      {/* Active class color is in index.css */}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active text-[#a86c6c] font-medium"
            : "default hover:text-[#a86c6c] hover:scale-105 transition-all"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/allFoods"}
        className={({ isActive }) =>
          isActive
            ? "active text-[#a86c6c] font-medium"
            : "default hover:text-[#a86c6c] hover:scale-105 transition-all"
        }
      >
        All Foods
      </NavLink>
      <NavLink
        to={"/gallery"}
        className={({ isActive }) =>
          isActive
            ? "active text-[#a86c6c] font-medium"
            : "default hover:text-[#a86c6c] hover:scale-105 transition-all"
        }
      >
        Gallery
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#d7837f] shadow-sm rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="CakeyKitchen" className="w-[80px] " />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-[20px]">{links}</ul>
      </div>
{/* NavEnd */}
{/* First it checks if the user is logged in if not it shows the login button and before that it checks if the user is loading or not */}
      <div className="navbar-end gap-5">
        {loading ? (
          <>
            {" "}
            <LoadingSpinner></LoadingSpinner>
          </>
        ) : (
          <>
            {user ? (
              <>
                <details className="dropdown dropdown-end">
                  <summary className="list-none">
                    <img
                      src={user?.photoURL || catProfilePic}
                      className="w-[70px] rounded-full cursor-pointer"
                      alt="Profile"
                    />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-[100px]  p-2 shadow-sm gap-4">
                    <Link to={"/myFoods"}>My Foods</Link>
                    <Link to={"/addFood"}>Add Food</Link>
                    <Link to={"/myOrders"}>My Orders</Link>
                    <Link onClick={handleLogout}>Logout</Link>
                  </ul>
                </details>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn">SignUp</button>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
