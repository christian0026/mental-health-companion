import React from 'react';
import acm from '../assets/acm.png';
import apa from '../assets/apa.png';
import scholar_space from '../assets/scholar_space.png';
import mdpi from '../assets/mdpi.png';
import wrcouncil from '../assets/wrcouncil.png';
import '../App.css';

const LogoSection = () => (
    <div className="logos-row mt-5" style={{ marginBottom: "60px" }}>
        <a href="https://dl.acm.org/doi/10.1145/3564752" target="_blank" rel="noopener noreferrer">
          <img src={acm} alt="ACM Logo" className="logo-img" style={{ width: "80px", height: "100%"}} />
        </a>

        <a href="https://psycnet.apa.org/record/2016-22282-000" target="_blank" rel="noopener noreferrer">
          <img src={apa} alt="APA Logo" className="logo-img" />
        </a>

        <a href="https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/9498e31c-22c8-42ed-b0c3-0eca9dca85e9/content" target="_blank" rel="noopener noreferrer">
          <img src={scholar_space} alt="Scholar Space Logo" className="logo-img" style={{ width: "80px", height: "100%"}} />
        </a>

        <a href="https://www.mdpi.com/2227-9709/10/4/82" target="_blank" rel="noopener noreferrer">
          <img src={mdpi} alt="MDPI Logo" className="logo-img" />
        </a>

        <a href="https://journalpublication.wrcouncil.org/index.php/JHAM/article/view/10" target="_blank" rel="noopener noreferrer">
          <img src={wrcouncil} alt="MDPI Logo" className="logo-img" />
        </a>
      </div>
);
  
export default LogoSection;