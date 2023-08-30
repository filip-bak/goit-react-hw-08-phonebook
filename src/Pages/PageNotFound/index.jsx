import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default PageNotFound;
