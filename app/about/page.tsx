import VideoBackground from "../VideoBackground";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css"; // Use one CSS file
import Image from "next/image";
import image1 from './team1.jpg'
import image2 from './team2.jpg'
import image3 from './team3.jpg'

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
              <Image width={200}  height={200} src={image1}  alt="John Doe" />
              <h3>Adolf Hitler</h3>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <Image  width={200}  height={300} src={image2} alt="Jane Smith" />
              <h3>Mr Bean</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className={styles.teamMember}>
              <Image   width={200}  height={300} src={image3} alt="Michael Brown" />
              <h3>Peter Parker</h3>
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
