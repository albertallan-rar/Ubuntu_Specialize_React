import styles from './styles.module.css'

interface PresenceAreaProps{
    name:string;
    time:string;
}

function PresenceArea(props: PresenceAreaProps) {

    return (
        <div className={styles.card}>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default PresenceArea