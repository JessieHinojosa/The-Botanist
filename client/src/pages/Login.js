import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="">
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className=" bg-white p-14 rounded shadow-2xl lg:w-1/3 sm:w-1/2">
        <h2 className="text-3xl font-bold mb-10 text-red-700">Login to Your Account</h2>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="mr-2 font-medium block">
            Email
            </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="pwd" className="mr-2 font-medium block">
            Password
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit" className="bg-green-700 text-white rounded w-full hover:bg-green-500 py-3">Submit</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
