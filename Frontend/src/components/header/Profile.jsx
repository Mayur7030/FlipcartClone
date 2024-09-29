import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;
const LogOut = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

function Profile({ account, toggleAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logOutUser = () => {
    toggleAccount("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor:"pointer"}} >{account}</Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logOutUser();
          }}
        >
          <PowerSettingsNewIcon
            color="primary"
            fontSize="small"
          ></PowerSettingsNewIcon>
          <LogOut>LogOut</LogOut>
        </MenuItem>
      </Component>
    </>
  );
}

export default Profile;
