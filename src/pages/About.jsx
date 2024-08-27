import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import panouImage from '../images/panou.jpg'
import sun3Image from '../images/sun3.png'


const About = () => (
  <div>
    <Header />
    <main>
      <br/><br/><br/><br/><h1 >Despre Noi</h1><br/>
      <div className='sun'><img src={sun3Image}/></div><br/>
      <p>SC Shimano SRL, infiintata in anul 2004, ofera servicii in domeniul energiei alternative.</p>
       <p>  In anul 2010, am ales sa montam prin programul   ,,Casa Verde ,,   derulat prin Administratia Fondului pentru Mediu.<br/><br/>
         La inceput am montat panouri solare care produc apa calda menajera, pompe de caldura, instalatii de incalzire prin pardoseala si din anul 2019 am fost validati ca instalatori in cadrul  programului Casa Verde Fotovoltaice.<br/><br/>
         Pana in prezent avem peste 300 instalatii solare cu panouri care produc apa calda menajera si peste 1000 instalatii solare cu Panouri Fotovoltaice care produc energie electrica.<br/><br/>
         Din  anul 2018 detinem certificat ISO pentru sistem de management al calitatii in conformitate cu standardul ISO  9001 : 2015 si suntem atestati de catre ANRE cu gradul C1A pentru proiectare instalatii electrice si C2A pentru executare instalatii electrice.
</p>
      <div className='img-about'>
       <img src={panouImage}/>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
