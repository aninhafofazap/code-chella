import logo from "../../Assets/Images/Logo1.png";
import styles from "./navbar.module.css";
import { BsList } from "react-icons/bs";

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav className={styles.container}>
        <BsList
          size={32}
          color={"#FFFFFF"}
          onClick={() => {
            const open = document.querySelector("header nav ul");
            console.log(open, "oi");
            open.classList.add("open");
            console.log(open);
          }}
        />
        <ul className={styles.list}>
          <li className={styles.itens}>A experiência</li>
          <li className={styles.itens}>Mapa de setores</li>
          <li className={styles.itens}>Informações</li>
          <li className={styles.itens}>Ingresso</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
