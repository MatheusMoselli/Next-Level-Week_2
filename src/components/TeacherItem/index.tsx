import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62854829?s=460&u=b227941e1b48ff59e9331b0b193c9fc15c25f925&v=4" alt="Matheus Moselli"/>
                <div>
                    <strong>Matheus Moselli</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br></br>
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200 mil 
            </p>
                        
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem