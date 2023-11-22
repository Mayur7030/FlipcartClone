import React from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Component = styled(Box)`
height:70vh;
width:90vh;
`;

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center no-repeat;
height:100%;
width:40%;
padding:45px 35px;
&>p,
&h5
{
    color:#ffffff;
    font-weight:600;

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
text-transform : none;
background: #fb641b;
color:#fff;
height:48px;
border-radius:2px
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



function LoginDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography varient="h5">Login</Typography>
              <Typography style={{ marginTop: 20 }}>
                Get access to your Orders,Wishlist and Recommendations.
              </Typography>
            </Image>
  
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter Email/Mobile Number"
            ></TextField>
            <TextField variant="standard" label="Enter password"></TextField>
            <Text>
              By continuing, you agree to Flipcart's Terms of use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{textAlign:'center',}}>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to Flipcart? Create an account</Typography>
          </Wrapper>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
