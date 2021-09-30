import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import AccountNav from '../components/AccountNav'
import Cart from '../components/Cart';

const AccountDetails = () => {
    
    
      const [formState, setFormState] = useState({ email: '', password: '' });
      const [updateUser] = useMutation(UPDATE_USER);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await updateUser({variables:{
          
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.password,
        
        }});
        console.log(mutationResponse);
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

          <div className="lg:px-60 md:px-36 sm:px-20">
            <Cart />
            <AccountNav />
          </div>
          
          <div className="flex items-center justify-center md:py-20 bg-gray-700">
            <div className=" bg-white p-14 rounded shadow-2xl lg:w-1/3 sm:w-1/2">
              <h2 className="text-3xl font-bold  pb-4 text-yellow-500 ">Edit Your Account</h2>
              <p className="border-b pb-2 mb-8 text-gray-600">Enter any new account information below </p>

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
      
                <div>
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
      
                <div>
                  <label htmlFor="pwd" className="mr-2 font-medium block">
                    Password
                    </label>
                  <input
                    placeholder="********"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                    className="border-2 border-gray-200 outline-none focus:border-green-500 rounded p-2 w-full"
                  />
                </div>
      
                <div>
                  <button type="submit" className="bg-green-600 text-white rounded w-full hover:bg-green-500 py-3">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    
}

export default AccountDetails
