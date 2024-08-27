import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import instalatorImage from '../images/instalator.jpg'

const Contact = () => (
  <div>
    <Header />
    <main>
    <br/><br/><br/><br/><h1>Contact</h1>
    
      <div className='instalation' >
    
      <p>Contactați-ne pentru mai multe informații.<br/><br/>
         Email :  raulcora68@yahoo.com <br/><br/>
         Tehnic : 0723208099 <br/><br/>
         Planificari montaje : 0733532360 <br/><br/>
         Vanzari: 0722884549<br/>

      </p>
      <div instalation>
      <img src={instalatorImage}/>
      </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
