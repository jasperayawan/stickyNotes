import { useState } from 'react';
import '../App.css'
import Axios from 'axios'

export default function Register() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const registerUser = async(e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3000/api/user/register', {
              fullname: fullName,
              email: email,
              password: password,
              cpassword: cpassword,
            });
      
            console.log(response.data);
          } catch (err) {
            console.log(err.response.data);
          }
        
    }

  return (
    <>
      <section className="text-gray-600 body-font __bgnte">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={registerUser}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                name="fullname"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label  className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                name="cpassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <input 
                value="Register"
                type='submit'
                className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg"/>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
