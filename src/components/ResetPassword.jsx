import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('https://invicon-server.onrender.com/reset-password', { token, newPassword: password });
            alert(response.data);
            navigate('/login');
        } catch (err) {
            setError('Error resetting password');
        }
    };

    return (
        <div className="flex  h-screen">
            <div className="hidden md:block md:w-1/2 bg-auto" style={{ backgroundImage: 'url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1720626946/Home_1_d6rirw.png)' }}></div>
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded shadow-md w-3/4 animate__animated animate__fadeInRight">
        <h2 className="mb-6 text-2xl text-center font-bold text-dark">Change Password</h2>

        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="mb-4 text-left"> <input
                type="password"
                placeholder="Enter new password"
                className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /></div>
            <div className="mb-4 text-left">
            <input
                type="password"
                placeholder="Confirm new password"
                className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"

                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div>
            
            <button type="submit" className="w-full bg-dark text-white py-2 rounded-md hover:bg-dark transition duration-300 ease-in-out transform hover:scale-105">Reset Password</button>
        </form>
        </div>
        </div>
         </div>
    );
};

export default ResetPassword;
