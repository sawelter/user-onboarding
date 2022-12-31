import logo from '../logo.svg';
import '../App.css';
import Form from './Form.js'
import React, { useState } from 'react';

function App() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms_of_service: false,
  }

  const [formValues, setFormValues] = useState(initialValues);

  const submit = () => {

  }


  return (
    <Form formValues={formValues} setFormValues={setFormValues} />
  );
}

export default App;
