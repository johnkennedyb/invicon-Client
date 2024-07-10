import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Make sure to import your CSS file

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://invicon-server.onrender.com/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.")
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/2 bg-auto  bg-gray-100 " style={{ backgroundImage: 'url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1720626946/Home_1_d6rirw.png)', backgroundColor:"#f3f4f6" }}></div>
            <div className="w-1/2 flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-3/4 animate__animated animate__fadeInRight">
                    <h2 className="mb-6 text-2xl font-bold text-dark">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-left">
                            <label htmlFor="exampleInputName" className="block text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label htmlFor="exampleInputEmail1" className="block text-sm font-bold mb-2">
                                Email Id
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6 text-left">
                            <label htmlFor="exampleInputPassword1" className="block text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-dark text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Signup</button>
                    </form>
                    <p className="my-4">Already have an account?  <Link to='/login' className='text-dark'>Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
