import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { userDataContext } from "../context/UserContext";
function Signup() {
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let { userData, setUserData } = useContext(userDataContext);
  let navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/signup",
        {
          firstName,
          lastName,
          userName,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result);
      setUserData(result.data);
      navigate("/");
      setErr("");
      setLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setUserName("");
    } catch (error) {
      setErr(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fff] flex flex-col items-center justify-center py-8 px-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-20 mb-6" />
        <form className="w-full flex flex-col gap-5" onSubmit={handleSignUp}>
          <h1 className="text-gray-800 text-3xl font-bold mb-2 text-center">
            Sign Up
          </h1>
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full h-12 border border-gray-300 focus:border-[#24b2ff] text-gray-800 text-lg px-5 py-2 rounded-lg transition-all duration-200 outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full h-12 border border-gray-300 focus:border-[#24b2ff] text-gray-800 text-lg px-5 py-2 rounded-lg transition-all duration-200 outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full h-12 border border-gray-300 focus:border-[#24b2ff] text-gray-800 text-lg px-5 py-2 rounded-lg transition-all duration-200 outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full h-12 border border-gray-300 focus:border-[#24b2ff] text-gray-800 text-lg px-5 py-2 rounded-lg transition-all duration-200 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-full h-12 border border-gray-300 focus-within:border-[#24b2ff] text-gray-800 text-lg rounded-lg relative flex items-center">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full h-full border-none text-gray-800 text-lg px-5 py-2 rounded-lg outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-4 top-2 text-[#24b2ff] cursor-pointer font-semibold select-none"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Hide" : "Show"}
            </span>
          </div>
          {err && <p className="text-center text-red-500 text-sm">*{err}</p>}
          <button
            className="w-full h-12 rounded-full bg-[#24b2ff] hover:bg-[#1a8cd8] transition-all duration-200 mt-2 text-white font-semibold text-lg shadow-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <span
              className="text-[#2a9bd8] font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
