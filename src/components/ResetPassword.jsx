import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://invicon-server.onrender.com/reset-password', { token, newPassword: password });
            alert(response.data.message);
            navigate('/login');
        } catch (err) {
            alert('Error resetting password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;
