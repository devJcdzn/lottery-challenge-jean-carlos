import { useState } from "react";
import LogoSena from "../icons/logo-sena";
import './megasena.scss';
import { Themes } from "../themes/thmes";


const Megasena = () => {
  const [theme, setTheme] = useState('megasena');
  const colorTheme = Themes(theme);

  return (
    <main style={{backgroundColor: colorTheme}}>
      <div className="top-content">
        <select
          onChange={ e => setTheme(e.target.value)}
          name="select"
          id="game-type">
          <option value="megasena">mega sena</option>
          <option value="quina">quina</option>
          <option value="lotofacil">Lotofacil</option>
          <option value="lotomania">Lotomania</option>
          <option value="timemania">Timemania</option>
          <option value="luckDay">Dia de Sorte</option>
        </select>
        <div className="logo">
          <LogoSena />
          <span>{theme.toUpperCase()}</span>
        </div>
        <span className='edition-event'>Concurso n xxxx</span>
      </div>

      <div className="bottom-content">
        <div className="numbers-ev">
          <li>02</li>
          <li>04</li>
          <li>09</li>
          <li>65</li>
          <li>35</li>
          <li>12</li>
        </div>
      </div>
    </main>
  )
}

export default Megasena