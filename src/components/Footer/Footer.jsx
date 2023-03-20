import React from 'react'; //rfc créer nouveau dossier avec les import et export
import { Link } from 'react-router-dom';
import LogoDrdrone from '../../assets/logotype-1024x1016.png';
import Home from '../../pages/Homepage';
import './Footer.css';

function Footer() {
  return (
    <footer className="wrapper">
      <div className="TextFooterLink wrapper1">
        <a
          className="footerlinks GridTextFooter1" // pour rappeler les classes de style.css
          href="https://drdrone.fr/#services"
          rel="noreferrer"
          target="_blank" // permet quand clique sur le lien, d'ouvrir une nouvelle page !
        >
          Nos prestations
        </a>
        <a
          className="footerlinks GridTextFooter2"
          href="https://drdrone.fr/qui-sommes-nous/"
          rel="noreferrer"
          target="_blank"
        >
          Qui sommes nous ?
        </a>
        <a
          className="footerlinks GridTextFooter3"
          href="https://drdrone.fr/demande-de-devis/"
          rel="noreferrer"
          target="_blank"
        >
          Demande de devis
        </a>
        <a
          className="footerlinks GridTextFooter4"
          href="https://drdrone.fr/contact/"
          rel="noreferrer"
          target="_blank"
        >
          Contact
        </a>
        <a
          className="footerlinks GridTextFooter5"
          href="https://drdrone.fr/mentions-legales/"
          rel="noreferrer"
          target="_blank"
        >
          Mentions légales
        </a>
      </div>
      <Link to={Home} className="Logofooter LogoGrid">
        <img src={LogoDrdrone} alt="logo enseigne" />
      </Link>
      <div className="Copyright FooterOnFooter">
        © Copyright
      </div>
    </footer>
  );
}
export default Footer;
