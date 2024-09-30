import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Section 1: Logo ou Nom de l'entreprise */}
        <div>
          <h2 style={styles.companyName}>Shoes Shop Fun Basket</h2>
        </div>

        {/* Section 2: Liens de navigation */}
        <div>
          <ul style={styles.footerLinks}>
            <li><a href="/apropos" style={styles.footerLink}>À propos</a></li>
            <li><a href="/services" style={styles.footerLink}>Services</a></li>
            <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
            <li><a href="/envoilivraison" style={styles.footerLink}>Envoi et livraison</a></li>
            <p></p>
            <li><a href="/privacy" style={styles.footerLink}>Politique de confidentialité</a></li>
          </ul>
        </div>

        {/* Section 3: Icônes de réseaux sociaux */}
        <div style={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" style={styles.icon}></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" style={styles.icon}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={styles.icon}></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

// Styles inline
const styles = {
  footerContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '20px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  companyName: {
    fontSize: '1.5em',
    margin: '0',
  },
  footerLinks: {
    listStyleType: 'none',
    padding: 0,
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5em',
    color: '#fff',
    margin: '0 10px',
  },
  copyright: {
    marginTop: '20px',
    fontSize: '0.9em',
  },
};

export default Footer;


