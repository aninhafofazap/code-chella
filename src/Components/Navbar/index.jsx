import logo from "../../Assets/Images/Logo1.png";
import styles from "./navbar.module.scss";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  // Resolver questao do menu no mobile assim que terminar a construção da pagina inicial.
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    const navbar = document.querySelector("nav");
    setOpen((open) => !open);
    navbar?.classList.toggle("abresaporra");
  }

  return (
    <header>
      <img src={logo} alt="Logo" />
      {open ? (
        <RiCloseFill
          size={32}
          color={"#FFFFFF"}
          onClick={() => handleOpenMenu()}
        />
      ) : (
        <BsList size={32} color={"#FFFFFF"} onClick={() => handleOpenMenu()} />
      )}
      <nav>
        <ul>
          <li>
            <a href="">A experiência</a>
          </li>
          <li>
            <a href="">Mapa de setores</a>
          </li>
          <li>
            <a href="">Informações</a>
          </li>
          <li>
            <a href="">Ingresso</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
