import React, { useState } from 'react'


function Login() {
  return (
    <div style={{ width: '100%' , display:'flex',justifyContent: 'center' }}>
      <form style={{ display: 'flex', flexDirection: 'column', background: '#FA8072', alignItems: 'center', width: '40%', }}>
        <h3>Sign In</h3>
        <div style={{    padding: '0.5rem' }}>

          <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  )
}
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const handleSubmit = e => {
//     e.preventDafault();
//     console.log(email);
//   }

//   let card = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: "center",
//     borderRadius: "10px",
//     background: "#FF8066",
//     width:'22rem',
//     padding: "1.2rem",


//   }


//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div style={card}>
//           <label htmlFor="email">Email</label>
//           <input value={email} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
//           <label for='password'>Password</label>
//           <input value={email} type='password' placeholder='********' id='password' name='password'></input>
//           <button>Login</button>
//         </div>
//       </form>
//     </>
//   )
// }

export default Login
