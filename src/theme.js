// src/theme.js
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
