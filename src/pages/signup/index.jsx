import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Gap, Header } from "../../components";

import { Wrapper } from "./element";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Wrapper>
      <Header title="Sign up" />
      <Gap height="30px" />
      <div className="form">
        <TextField
          fullWidth
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <Gap height="20px" />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <Gap height="20px" />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <Gap height="20px" />
        <TextField
          id="display-name"
          fullWidth
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

        <Button fullWidth disabled={true} variant="contained" color="secondary">
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
