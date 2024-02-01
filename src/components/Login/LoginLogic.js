import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { messages } from "../../constants/msg";
import { UserService } from "../../services/api/user.service";
import { ValidatorService } from "../../services/core/validator.service";
import { toast } from "react-toastify";
import { TempStorageService } from "../../services/core/temp.storage.service";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const LoginLogic = ({ closeModal }) => {
  const navigate = useNavigate();
  const defaultInputField = {
    value: "",
    error: "",
  };
  const [username, setUsername] = useState({ ...defaultInputField });
  const [email, setEmail] = useState({ ...defaultInputField });
  const [password, setPassword] = useState({ ...defaultInputField });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        const isValidEmail = ValidatorService.isEmail(value);
        setEmail((prevEmail) => ({
          ...prevEmail,
          value: value,
          error: isValidEmail ? "" : messages.INVALID_EMAIL,
        }));
        break;

      case "password":
        setPassword((prevPassword) => ({
          ...prevPassword,
          value: value,
          error: "",
        }));
        break;
      case "username":
        setUsername((prevUsername) => ({
          ...prevUsername,
          value: value,
          error: "",
        }));
      default:
        break;
    }
  };

  const validateInput = (value, inputName) => {
    if (!value || value.trim() === "") {
      switch (inputName) {
        case "email":
          setEmail((prevEmail) => ({
            ...prevEmail,
            error: messages.IF_EMAIL_NOT,
          }));
          break;
        case "password":
          setPassword((prevPassword) => ({
            ...prevPassword,
            error: messages.IF_PASSWORD_NOT,
          }));
          break;
        default:
          break;
      }
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const UserId = uuidv4();

    const validEmail = validateInput(email.value, "email");
    const validPassword = validateInput(password.value, "password");

    if (validEmail && validPassword) {
      try {
        const requestParams = {
          username: username.value,
          email: email.value,
          password: password.value,
        };
        const data = await UserService.login(requestParams);

        if (data.status === 200) {
          const token = data?.data.token;
          toast.success(messages.LOGIN_SUCCESSFULL);
          TempStorageService.setCookie("token", token);
          TempStorageService.setCookie("UserId", UserId);
          navigate("/product-listing");
          closeModal();
        } else {
          const error = data.response?.data?.error || "Login failed.";
          toast.error(`${error} invalid credentials`);
        }
      } catch (error) {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <LoginForm
      username={username}
      email={email}
      password={password}
      onChange={changeHandler}
      onSubmit={submitHandler}
    />
  );
};
