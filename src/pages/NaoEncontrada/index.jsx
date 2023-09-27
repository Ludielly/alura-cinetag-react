import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Erro 404!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;