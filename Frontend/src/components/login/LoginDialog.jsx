import React, { useContext, useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { authenticateSignUp, authenticateLogin } from "../service/api";
import { DataContext } from "../context/DataProvider.jsx";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  &h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestButton = styled(Button)`
text-transform :none;
background: #fff;
color:#2874f0;
height:48px;
border-radius:2px
box-shadow:0 2px 4px 0 rgb(0,0,0, 20%)
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  margin-top: 10px;
  line-height: 0;
  font-weight: 600;
`;

const accountinitialvalues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, wishlist and recommendations ",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "sign up with your mobile number to get started",
  },
};
const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

function LoginDialog({ open, setOpen }) {

  const [account, setAccount] = useState(accountinitialvalues.login);
  const [signup, setSignUp] = useState();
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { toggleAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    setAccount(accountinitialvalues.login);
    setError(false);
  };

  const toggleSignUp = () => {
    setAccount(accountinitialvalues.signup);
  };

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };
  
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    let respond = await authenticateSignUp(signup);
    if (!respond) return;
    handleClose();
    toggleAccount(signup.firstname);
  };


  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      toggleAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography varient="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>
            {account.view === "login" ? (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  label="Enter Username"
                ></TextField>
                {error && (
                  <Error>Please Enter valid username or password</Error>
                )}
                <TextField
                  variant="standard"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  label="Enter password"
                ></TextField>
                <Text>
                  By continuing, you agree to Flipcart's Terms of use and
                  Privacy Policy.
                </Text>
                <LoginButton onClick={loginUser}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <Button>Request OTP</Button>
                <CreateAccount
                  onClick={() => {
                    toggleSignUp();
                  }}
                >
                  New to Flipcart? Create an account
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter FirstName"
                  onChange={(e) => onInputChange(e)}
                  name="firstname"
                ></TextField>
                <TextField
                  variant="standard"
                  label="Enter LastName"
                  onChange={(e) => onInputChange(e)}
                  name="lastname"
                ></TextField>
                <TextField
                  variant="standard"
                  label="Enter UserName"
                  onChange={(e) => onInputChange(e)}
                  name="username"
                ></TextField>
                <TextField
                  variant="standard"
                  label="Enter Email"
                  onChange={(e) => onInputChange(e)}
                  name="email"
                ></TextField>
                <TextField
                  variant="standard"
                  label="Enter Password"
                  onChange={(e) => onInputChange(e)}
                  name="password"
                ></TextField>

                <TextField
                  variant="standard"
                  label="Enter phone"
                  onChange={(e) => onInputChange(e)}
                  name="phone"
                ></TextField>
                <LoginButton onClick={signUpUser}>Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
