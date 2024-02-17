import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  let [ formData, setFormData] = useState({});
  let [records, setRecords] = useState([]);
  useEffect(()=>{
    loadAllData();
  },[]);
  let loadAllData  = ()=>{
    axios.get('http://localhost:5000/user').then((res)=>{
      // console.log(res.data);
      setRecords(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  let onChangeHandler = (e)=> {
    // console.log('current filed>>', e.target.name);
    // console.log('value of fields>>', e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log(formData)
  }

  let submitHandler = (e) => {
    e.preventDefault();
    // making an api call with current form data
    axios.post('http://localhost:5000/user', formData).then((res) => {
      // console.log(res);
      alert('posted data successfully');
    }).catch((err)=>{
      console.log(err);
      alert('error posting the record');
    })
  }

  return (
    <>
      <h1>Admin dashboard portal</h1>
      <form method="post">
        <input type="text" placeholder="Enter first name" name = "firstName" onChange={(e)=>onChangeHandler(e)} /> <br />
        <input type="text" placeholder="Enter last name" name = "lastName" onChange={(e)=>onChangeHandler(e)} /> <br />
        <input type="email" placeholder="Enter email" name = "email" onChange={(e)=>onChangeHandler(e)} /> <br />
        <button onClick={(e)=>submitHandler(e)}>Add details</button>
      </form>
      <hr />
      <h3>Records present in db</h3>
      {
        records.map((record) => (
          <li key={record._id}>{record.firstName} - {record.lastName} - {record.email}</li>
        ))
      }
    </>
  )
}

export default App
