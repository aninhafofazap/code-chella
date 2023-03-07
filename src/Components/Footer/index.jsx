import styles from "./footer.module.scss";
import logo2 from "../../Assets/Images/Logo2.png";
import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={styles.rodape}>
        <img />
      </div>
      <footer>
        <img src={logo2} alt="Logo" />
        <p>Acesse nossas redes:</p>
        <ul>
          <li>
            <a href="/">
              <FaWhatsapp size={18} color={"#444444"} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitch size={18} color={"#444444"} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram size={18} color={"#444444"} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter size={18} color={"#444444"} />
            </a>
          </li>
        </ul>
        <p>
          Desenvolvido por Ana Victória & Alura. Projeto fictício sem fins
          comerciais.
        </p>
      </footer>
    </>
  );
}

export default Footer;
