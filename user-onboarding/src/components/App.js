import logo from '../logo.svg';
import '../App.css';
import Form from './Form.js'
import React, { useState, useEffect } from 'react';
import formSchema from '../validation/formSchema.js';
import axios from 'axios';
import * as yup from "yup";

function App() {

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    tos: false, // terms of service checkmark
  }

  const initialErrorValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    tos: "", // terms of service checkmark
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrorValues);
  const [users, setUsers] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  
  const handleSubmit = () => {
    // WIP
    axios.post('https://reqres.in/api/users', formValues)
      .then(res =>  {
        setUsers([res.data, ...users]);
        console.log(res.data);
      })
      .catch(err => console.error(err));
    setFormValues(initialValues);
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div>
      <Form formValues={formValues} change={handleChange} submit={handleSubmit} errors={formErrors} />

      {users.map(user => {
        <div key={user.id}>
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      })}
    </div>
  );
}

export default App;
