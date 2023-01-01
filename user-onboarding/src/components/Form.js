import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;

    input {
        margin-left: 10px;
        margin: 10px;
    }
`;

export default function Form(props) {

    const { formValues, setFormValues } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormValues({...formValues, [name]: valueToUse})
    }

    const submit = (event) => {

    }

    return (
        <StyledForm>
            {/******** NAME *********/}
            <label>First Name
                <input 
                    type="text"
                    name="first_name"
                    value={formValues.first_name}
                    onChange={onChange}
                />
            </label>
            <label>Last Name
            <input 
                    type="text"
                    name="last_name"
                    value={formValues.last_name}
                    onChange={onChange}
                />
            </label>

            {/******** EMAIL *********/}
            <label>Email
            <input 
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={onChange}
                />
            </label>

            {/******** PASSWORD *********/}
            <label>Password
                <input 
                    type="text"
                    name="password"
                    value={formValues.password}
                    onChange={onChange}
                />
            </label>

            {/******** TERMS OF SERVICE *********/}
            <label>Terms of Service
                <p>Agree
                    <input 
                        type="checkbox"
                        name="terms_of_service"
                        value={formValues.terms_of_service}
                        onChange={onChange}
                    />
                </p>
            </label>
            <button onClick={submit}>submit</button>
        </StyledForm>
    );
}