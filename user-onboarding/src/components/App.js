import logo from '../logo.svg';
import '../App.css';
import Form from './Form.js'
import React, { useState } from 'react';
import { formSchema as schema } from '../validation/formSchema.js';
import axios from 'axios';

function App() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms_of_service: false,
  }

  const [formValues, setFormValues] = useState(initialValues);


  return (
    <Form formValues={formValues} setFormValues={setFormValues} />
  );
}

export default App;
