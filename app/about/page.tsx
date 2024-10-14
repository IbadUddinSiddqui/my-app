import VideoBackground from "../VideoBackground";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css"; // Use one CSS file
import aboutfooter from './about.module.css'

function About() {
  return (
    <>
<div className={styles.pagewrapper}>
      <VideoBackground />
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.h1}>About Us</h1>
            <p className={styles.p}>
              We are a passionate team dedicated to delivering the best solutions to our clients.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.subheading}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img src="/images/team1.jpg" alt="John Doe" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/team2.jpg" alt="Jane Smith" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/team3.jpg" alt="Michael Brown" />
              <h3>Michael Brown</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <h2 className={styles.subheading}>Our Mission</h2>
          <p className={styles.description}>
            Our mission is to provide cutting-edge technology solutions to help our clients succeed
            in their industries. We are committed to innovation, excellence, and integrity in
            everything we do.
          </p>
        </section>
      </div>
<Footer/>
</div>
    </>
  );
}

export default About;
