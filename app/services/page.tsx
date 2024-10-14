// services/page.tsx
import VideoBackground from  '../VideoBackground';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from  './services.module.css' // Adjust the path if necessary

const Services = () => {
  return (
    <div className={styles.pageWrapper}>
      <VideoBackground />
      <Header />
      <main className={styles.mainContent}>
        <h1>Our Services</h1>
        <div className={styles.serviceSection}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Service One</h2>
            <p className={styles.serviceDescription}>
              Detailed description of Service One that provides value to the customers.
            </p>
          </div>
        </div>
        <div className={styles.serviceSection}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Service Two</h2>
            <p className={styles.serviceDescription}>
              Detailed description of Service Two that showcases its benefits and features.
            </p>
          </div>
        </div>
        <div className={styles.serviceSection}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Service Three</h2>
            <p className={styles.serviceDescription}>
              Detailed description of Service Three that highlights its uniqueness.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
