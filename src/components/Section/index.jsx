import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <Typography
        sx={{ fontSize: ['2rem', '2.5rem'] }}
        variant="h3"
        fontWeight={500}
        textTransform="uppercase"
        color="primary.main"
      >
        {title}
      </Typography>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
