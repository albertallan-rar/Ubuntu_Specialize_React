import {useState} from 'react'

import styles from './styles.module.css'

import PresenceArea from '../../components/Presence_Card'

function Home() {

    const [studentName, setStudentName] = useState("")

    return (
    <div className={styles.container}>
        <h1>{studentName}</h1>
        <input 
        type='text' 
        placeholder="Digite alguma coisa"
        onChange={e => setStudentName(e.target.value)} 
        />
        <button type="button">Adicionar</button>

        <PresenceArea name="Batatinha" time="10:24:35"/>
        <PresenceArea name="Joao" time="10:48:47"/>
        <PresenceArea name="Albert" time="11:37:47"/>
    </div>
    
    )
}

export default Home