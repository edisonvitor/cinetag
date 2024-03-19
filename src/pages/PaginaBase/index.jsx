import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import FavoritosProvider from "../../contexto/Favoritos";
import Container from "../../components/Container";
import Rodape from "../../components/rodape";


export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}