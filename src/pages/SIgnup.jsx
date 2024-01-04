import { useRef } from 'react';
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

function Signup() {
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const { signup, error, user } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName.current.value, email.current.value, password.current.value);
    displayName.current.value = '';
    email.current.value = '';
    password.current.value = '';
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-5 p-5 border rounded shadow-md bg-white">
      <h2 className="text-2xl mb-7 text-center font-bold">Sign up</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span className="text-sm">Name:</span>
          <input
            ref={displayName}
            type="text"
            className="bg-gray-200 text-xs px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span className="text-sm">Email:</span>
          <input
            ref={email}
            type="email"
            className="bg-gray-200 text-xs px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span className="text-sm">Password:</span>
          <input
            ref={password}
            type="password"
            className="bg-gray-200 text-xs px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mb-4">
          Sign up
        </button>
        <p className="text-xs text-center">
          Do you have an account ? &nbsp;
          <Link className="text-gray-600 hover:underline" to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;