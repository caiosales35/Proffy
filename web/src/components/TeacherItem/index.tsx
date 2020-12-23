import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="Caio" />
        <div>
          <strong>Caio Sales</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Texto
        <br />
        <br />
        Texto
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
