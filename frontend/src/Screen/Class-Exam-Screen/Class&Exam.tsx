import './Class&Exam.css'
import { useState } from 'react'
import ClassSchedule from '../../Components/ClassSchedule'
import ExamSchedule from '../../Components/ExamSchedule'
export default function ClassExam() {
    const [activeTabs, setActiveTabs] = useState("class")
    return (
        <>
            <div className="Class-Exam-Screen">
                <div className='Class-Exam-Nav'>
                    <h1 className='title'>Quản lý lịch đăng ký và lịch thi</h1>
                </div>
                <div className='Class-Exam-Tabs'>
                    <div className="Class-Btn">
                        <button className='Class-Exam-Btn' onClick={() => setActiveTabs('class')}>Class</button>
                    </div>
                    <div className="Exam-Btn">
                        <button className='Class-Exam-Btn' onClick={() => setActiveTabs('exam')}>Exam</button>
                    </div>
                </div>
                <div className='Class-Exam-Content'>
                    {activeTabs === 'class' && <ClassSchedule />}
                    {activeTabs === 'exam' && <ExamSchedule />}
                </div>
            </div>
        </>
    )
}