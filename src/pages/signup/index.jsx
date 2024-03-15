import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Gap, Header } from "../../components";
import { SuccessIcon, WarningIcon } from "../../images";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Wrapper } from "./element";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(true);


  useEffect(() => {
    setPasswordValid(validatePassword(password, firstname, email));
  }, [password, email, firstname]);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(value);
      if (isValidEmail) {
        setEmailValid(true)
        setEmail(value);
      } else {
        setEmailValid(false)
      }

    }
    if (name === "password") setPassword(value);
    if (name === "firstname") setFirstName(value);
    if (name === "lastname") setLastName(value);
  };

  const validatePassword = (password, firstname, email) => {
    const passwordLengthValid = password.length >= 8;
    const hasSymbolOrNumber = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password);
    const doesNotContainNameOrEmail = !password.toLowerCase().includes(firstname.toLowerCase()) &&
      !password.toLowerCase().includes(email.toLowerCase());
    const noSpaces = !/\s/.test(password);
    return passwordLengthValid && hasSymbolOrNumber && doesNotContainNameOrEmail && noSpaces;
  };

  const handleAgreeButton = ()=>{

    if (isPasswordValid && emailValid){
      let form ={
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
      }
      console.log(form)
    }else{
      alert("check the form.. something is wrong")
    }
  }
  return (
    <Wrapper>
      <Header title="Sign up" />
      <Gap height="30px" />
      <div className="form">
        <TextField
          fullWidth
          id="outlined-basic"
          label="First Name"
          name="firstname"
          variant="outlined"
          onChange={handleChange}
        />
        <Gap height="20px" />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Last Name"
          name="lastname"
          variant="outlined"
          onChange={handleChange}
        />
        <Gap height="20px" />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={!emailValid}
          helperText={emailValid?"":"Please use valid email address"}
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

        {password.length > 1 && <div>
          {isPasswordValid ? (
            <div>
              <div className="warning-password">
                <img src={SuccessIcon} alt="warning" />
                <p>Password strength: excellent</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="warning-password">
                <img src={WarningIcon} alt="warning" />
                <p>Password Strength: Weak</p>
              </div>
              <div className="warning-password">
                {password.length < 8 ? (
                  <ClearIcon fontSize="small" />
                ) : (
                  <CheckIcon fontSize="small" />
                )}
                <p>Must be at least 8 characters</p>
              </div>
              <div className="warning-password">
                {!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password) ? (
                  <ClearIcon fontSize="small" />
                ) : (
                  <CheckIcon fontSize="small" />
                )}
                <p>Must have at least one symbol or number</p>
              </div>
              <div className="warning-password">
                {password.toLowerCase().includes(firstname.toLowerCase()) ||
                password.toLowerCase().includes(email.toLowerCase()) ? (
                  <ClearIcon fontSize="small" />
                ) : (
                  <CheckIcon fontSize="small" />
                )}

                <p>Can not include your name or email address</p>
              </div>
              <div className="warning-password">
                {/\s/.test(password) ? (
                  <ClearIcon fontSize="small" />
                ) : (
                  <CheckIcon fontSize="small" />
                )}
                <p>Can not contain spaces</p>
              </div>
            </div>
          )}
        </div>}
      </div>

      <div className="end">
        <p className="body-2">
          By selecting Agree and continue, I agree to
          <span className="underline-custom bold">
            {" "}
            Terms of Service, Payments Terms of Service
          </span>{" "}
          and <span className="underline-custom bold">
            Notification Policy
          </span>{" "}
          and acknowledge the
          <span className="underline-custom bold">Privacy Policy.</span>
        </p>
        <Gap height="20px" />

        <Button
          fullWidth
          disabled={isPasswordValid === false}
          variant="contained"
          color="secondary"
          onClick={handleAgreeButton}
        >
          Agree and Continue
        </Button>
        <Gap height="10px" />

        <p className="text-center">
          Have an account?
          <span className="underline-custom bold">Sign in.</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignUpPage;
