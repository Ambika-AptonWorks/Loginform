import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const initialization={username:'',email:'',password:''};
  const [form,setForm]= useState({initialization});
  const [formErrors,setFormErrors]= useState({});
  const[isSubmit, setIsSubmit]=useState(false);

  const handleChange=(e) =>{
    console.log(e.target);
    const {name, value}=e.target;
    setForm({ ...form, [name]:value});
    console.log(form);
    
  };
  const handleSubmit=(e) =>{
    e.preventDefault();
    setFormErrors(validate(form));
    setIsSubmit(true);

  };
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length ===0 && isSubmit)
    {
      console.log(form)
    }
  },[formErrors]);
  const validate=(values)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2, }$/i;
    if(!values.username){
      errors.username="username is required";
    }
    if(!values.email){
      errors.email="Email is required";
    }
    else if(!regex.test(values.email)){
      errors.email="This ias not valid Email";
    }
    if(!values.password){
      errors.password="password is required";
    }else if(values.Password.length<4){
      errors.Password="password must be more than 4 characters";
    }else if(values.Password.length>10){
      errors.Password="password cannot exceed 10 characters";
    }
    return errors;
  };
  return (
        <div className='container'>
          <pre>{JSON.stringify(form,undefined,2)}</pre>
          <form onSubmit={handleSubmit} >
            <h1>Loginform</h1>
               <div className='divider'>
                 <div className='form'>
                  <div className='field'>
                    <label>Username</label>
                    <input 
                    type='text'
                    name='username' value={form.username}
                    onChange={handleChange}></input>
                  </div>
                  <div className='field'>
                    <label>Email</label>
                    <input type='text' name='email' value={form.email} 
                    onChange={handleChange}></input>
                  </div>
                  <div className='field'>
                    <label>Password</label>
                    <input type='password' name='password'value={form.Password}
                    onChange={handleChange}></input>
                  </div>
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
         </div>
  );
}

export default App;
