import styles from './styles.module.css'

import PresenceArea from '../../components/Presence_Card'

function Home() {
    return (
    <div className={styles.container}>
        <h1>HOME</h1>
        <input type='text' placeholder="Digite alguma coisa"></input>
        <button type="button">Adicionar</button>

        <PresenceArea />
        <PresenceArea />
        <PresenceArea />
    </div>
    
    )
}

export default Home