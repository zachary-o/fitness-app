import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} width="200px" height="40px" alt="logo" />
        <Typography variant="h5" pb="40px">
          Zach Osetskyi 🤘
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
