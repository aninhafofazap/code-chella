import logo from "../../Assets/Images/Logo1.png";
import styles from "./navbar.module.scss";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
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
          <li>A experiência</li>
          <li>Mapa de setores</li>
          <li>Informações</li>
          <li>Ingresso</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
