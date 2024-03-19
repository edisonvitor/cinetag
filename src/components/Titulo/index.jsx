import styles from "./Titulo.module.css";


export default function Titulo({ children }) {
    return (
        <div className={styles.titulo}>
            {children}
        </div>
    )
}