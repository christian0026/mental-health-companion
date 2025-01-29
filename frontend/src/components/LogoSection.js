import React from 'react';
import { motion } from 'framer-motion';
import acm from '../assets/acm.png';
import apa from '../assets/apa.png';
import scholar_space from '../assets/scholar_space.png';
import mdpi from '../assets/mdpi.png';
import wrcouncil from '../assets/wrcouncil.png';
import '../App.css';

const LogoSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.5 }}
    style={{ marginBottom: "100px", padding: "20px" }}
  >
    <div className="logos-row d-flex flex-wrap justify-content-center gap-8">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://dl.acm.org/doi/10.1145/3564752"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={acm} alt="ACM Logo" style={{ width: "80px", height: "auto" }} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://psycnet.apa.org/record/2016-22282-000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={apa} alt="APA Logo" style={{ width: "80px", height: "auto" }} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/9498e31c-22c8-42ed-b0c3-0eca9dca85e9/content"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={scholar_space} alt="Scholar Space Logo" style={{ width: "80px", height: "auto" }} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.mdpi.com/2227-9709/10/4/82"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mdpi} alt="MDPI Logo" style={{ width: "80px", height: "auto" }} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://journalpublication.wrcouncil.org/index.php/JHAM/article/view/10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wrcouncil} alt="WR Council Logo" style={{ width: "80px", height: "auto" }} />
      </motion.a>
    </div>
  </motion.div>
);

export default LogoSection;