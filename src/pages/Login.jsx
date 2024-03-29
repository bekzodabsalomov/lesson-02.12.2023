import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
    email.current.value = '';
    password.current.value = '';
  };

  if (error) {
    toast.warning("Error in email or password");
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-5 p-5 border rounded shadow-md bg-white">
      <h2 className="text-2xl mb-7 text-center font-bold">Log in</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col gap-3">
          <span className="text-sm">Email:</span>
          <input
            ref={email}
            type="email"
            className="bg-gray-200 px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none focus:border-blue-500"
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
          Log in
        </button>
      </form>
      <p className="text-xs text-center">
        If you don't have an account, please &nbsp;
        <Link className="text-gray-600 hover:underline" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;