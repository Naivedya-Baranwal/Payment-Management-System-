import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Shared_css/Login.css';
import { AuthContext } from '../AuthContext';

function Login() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [adminCredentials, setAdminCredentials] = useState({ email: '', password: '' });
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserLogin = async () => {
        if (!userCredentials.email || !userCredentials.password) {
            alert('Please fill in both email and password.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userCredentials),
            });

            const data = await response.json();
            if (response.ok) {
                // Store user email in localStorage
                localStorage.setItem('userEmail', userCredentials.email);
                loginUser(data.userId, 'user');
                navigate('/user-dashboard');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to log in. Please try again later.');
        }
    };

    const handleAdminLogin = () => {
        const fixedAdminEmail = 'admin@gmail.com';
        const fixedAdminPassword = 'password';

        if (adminCredentials.email === fixedAdminEmail && adminCredentials.password === fixedAdminPassword) {
            loginUser('admin', 'admin');
            navigate('/admin-dashboard');
        } else {
            alert('Invalid admin credentials. Please try again.');
        }
    };

    useEffect(() => {
        if (selectedRole === 'admin') {
            setUserCredentials({ email: '', password: '' });
        } else if (selectedRole === 'user') {
            setAdminCredentials({ email: '', password: '' });
        }
    }, [selectedRole]);

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {selectedRole === null && (
                    <div className="role-selection">
                        <div className="circle" onClick={() => setSelectedRole('admin')}>Admin Login</div>
                        <div className="circle" onClick={() => setSelectedRole('user')}>User Login</div>
                    </div>
                )}
                {selectedRole === 'admin' && (
                    <div className="login-form">
                        <input
                            type="email"
                            value={adminCredentials.email}
                            onChange={(e) => setAdminCredentials({ ...adminCredentials, email: e.target.value })}
                            placeholder="Admin Email"
                        />
                        <input
                            type="password"
                            value={adminCredentials.password}
                            onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                            placeholder="Admin Password"
                        />
                        <button onClick={handleAdminLogin}>Admin Login</button>
                    </div>
                )}
                {selectedRole === 'user' && (
                    <div className="login-form">
                        <input
                            type="email"
                            value={userCredentials.email}
                            onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })}
                            placeholder="User Email"
                        />
                        <input
                            type="password"
                            value={userCredentials.password}
                            onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
                            placeholder="User Password"
                        />
                        <button onClick={handleUserLogin}>User Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
