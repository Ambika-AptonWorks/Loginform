import React,{useState,useEffect} from 'react';
import './Login.css';
import {Link, Navigate,Routes,Route,useNavigate} from "react-router-dom"
import Parent from './Components/Parent';

function Login() {
  const[name,setName]=useState({username:'',email:'',password:''});
  const[formerrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  
  const navigate= useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(name));
    setIsSubmit(true);
  };
  useEffect(()=>{
    console.log(formerrors);
    if(Object.keys(formerrors).length === 0 && isSubmit){
      console.log(name.username);
    }
  }, [formerrors]);
  const validate=(values)=>{
    const errors={};
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Username is required";
    }
    if(!values.email){
      errors.email="Email is required";
    }else if(!regex.test(values.email)){
      errors.email="This is not valid mail";
    }
    if(!values.password){
      errors.password="password is required";
    }else if(values.password.length<4){
      errors.password="password must be greater than 4 characters";
    }else if(values.password.length>10){
      errors.password="password cannot exceed 10 characters";
    }
    return errors;
  };
  if(isSubmit){
    return<Navigate to="Parent"></Navigate>
  }
  return(
    <div className='container'>
      <h1>Login Form</h1><br />
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <label>Username</label>
          <input type="text" name="username" placeholder='username'
          value={name.username} onChange={e =>setName({...name,username:e.target.value})}></input>
        </div>
        <p>{formerrors.username}</p>
        <div className='row'>
          <label>Email</label>
          <input type="text" name="email" placeholder='abcd@gmail.com'
          value={name.email} onChange={e =>setName({...name,email:e.target.value})}></input>
        </div>
        <p>{formerrors.email}</p>
        <div className='row'>
          <label>password</label>
          <input type="password" name="password" placeholder='password'
          value={name.password} onChange={e =>setName({...name,password:e.target.value})}></input>
        </div>
        <p>{formerrors.password}</p>
        <div className='row' id="btn">
          <button  type="button " className='btn btn-primary'>Login</button>
        </div>
      </form>
      {isSubmit && name.username}
    </div>
  );
}
export default Login;
