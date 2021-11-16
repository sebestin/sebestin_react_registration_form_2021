import { getByLabelText } from "@testing-library/react";
import react from "react";
import {useState}  from 'react'
const MultipleInputs = () => {
    const [userRegistration, setuserRegistration] = useState(
        {
            userName:"",
            email:"",
            phone:"",
            password:""
    
        });
        const [records, setRecords] = useState([]);

        const HandleInput=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            console.log(name,value);
            setuserRegistration({...userRegistration, [name]:value})


        }
       const HandleSubmit =(e)=>{
           e.preventdefault();
           const newRecord ={...userRegistration,id:new Date ().getTime().toString()}
           console.log(records)
           setRecords=([...records,newRecord]);
           setuserRegistration({userName:"", email:"", phone:"", password:""})

       }

  return (
    <>
      <form action="" onSubmit={HandleSubmit}>
          <h2>Registration Form</h2>
        <div>
          <label htmlFor="username"> username </label>
          <input type="text" name="username" id="username" autoComplete="off" 
          value={userRegistration.username} onChange={HandleInput}
          />
        </div>

        <div>
          <label htmlFor="email"> email </label>
          <input type="email" name="email" id="email" autoComplete="off" 
           value={userRegistration.email} onChange={HandleInput}
          />
        </div>

        <div>
          <label htmlFor="phone"> phone </label>
          <input type="text" name="phone" id="phone" autoComplete="off"  
          value={userRegistration.phone} onChange={HandleInput}/>
        </div>

        <div>
          <label htmlFor="password"> password </label>
          <input type="password" name="password" id="password"  autoComplete="off" 
           value={userRegistration.password} onChange={HandleInput}/>
        </div>
        <button  type="submit">Registration </button>
        

      </form>
    <h1> show Data</h1>

      <div>{
       records.map((curEle)=>{
           const{id,userName,phone,email,password}=curEle;
          return(
              <div key={id}>
                  {userName}
                  {email}
                  {phone}
                  {password}
              </div>
          )
          })
        }
      </div>
    </>
  );
};
export default MultipleInputs;
