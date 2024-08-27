import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fotovolImage from '../images/fotovol.jpg'
import invertorImage from '../images/invertor.jpg'
import sun3Image from '../images/sun3.png'

const Produse = () => (
  <div>
    <Header />
    <main>
    <br/><br/><br/><br/><h1>Produse</h1>
    <div className='sun'><img src={sun3Image}/></div><br/>
      <p>PRODUSE:<br/><br/>
1.	Panouri fotovoltaice<br/>
    <div className='products'><img src={fotovolImage}/></div>

    <br/><br/>
2.	Invertoare<br/>
    <div className='products'><img src={invertorImage}/></div>

    <br/><br/>
3.	Accesorii     - profile aluminiu
                     -suporti de montaj pentru acoperis cu tigla, acoperis cu tabla, acoperis sandwich
                     -cleme de montaj
                     -suruburi, piulite
                     -cablu solar
                     -mufe MC4
                     - sigurante fuzibile<br/><br/>

4.	Acumulatori pentru instalatii fotovoltaice<br/><br/>
5.	Device instalatii fotovoltaice        -Smart Power Sensor
                                                          -Power Module
                                                          - Back-up System
                                                          - Optimizer 
                                                          - Smart Dongle<br/><br/>

6.	 Sisteme fotovoltaice  complecte   - monofazate  de 3 , 4 , 5  si 6 kW
                                                              -trifazate de 5 , 6 , 8 , 10 , 12 , 15 , 20 kW <br/><br/><br/><br/>
</p>
    </main>
    <Footer />
  </div>
);

export default Produse;