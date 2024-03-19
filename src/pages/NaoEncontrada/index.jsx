import styles from "./NaoEncontrada.module.css";

export default function NaoEncontrada(options) {
    return (
        <section className={styles.container}>
            <h1>Oops</h1>
            <p>Não foi possível encontrar a página que você está procurando.</p>
        </section>
    )
}