import "../Login/Login.scss";
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  function validateForm() {
    return username.length >= 5 && password.length >= 5;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const togglePassword =()=>{
    setPasswordShown(!passwordShown);
  }
  //   handleFormChange = (e) => {
  //     let newLoginParams = { ...this.state.loginParams };
  //     let name = e.target.value;
  //     newLoginParams[e.target.name] = name;
  //     this.setState({
  //       loginParams: newLoginParams,
  //     });
  //   };
  //   loginForm = (event) => {
  //     event.preventDefault();
  //     let username = this.state.loginParams.username;
  //     let password = this.state.loginParams.password;
  //     if (username === "admin" && password === "1234") {
  //       localStorage.setItem("token", "T");
  //       this.setState({
  //         isLogged: true,
  //       });
  //     }
  //   };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <div  className="formset">
      <fieldset  className="formset__fieldset" >
        <legend className="formset__fieldset--legend">Please sign in</legend>
        <ul className="formset__list">
          <li className="formset__item">
            <label className="formset__item--label" htmlFor="username">UserName: </label>
            <input className="formset__item--input"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </li>
          <li className="formset__item">
            <label className="formset__item--label" htmlFor="password">Password: </label>
            <input className="formset__item--input"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder="Enter Password" required
            />
            <i className="eye" onClick={togglePassword}>{eye}</i>
          </li>
        </ul>
       
        <Link to={`/`}><button className="button" type="submit" disabled={!validateForm()}>Login</button></Link>  

      </fieldset>

      </div>
    </form>
  );
}

export default Login;
