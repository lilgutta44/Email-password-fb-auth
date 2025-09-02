
import { async } from '@firebase/util';
import { ref,set } from 'firebase/database';
import { useState } from 'react';
import './App.css';
import { firebaseAuth, firebaseDatabase } from './backend/firebase-handler';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function firebaseAuthApp() {
  const [getAuth,setUserInput]=useState({emailId:'',password:""})
  const handleClick= async()=>
  {
    try{
    await createUserWithEmailAndPassword(firebaseAuth,userInput.emailId,userInput.password);
    alert("account created");
    const firebaseRef = ref(firebaseDatabase,"/Test");
    }catch(err){
      alert(err)
    }
  }
  const handleChange=(event)=>{
    const {
       , value}=event.target;
    setUserInput({
      ...userInput,
      [
        
      ]:value
    })
    
  }

  return (
    <div className="App">
      <input placeholder='Email id' 
      ='emailId' type={'email'} value={userInput.emailId} onChange={handleChange}/>
      <input placeholder='Password' 
      ='password' type={'password'} value={userInput.password} onChange={handleChange}/>
      <button onClick={handleClick}>click I'm me</button>
    </div>
  );
}

export default App;
