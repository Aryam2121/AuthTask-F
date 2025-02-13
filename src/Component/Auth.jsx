import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
            const res = await axios.post(`https://${import.meta.env.VITE_BACKEND}/auth/login`, { email, password });
            
            if (res.data.token) {
                localStorage.setItem('token', res.data.token); // Store token in local storage
                console.log('Login Successful', res.data);
                navigate('/dashboard');
            } else {
                console.error('No token received');
            }
        } catch (error) {
            console.error('Login Error', error.response?.data || error.message);
        }
    };
    
    const handleSignup = async () => {
        try {
            const res = await axios.post(`https://${import.meta.env.VITE_BACKEND}/auth/register`, { email, password });
    
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                console.log('Signup Successful', res.data);
                navigate('/dashboard');
            } else {
                console.error('No token received');
            }
        } catch (error) {
            console.error('Signup Error', error.response?.data || error.message);
        }
    };
    
    const handleGoogleLogin = () => {
        window.location.href = `https://${import.meta.env.VITE_BACKEND}/auth/google`;
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <motion.div 
                className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">Welcome</h2>
                <div className="flex flex-col gap-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
                        onClick={handleLogin}
                    >Login</button>
                    <button 
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold"
                        onClick={handleSignup}
                    >Signup</button>
                    <button 
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold flex items-center justify-center gap-2"
                        onClick={handleGoogleLogin}
                    >
                        <span>🔵</span> Login with Google
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
