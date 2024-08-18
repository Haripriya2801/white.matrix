import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const getAccess = () => {
        if (email === "admin@gmail.com" && password === "admin") {
            window.alert("Login Successful");
            history.push("/aAbBcC");
        } else if (email === "admin.edu@gmail.com" && password === "education") {
            window.alert("Login Successful");
            history.push("/education");
        } else if (email === "admin.health@gmail.com" && password === "health") {
            window.alert("Login Successful");
            history.push("/health");
        } else if (email === "admin.service@gmail.com" && password === "service") {
            window.alert("Login Successful");
            history.push("/service");
        } else {
            window.alert("You don't have this access");
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: 'rgb(34, 139, 34)' // Green background
        }}>
            <div style={{ 
                backgroundColor: 'rgb(255, 255, 255)', 
                padding: '3rem', 
                borderRadius: '10px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                maxWidth: '400px', 
                width: '100%'
            }}>
                <h1 className="text-center my-1" style={{ color: '#007bff', fontSize: '2rem' }}>Admin Login</h1>
                <hr style={{ borderColor: '#28a745', borderWidth: '2px' }} />

                <form method="GET">
                    <div className="form-group text-center" style={{ marginBottom: '1rem' }}>
                        <div>
                            <label htmlFor="email" style={{ fontWeight: 'bold', color: '#343a40' }}>
                                Email ID:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email ID here"
                                className='mx-2'
                                style={{ padding: '0.5rem', border: '1px solid #007bff', borderRadius: '5px' }}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="password" style={{ fontWeight: 'bold', color: '#343a40' }}>
                                Password:
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className='mx-1'
                                style={{ padding: '0.5rem', border: '1px solid #007bff', borderRadius: '5px' }}
                            />
                        </div>
                        <br />
                        <div className="form-group form-button">
                            <input
                                type="submit"
                                name="signin"
                                id="signin"
                                className="form-submit btn btn-outline-primary"
                                onClick={getAccess}
                                value="Log In"
                                style={{ padding: '0.5rem 2rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;



