import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="email" className="form-control" id="name"/>
            </div>        
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"/>
            </div>
            <br></br>
            <button type="submit" className="btn btn-success">Login</button>
        </form>
    </div>
  )
}

export default Login
