import styles from "./favoritos.module.css"
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card"
import { useFavoritoContext } from "../../contexto/Favoritos";



export default function Favoritos() {
    const { favorito } = useFavoritoContext();

    return (
        <div>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>
                    Meus Favoritos
                </h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => <Card {...fav} key={fav.id}/>)}
            </section>
        </div>
    )
}