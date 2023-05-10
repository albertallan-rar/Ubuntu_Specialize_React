import {useState} from 'react'

import styles from './styles.module.css'

import PresenceArea from '../../components/Presence_Card'

interface Student{
    name: string,
    time: string,
}

function Home() {

    const [studentName, setStudentName] = useState<string>("")
    const [stundents, setStundents] = useState<Student[]>([])

    const handleAddStudent= () => {

        if(studentName.trim() === ''){
            return;
        }

        const newStudent = {
            name: studentName,
            time: new Date().toLocaleDateString("pt-br",{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        };
        
        setStundents((prevStudents) => [...prevStudents, newStudent])
        setStudentName('')
    }

    return (
    <div className={styles.container}>
        <h1>Lista de Presença</h1>
        <input 
        type='text' 
        placeholder="Digite alguma coisa"
        value={studentName}
        onChange={e => setStudentName(e.target.value)} 
        />
        <button type="button" onClick={handleAddStudent}>Adicionar</button>

        {
            stundents.map((student,index) =>(<PresenceArea key={index} name={student.name} time={student.time}/>) 
           )
        
        }
        
    </div>
    
    )
}

export default Home