import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/edisonvitor/cinetagAPI/videos?id=${parametros.id}`).
        then(response => response.json()).
        then(data => setVideo(...data));
    }, [])

    const parametros = useParams();
    
    if (!video) {
        return (
            <NaoEncontrada />
        )
    }
    return (
        <>
            <Banner imagem='Player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.Player}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}