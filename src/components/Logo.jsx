import { ThemeProvider, createTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

const theme = createTheme();
theme.typography.h2 = {
  fontSize: '3rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.5rem',
  },
};

const Logo = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" color="primary.main" component="span">
          Phone
          <Typography
            component="span"
            variant="h2"
            color="secondary"
            fontWeight={600}
            textTransform={'capitalize'}
          >
            book
          </Typography>
        </Typography>
      </ThemeProvider>
    </>
  );
};

export default Logo;
