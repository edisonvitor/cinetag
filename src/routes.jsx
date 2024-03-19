import Rodape from "./components/rodape";
import Cabecalho from "./components/cabecalho"
import Favoritos from "./pages/favotiros";
import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import FavoritosProvider from "./contexto/Favoritos";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";


export default function AppRouter() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />} />
                        <Route path="favoritos" element={<Favoritos />} />
                        <Route path=":id" element={<Player />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}