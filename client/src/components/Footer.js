import React from 'react';
import './Footer.css';
import Navlogo from './Navlogo3.png';
import {
  bannerArrow,
  facebook,
  googlePlus,
  instagram,
  mail,
  phone,
  twitter,
  youtube,
} from '../svg/svg';

export default function Footer() {
  return (
    <div className="footerPage">
      <div className="footerUpBlock">
        <div className="footerAbout footerSection">
          <h2 className="footerTitle footertitleMargin">ABOUT US</h2>
          <p className="footerPar">
            ABIOOC Huile d’Olive (Abbes Biological Olive Oil)est une entreprise
            familiale de 3e génération vouée à produire une huile d’olive de
            catégorie supérieure. Depuis plus de 70 ans, la famille Lahmar a au
            cœur de son entreprise la qualité de la production de son huile
            d’olive 100 % extra vierge, issue des 96 000 oliviers plantés sur
            ses terres familiales, dans la région de Mahdia, en Tunisie.
          </p>
        </div>
        <div className="footerBestSeller footerSection">
          <h2 className="footerTitle">PAYMENT SUPPORTED</h2>
          <li className="footerPar"> {bannerArrow} E-DINAR</li>
          <li className="footerPar"> {bannerArrow} D17</li>
          <li className="footerPar"> {bannerArrow} RUNPAY</li>
          <li className="footerPar"> {bannerArrow} SOBFLOUS</li>
          <li className="footerPar"> {bannerArrow} SWARED</li>
        </div>
        <div className="footerContact footerSection">
          <h2 className="footerTitle">CONTACT US</h2>
          <li className="footerPar">{phone} Tel : 29581180</li>
          <li className="footerPar"> {mail} Mail : abiooc@abiooc.com</li>
        </div>
      </div>

      <div className="footerInside">
        {' '}
        <div className="footercontactsLogo">
          <a
            href="https://www.facebook.com/bshop4"
            className="footerContactOneLogo"
          >
            {facebook}
          </a>
          <a
            href="https://www.instagram.com/bshopgames/"
            className="footerContactOneLogo"
          >
            {instagram}
          </a>
          <a href="https://www.youtube.com/" className="footerContactOneLogo">
            {youtube}
          </a>
          <a href="https://twitter.com/" className="footerContactOneLogo">
            {twitter}
          </a>

          <a href="https://www.google.com/" className="footerContactOneLogo">
            {googlePlus}
          </a>
        </div>
        <img className="footerLogo" src={Navlogo} alt="" />{' '}
      </div>
      <h2 className="Copiright">
        © Copyrights 2023 ABIOOC - All Rights Reserved
      </h2>
    </div>
  );
}
