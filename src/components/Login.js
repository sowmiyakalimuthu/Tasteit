import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      // for validation logic
      console.log('Logging in with:', email, password);
    };

    return (
        <div className='row justify-content-center m-0 bgBlack bgFull'>
        <div style={{margin:"auto", width:"500px"}} className='cardsdetails'>
            <div style={{border:"none"}} className="card">
                <div className="card-header bg-dark p-3">
                    <div className='card-header-flex'>
        <h2 className='text-white m-auto'>Login</h2>
        </div>
        </div>
          <div style={{display:'flex', flexDirection:'column', rowGap:"1vh", padding:"10px"}}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/login"> <Button style={{ width:"100%", background: "#E43A19", border: "none" }} variant='outline-light' onClick={handleLogin}>Login</Button> </Link>
          <p className='mb-0'>Don't have an account? </p>
          <Link to="/signup"> <Button style={{ width:"100%", background: "#E43A19", border: "none" }} variant='outline-light'>Sign Up</Button> </Link>
        </div>
      </div>
      </div>
      </div>
    );
  };

export default Login