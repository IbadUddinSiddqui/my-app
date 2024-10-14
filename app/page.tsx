// app/page.tsx
import VideoBackground from './VideoBackground';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './page.module.css'
const HomePage: React.FC = () => {
  return (
    
    <>
      <VideoBackground/>
    <div>
      
    </div>
    <div className={styles.pageWrapper}>
      <VideoBackground />
      <Header />
      <main className={styles.mainContent}>
        <div>
          <h1 className={styles.heroText}>Welcome to Our Website!</h1>
          <p className={styles.subText}>We provide amazing solutions for your business.</p>
        </div>
      </main>
      <Footer />
    </div>
      
      
      
      </>
  );
};

export default HomePage;
