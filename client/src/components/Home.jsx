import React, { useEffect, useState } from 'react';
import convo from '../images/convo.png';

const Home = () => {
    const [userName, setUserName] = useState();
    const [show, setShow] = useState(false);

    const userHome = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserName(data.name);
            setShow(true);
            if (res.status !== 200) {
                const error = new Error(res.err);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        userHome();
    }, []);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: 'rgb(173, 216, 230)' // Light blue background
        }}>
            <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                borderRadius: '10px', 
                backgroundColor: 'white', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                maxWidth: '600px', 
                width: '100%'
            }}>
                <div className="row">
                    <div className="col-md-12">
                        <img src={convo} alt="not found" style={{ width: '100%', maxWidth: '300px' }} />
                    </div>
                </div>
                <p className='maintext' style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
                    {userName ? `Hello ${userName}! Welcome Back!!` : 'Please login to file a grievance'}
                </p>
            </div>
        </div>
    );
};

export default Home;

