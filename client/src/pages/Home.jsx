import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Home() {
  return (
    <div>
      {/* HERO */}
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Empowering Communities Through Action</h1>

        <p>Join NayePankh Foundation and make a real difference in society.</p>

        <Link to="/register">
          <button className="hero-btn">Become a Volunteer</button>
        </Link>
      </motion.section>

      {/* STATISTICS */}
      <motion.section
        className="stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <h2>500+</h2>
          <p>Volunteers</p>
        </motion.div>

        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <h2>100+</h2>
          <p>Campaigns</p>
        </motion.div>

        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <h2>2000+</h2>
          <p>Lives Impacted</p>
        </motion.div>
      </motion.section>

      {/* ABOUT US */}
      <motion.section
        className="home-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About NayePankh Foundation</h2>

        <p>
          NayePankh Foundation is a youth-led NGO dedicated to uplifting
          underprivileged communities through education, food distribution,
          hygiene awareness, and social welfare initiatives.
        </p>

        <p>
          Our mission is to empower individuals, create social impact, and
          provide opportunities for young volunteers to contribute towards
          meaningful causes.
        </p>
      </motion.section>

      <motion.section
        className="home-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Our Initiatives</h2>

        <ul className="initiative-list">
          <li>📚 Education Support Programs</li>
          <li>🍲 Food Distribution Drives</li>
          <li>👕 Clothes Donation Campaigns</li>
          <li>🩺 Hygiene Awareness Programs</li>
          <li>🐾 Animal Welfare Activities</li>
        </ul>
      </motion.section>

      <motion.section
        className="home-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Why Join Us?</h2>

        <ul className="initiative-list">
          <li>✅ Build Leadership Skills</li>
          <li>✅ Create Social Impact</li>
          <li>✅ Work with Like-Minded People</li>
          <li>✅ Gain Volunteer Experience</li>
          <li>✅ Receive Participation Certificates</li>
        </ul>
      </motion.section>
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Ready to Make a Difference?</h2>
        <br />
        <p>
          Join NayePankh Foundation today and become part of a growing community
          of changemakers.
        </p>

        <Link to="/register">
          <button className="hero-btn">Register Now</button>
        </Link>
      </motion.section>
      <footer className="footer">
  <h3>NayePankh Foundation</h3>

  <p>
    Empowering communities through education,
    awareness and social welfare.
  </p>

  <p>© 2026 NayePankh Foundation</p>
</footer>
    </div>
  );
}

export default Home;
