import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Gap, Header } from "../../components";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "./element";
const SignUpPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [emailValid, setEmailValid] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handlePush = (url) => {
    navigate(url);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(value);
      if (isValidEmail) {
        setEmailValid(true);
        setEmail(value);
      } else {
        setEmailValid(false);
      }
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleAgreeButton = () => {
    if (emailValid) {
      let form = {
        email: email,
        password: password,
      };
      console.log(form);
    } else {
      alert("check the form.. something is wrong");
    }
  };
  return (
    <Wrapper>
      <Header title="I have an account" />
      <Gap height="30px" />
      <div className="form">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={!emailValid}
          helperText={emailValid ? "" : "Please use valid email address"}
        />

        <Gap height="20px" />
        <TextField
          onChange={handleChange}
          id="display-name"
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password"
        />

        <Gap height="20px" />
        <div className="end">
          <Button
            fullWidth
            disabled={emailValid === false}
            variant="contained"
            color="secondary"
            onClick={handleAgreeButton}
          >
            Login
          </Button>
          <Gap height="10px" />
          <p className="text-center">
            Don't have an account?
            <span
              className="underline-custom bold"
              onClick={() => handlePush("/signup")}
            >
              Sign up.
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUpPage;
