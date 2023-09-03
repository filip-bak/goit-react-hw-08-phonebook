import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const UserGetStarted = () => {
  return (
    <Box textAlign="center">
      <Typography gutterBottom variant="h5" color={'warning.main'}>
        Get Started
      </Typography>
      <Button size="small" component={Link} to="/register" variant="outlined">
        Register
      </Button>
    </Box>
  );
};
