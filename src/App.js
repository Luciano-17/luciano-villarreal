import { useState } from "react";

import Header from "./components/Header/Header";
import SobreMi from "./components/Sobre-mi/Sobre-mi";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  if(darkMode) {
    document.querySelector('#body').classList.add('darkMode');
  } else {
    document.querySelector('#body').classList.remove('darkMode');
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;