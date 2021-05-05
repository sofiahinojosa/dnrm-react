import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Button from '../components/Button';
import Input from '../components/Input';

const StyledDiv = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function StateTest(props) {
    const [message, setMessage] = useState("")

    useEffect(() => {
        setMessage(props.message);
    }, [])

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const submit = (event) => {
        window.location = `/state-test?message=${message}`;
    }

    return (
        <div>
            <Helmet>
                <title>State Test | Daniel Medina</title>
            </Helmet>
            <p>Your mesage: {message ? message : 'Nothing'}</p>
            <StyledDiv onSubmit={e => {e.preventDefault(); submit(e);}}>
                <Input type="text" onChange={handleChange} value={message} inputGroup />
                <Button type="submit" inputGroup >Submit</Button>
            </StyledDiv>
        </div>
    )
}