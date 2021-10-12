import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import MsLayout from './components/layout/layout';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(123, 72%, 56%)',
    },
    secondary: {
      main: 'hsl(146, 53%, 20%)',
    },
  },
});

function App() {
  useEffect(() => {
    setTimeout(() =>{
      document.body.classList.add('ms-init');
    }, 1);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <MsLayout />
    </ThemeProvider>
  );
}

export default App;
