import React from "react";
import { Form, Row } from "react-bootstrap";
import { InputField } from "../Common/InputField/InputField";
import { CustomButton } from "../Common/Button/Button";
import "./LoginForm.css";

//Email- eve.holt@reqres.in
//Password - cityslicka

export const LoginForm = ({
  username,
  email,
  password,
  onChange,
  onSubmit,
}) => {
  return (
    <Form noValidate className="form" onSubmit={onSubmit}>
      <Row className="mb-1">
        <InputField
          name="username"
          type="text"
          label="Username"
          value={email.username}
          onChange={onChange}
          isValid={!username.error}
          error={username.error}
        />
      </Row>
      <Row className="mb-1">
        <InputField
          name="email"
          type="text"
          label="Email"
          value={email.value}
          onChange={onChange}
          isValid={!email.error}
          error={email.error}
        />
      </Row>
      <Row className="mb-2">
        <InputField
          name="password"
          type="password"
          label="Password"
          value={password.value}
          onChange={onChange}
          isValid={!password.error}
          error={password.error}
        />
      </Row>
      <CustomButton type="submit" title="Submit" />
      <p className="pt-2 text-center">
        If new user? <a className="go-to-signup">Create an account</a>
      </p>
    </Form>
  );
};
