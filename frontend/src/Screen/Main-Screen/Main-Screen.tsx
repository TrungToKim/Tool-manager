import './Main-Screen.css'
import ClassExam from '../Class-Exam-Screen/Class&Exam'
// import GraduationGPA from '../Graduation-GPA-Screen/Graduation&GPA'
export default function MainScreen() {
    return (
        <>
            <div className="Main-Screen">
                <div className='Screen-1'>
                    <ClassExam />
                </div>
                {/* <div className='Screen-2'>
                    <GraduationGPA />
                </div> */}
            </div>
        </>
    )
}