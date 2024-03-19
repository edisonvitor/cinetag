import styles from "./inicio.module.css"
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from '../../components/Card/index';
import { useEffect, useState } from "react";





export default function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/edisonvitor/cinetagAPI/videos").
        then(response => response.json()).
        then(data => setVideos(data));
    }, [])

    return (
        <>
            <Banner imagem="Home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}