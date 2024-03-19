import { Link } from 'react-router-dom'
import styles from './cabecalho.module.css'

const logo = "/imagens/Logo-cinetag-branco 1.png"


export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to={"/"}>
                <img src={logo} alt="logo cinetag" />
            </Link>
            <nav>
                <Link className={styles.cabecalho__link} to="/">Inicio</Link>
                <Link className={styles.cabecalho__link} to="/favoritos">Favoritos</Link>
            </nav>
        </header>
    )
}