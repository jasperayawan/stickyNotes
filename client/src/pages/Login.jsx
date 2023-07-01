import { useState } from 'react';
import '../App.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3000/api/user/login', {
              email: email,
              password: password,
            });
      
            if(response.status === 200){
              alert('login successfully!')
              Navigate('/')
            }
          } catch (err) {
            console.log(err.response.data);
          }
        
    }

  return (
    <>
      <section className="text-gray-600 body-font __bgnte min-h-screen">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={loginUser}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
              Login
            </h2>
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
            <input 
                value="Login"
                type='submit'
                className="text-white w-full bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg"/>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
