import { PulseLoader } from 'react-spinners';
import styles from './Spinner.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Spinner({ loading, left, right, mqRight, top, bottom }) {
  const matches = useMediaQuery('(min-width:400px)');
  return (
    <PulseLoader
      size={matches ? 10 : 8}
      className={styles.spinner}
      cssOverride={{
        left,
        right: matches ? right : mqRight,
        top,
        bottom,
      }}
      speedMultiplier={1.1}
      color="rgb(33, 176, 243)"
      loading={loading}
    />
  );
}
