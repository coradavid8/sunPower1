import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
  <div>
    <Header />
    <main>
      <h1>Eroare 404</h1>
      <p>Pagina nu a fost găsită.</p>
    </main>
    <Footer />
  </div>
);

export default NotFound;
