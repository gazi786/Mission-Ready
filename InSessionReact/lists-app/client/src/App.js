import React, { useState } from 'react';
import Header from './components/Navbar/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="column" justifyContent="space-between">
          <Header setMode={setMode} mode={mode} />
          <Main />
          <Footer />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
