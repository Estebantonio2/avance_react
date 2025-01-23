import { useState } from 'react'
import './Footer.css'

const Footer = () => {
const [color, setColor] = useState<number>(0)

    const posiblesColores = [
        "red", "blue", "peru"
    ]

    const footerOnClick = () => {
        if (posiblesColores.length > 0) {
            const pos = Math.floor(Math.random() * (posiblesColores.length));
            setColor(pos);
        }
    }

    const estilo = {
        backgroundColor : posiblesColores[color]
    }
    return <div className="card mt-2" style={estilo} onClick={footerOnClick}>
        <div className="card-body texto-centrado text-white">
            Programacion Web 2025-0
        </div>
    </div>
}

export default Footer;