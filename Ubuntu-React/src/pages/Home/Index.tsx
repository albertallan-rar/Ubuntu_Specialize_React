//Import Hooks
import {useState} from 'react'

//Import Styles applied on the page
import styles from './styles.module.css'

//Import of external files used on this page
import PresenceArea from '../../components/Presence_Card'

interface Student{
    name: string,
    time: string,
}

function Home() {

    const [studentName, setStudentName] = useState<string>("")
    const [stundents, setStundents] = useState<Student[]>([])

    const handleAddStudent= () => {

        //Check if the name field is empty
        if(studentName.trim() === ''){
            return;
        }

        //Add new students to the list
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleDateString("pt-br",{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        };
        
        //Adds to the list joining the existing students in it
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
            //Scrolls through the list and displays on the screen 
            stundents.map((student,index) =>(<PresenceArea key={index} name={student.name} time={student.time}/>) 
           )
        
        }
        
    </div>
    
    )
}

export default Home