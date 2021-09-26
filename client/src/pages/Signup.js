import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <h2 className="text-3xl font-bold mb-10 text-red-700">Create Your Account</h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="mr-2 font-medium block">
              First Name 
            </label>
            <input
              placeholder=" John"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
              className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mr-2 font-medium block">
              Last Name
            </label>
            <input
              placeholder=" Smith"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
              className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="mr-2 font-medium block">
              Email
              </label>
            <input
              placeholder="johnsmith@gmail.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
            />
          </div>

          <div className="">
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

          <div className="">
            <button type="submit" className="bg-green-700 text-white rounded w-full hover:bg-green-500 py-3">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
