import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";

const StyledDiv = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StateTest(props: any) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(props.message);
  }, [props.message]);

  const handleChange = (event: Event) => {
    // @ts-ignore
    setMessage(event.target.value);
  };

  const submit = (event: any) => {
    // @ts-ignore
    window.location = `/state-test?message=${message}`;
  };

  // img="https://images.unsplash.com/photo-1501785888041-af3ef285b470"

  return (
    <Layout img="https://images.unsplash.com/photo-1542318099375-c20b8c991bbe">
      <div className="flex justify-center items-center flex-col">
        <Helmet>
          <title>State Test | Daniel Medina</title>
        </Helmet>
        <h1 className="text-4xl">State Test</h1>
        <p>Your mesage: {message ? message : "Nothing"}</p>
        <br />
        <StyledDiv
          onSubmit={(e) => {
            e.preventDefault();
            submit(e);
          }}
          style={{ maxWidth: "768px" }}
        >
          <Input
            type="text"
            onChange={handleChange}
            value={message}
            inputGroup
          />
          <Button type="submit" inputGroup>
            Submit
          </Button>
        </StyledDiv>
      </div>
    </Layout>
  );
}
