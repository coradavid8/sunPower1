import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pozaImage from '../images/poza.jpg'
import sun3Image from '../images/sun3.png'

const Home = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/despre-noi'); 
  };

  return (
    <div className='home'>
      <Header />
      <main className='home2'>
        <br/><br/><br/><br/><h1>Soarele straluceste pentru toti</h1><br/><br/>
        <div className='sun'><img src={sun3Image}/></div><br/>
        <p>
          Bine ați venit la SHIMANO SRL - Energie Sustenabilă pentru Viitor!<br/><br/>
          De ce să alegeți soluțiile noastre de panouri solare?<br/>
          La SHIMANO SRL, suntem dedicați să aducem lumina soarelui direct în casele și afacerile dumneavoastră.<br/> 
          Cu o experiență vastă în montarea și întreținerea panourilor solare, oferim soluții personalizate care vă permit să economisiți energie și bani, contribuind totodată la protejarea mediului.<br/><br/>

          Ce vă oferim: <br/>
          Consultanță Profesională: Echipa noastră de experți vă va ajuta să alegeți soluția optimă pentru nevoile energetice ale locuinței sau afacerii dumneavoastră.<br/>
          Montaj Rapid și Eficient: Folosim cele mai noi tehnologii pentru a asigura o instalare sigură și durabilă.<br/>
          Întreținere și Suport: Suntem alături de dumneavoastră și după instalare, oferind servicii complete de întreținere și suport tehnic.<br/><br/>
          Avantajele energiei solare:<br/>
          Reducerea Facturilor la Energie: Cu panourile solare, puteți genera propria energie, scăzând astfel considerabil costurile lunare.<br/>
          Independență Energetică: Profitați de resursele regenerabile și deveniți mai puțin dependent de rețelele de energie tradiționale.<br/>
          Impact Ecologic Pozitiv: Contribuiți la reducerea emisiilor de carbon și la un viitor mai verde.<br/><br/>
          Cum funcționează procesul?<br/>
          Evaluare și Consultanță: Începem cu o evaluare detaliată a nevoilor și a locației dumneavoastră.<br/>
          Proiectare și Planificare: Creăm un plan personalizat care să maximizeze eficiența energetică.<br/>
          Instalare: Echipa noastră calificată se ocupă de montajul rapid și sigur al panourilor solare.<br/>
          Monitorizare și Întreținere: Oferim soluții de monitorizare pentru a asigura performanța optimă a sistemului.<br/><br/>
          Investiți în viitor cu SHIMANO SRL.<br/>
          Contactați-ne astăzi pentru o consultație gratuită și faceți primul pas către un viitor mai verde și mai eficient energetic!
        </p><br/><br/>

        <button className='btn' onClick={handleButtonClick}>Despre noi</button><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='img-about'><img src={pozaImage} alt="Poza" /></div><br/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
