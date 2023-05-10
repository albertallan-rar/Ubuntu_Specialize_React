import styles from './styles.module.css'

function Home() {
    return (
    <div className={styles.container}>
        <h1>HOME</h1>
        <input type='text' placeholder="Digite alguma coisa"></input>
        <button type="button">Adicionar</button>
    </div>
    
    )
}

export default Home