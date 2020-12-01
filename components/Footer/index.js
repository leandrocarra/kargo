import Styles from '../../styles/Componentes/Footer/Footer.module.scss';

function Footer() {
  return (
    <div className={Styles.footer}>
      <ul className={Styles.footer__container}>
        <li className={Styles.footer__item}>Sobre nós</li>
        <li className={Styles.footer__item}>Faq</li>
        <li className={Styles.footer__item}>Termos e condições</li>
        <li className={Styles.footer__item}>Feedback</li>
        <li className={Styles.footer__item}>Kargo@2020 All Rights Reserved.</li>
      </ul>
    </div>
  );
}

export default Footer;