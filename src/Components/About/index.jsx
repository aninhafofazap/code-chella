import styles from "./about.module.scss";
import imagem from "../../Assets/Images/retangulo.png";
import { MdStars } from "react-icons/md";

function About() {
  return (
    <div className={styles.about}>
      <img src={imagem} />
      <h2 className={styles.title}>
        &lt;11 e 12 de Março&gt; Aluródromo de São Paulo
      </h2>
      <p className={styles.description}>
        Hora de programar nossa memória com novas lembranças! Uma nova
        experiência sobre música, linguagens e, claro, tecnologia! Somos um
        festival diverso, com vários artistas e referências. Divirta-se!
      </p>
      <a href="/">
        Comprar ingresso! <MdStars size={20} color={"#FFFFFF"} />
      </a>
    </div>
  );
}

export default About;
