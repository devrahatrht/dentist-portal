import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../Shared/Navbar/PrimaryButton/PrimaryButton";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
const Banner = () => {
  const [user] = useAuthState(auth); // Assuming 'auth' is your Firebase authentication object
  return (
    <div className="hero min-h-screen px-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          {user ? (
            <Link to="/appointment">
              <PrimaryButton>Appointment</PrimaryButton>
            </Link>
          ) : (
            <Link to="/login">
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
