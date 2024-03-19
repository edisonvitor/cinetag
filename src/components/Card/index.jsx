import { useFavoritoContext } from "../../contexto/Favoritos";
import styles from "./Card.module.css";
import iconeDesfavoritar from "./favorite.png";
import iconeFavoritar from "./favorite_outline.png"
import { Link } from 'react-router-dom';


export default function Card({ id, capa, titulo }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;


    return (
        <div className={styles.card}>
            <Link to={`/${id}`} className={styles.link}>
                <img className={styles.capa} src={capa} alt={titulo} />
                <h2>{titulo}</h2>
            </Link>
            <img
                className={styles.favoritar}
                src={icone}
                alt="icone favoritar"
                onClick={() => {
                    adicionarFavorito({ id, capa, titulo })
                }}
            />
        </div>
    )
}