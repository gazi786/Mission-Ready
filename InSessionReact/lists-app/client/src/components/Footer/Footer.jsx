import React from 'react';
import { Box, Stack } from '@mui/material';
import Copyright from './Copyright';
import DateTime from '../Utils/DateTime';

const Footer = () => {
  return (
    <Box bgcolor="gray" position="sticky" p={2} flex={2}>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ minHeight: "10vh" }}>
        <DateTime/>
        <Copyright />

      </Stack>
    </Box>
  )
}

export default Footer