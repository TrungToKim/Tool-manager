import './ClassSchedule.css'
import { useState } from 'react'

const Major = [
    // Dai so tuyen tinh
    { id: 1, SubId: 'DSTT', ClassId: 'DSTT01', name: 'Dai so tuyen tinh', credit: 3, date: 'T2', room: 'A7-301', time: 'CA1' },
    { id: 2, SubId: 'DSTT', ClassId: 'DSTT02', name: 'Dai so tuyen tinh', credit: 3, date: 'T3', room: 'A7-302', time: 'CA2' },
    { id: 3, SubId: 'DSTT', ClassId: 'DSTT03', name: 'Dai so tuyen tinh', credit: 3, date: 'T5', room: 'A7-303', time: 'CA3' },

    // Tieng anh nang cao
    { id: 4, SubId: 'TANC', ClassId: 'TANC01', name: 'Tieng anh nang cao', credit: 2, date: 'T4', room: 'A8-301', time: 'CA2' },
    { id: 5, SubId: 'TANC', ClassId: 'TANC02', name: 'Tieng anh nang cao', credit: 2, date: 'T2', room: 'A8-302', time: 'CA1' },
    { id: 6, SubId: 'TANC', ClassId: 'TANC03', name: 'Tieng anh nang cao', credit: 2, date: 'T6', room: 'A8-303', time: 'CA4' },

    // Cau truc du lieu va thuat toan
    { id: 7, SubId: 'CTDL&TT', ClassId: 'CTDL&TT01', name: 'Cau truc du lieu va thuat toan', credit: 3, date: 'T7', room: 'A1-301', time: 'CA1' },
    { id: 8, SubId: 'CTDL&TT', ClassId: 'CTDL&TT02', name: 'Cau truc du lieu va thuat toan', credit: 3, date: 'T3', room: 'A1-302', time: 'CA3' },
    { id: 9, SubId: 'CTDL&TT', ClassId: 'CTDL&TT03', name: 'Cau truc du lieu va thuat toan', credit: 3, date: 'T5', room: 'A1-303', time: 'CA2' },

    // Toan roi rac
    { id: 10, SubId: 'TRR', ClassId: 'TRR01', name: 'Toan roi rac', credit: 3, date: 'T3', room: 'A4-301', time: 'CA3' },
    { id: 11, SubId: 'TRR', ClassId: 'TRR02', name: 'Toan roi rac', credit: 3, date: 'T4', room: 'A4-302', time: 'CA1' },
    { id: 12, SubId: 'TRR', ClassId: 'TRR03', name: 'Toan roi rac', credit: 3, date: 'T6', room: 'A4-303', time: 'CA2' },

    // Yeu cau phan mem
    { id: 13, SubId: 'YCPM', ClassId: 'YCPM01', name: 'Yeu cau phan mem', credit: 2, date: 'T5', room: 'A2-302', time: 'CA2' },
    { id: 14, SubId: 'YCPM', ClassId: 'YCPM02', name: 'Yeu cau phan mem', credit: 2, date: 'T6', room: 'A2-303', time: 'CA4' },
    { id: 15, SubId: 'YCPM', ClassId: 'YCPM03', name: 'Yeu cau phan mem', credit: 2, date: 'T2', room: 'A2-304', time: 'CA3' },

    // Lap trinh huong doi tuong
    { id: 16, SubId: 'OOP', ClassId: 'OOP01', name: 'Lap trinh huong doi tuong', credit: 3, date: 'T2', room: 'A3-301', time: 'CA2' },
    { id: 17, SubId: 'OOP', ClassId: 'OOP02', name: 'Lap trinh huong doi tuong', credit: 3, date: 'T4', room: 'A3-302', time: 'CA3' },
    { id: 18, SubId: 'OOP', ClassId: 'OOP03', name: 'Lap trinh huong doi tuong', credit: 3, date: 'T6', room: 'A3-303', time: 'CA1' },

    // Co so du lieu
    { id: 19, SubId: 'CSDL', ClassId: 'CSDL01', name: 'Co so du lieu', credit: 3, date: 'T3', room: 'A5-301', time: 'CA2' },
    { id: 20, SubId: 'CSDL', ClassId: 'CSDL02', name: 'Co so du lieu', credit: 3, date: 'T5', room: 'A5-302', time: 'CA3' },
    { id: 21, SubId: 'CSDL', ClassId: 'CSDL03', name: 'Co so du lieu', credit: 3, date: 'T7', room: 'A5-303', time: 'CA1' },

    // Mang may tinh
    { id: 22, SubId: 'MMT', ClassId: 'MMT01', name: 'Mang may tinh', credit: 2, date: 'T2', room: 'A6-301', time: 'CA1' },
    { id: 23, SubId: 'MMT', ClassId: 'MMT02', name: 'Mang may tinh', credit: 2, date: 'T4', room: 'A6-302', time: 'CA2' },
    { id: 24, SubId: 'MMT', ClassId: 'MMT03', name: 'Mang may tinh', credit: 2, date: 'T6', room: 'A6-303', time: 'CA3' },
]

export default function ClassSchedule() {
    const [selected, setSelected] = useState<number[]>([])
    const [selectCredit, setSelectCredit] = useState<number[]>([])
    const [selectDate, setSelectDate] = useState<string[]>([])
    const [selectPri, setSelectPri] = useState<string[]>([])
    const [dup, setDup] = useState<boolean>(false)

    function handleSelected(id: number, checked: boolean) {
        if (checked) {
            setSelected(prev => [...prev, id])
        } else {
            setSelected(prev => prev.filter(item => item !== id))
        }
    }

    function selectedPri(value: string, checked: boolean) {
        if (checked) {
            setSelectPri(prev => [...prev, value])
        } else {
            setSelectPri(prev => prev.filter(item => item !== value))
        }
    }

    function isPriority(time: string, selectPri: string[]): boolean {
        if (selectPri.length === 0) return true
        const isMorning = time === 'CA1' || time === 'CA2'
        const isAfternoon = time === 'CA3' || time === 'CA4'

        if (selectPri.includes('morning') && isMorning) return true
        if (selectPri.includes('afternoon') && isAfternoon) return true
        return false
    }

    function selectedCredit(value: string, checked: boolean) {
        const credit = Number(value)
        if (checked) {
            setSelectCredit(prev => [...prev, credit])
        } else {
            setSelectCredit(prev => prev.filter(item => item !== credit))
        }
    }

    function selectedDate(value: string, checked: boolean) {
        if (checked) {
            setSelectDate(prev => [...prev, value])
        } else {
            setSelectDate(prev => prev.filter(item => item !== value))
        }
    }

    function checkDup(checked: boolean) {
        setDup(checked)
    }

    function isDuplication(class1: typeof Major[0], class2: typeof Major[0]): boolean {
        if (class1.time === class2.time
            &&
            class1.date === class2.date
        ) return true
        return false
    }

    const selectedClasses = Major.filter(item =>
        selected.includes(item.id)
    )

    const Filter = Major.filter(item => {
        const FilterCredit =
            selectCredit.length === 0 ||
            selectCredit.includes(item.credit)

        const FilterDate =
            selectDate.length === 0 ||
            selectDate.includes(item.date)

        const FilterPri = isPriority(item.time, selectPri)

        const isDup = dup && selectedClasses.some(
            selectedClass => selectedClass.id !== item.id && isDuplication(item, selectedClass)
        );

        const FilterDup =
            !dup || !isDup

        return FilterCredit && FilterDate && FilterPri && FilterDup
    })

    return (
        <>
            <div className='Class-Screen'>
                <div className='Class-Sign'>
                    <div className='Title'>
                        <p>Thông tin các môn cần đăng ký</p>
                    </div>
                    <div className='Filter-checkbox'>
                        <input type="text" placeholder='Nhập thông tin cần tìm tại đây' />
                    </div>
                    <div>Tổng số môn đã chọn: {selected.length} </div>
                    <div>Tổng số tín đã chọn: {selected.length * 3} </div>
                    <div className='Sign'>
                        <ul>
                            {Filter.map(item => (
                                <li key={item.id}>
                                    <input type="checkbox"
                                        onChange={e => { handleSelected(item.id, e.target.checked) }}
                                    />
                                    {item.name} {item.credit} {item.room} {item.date} {item.time}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='Filter'>
                        <div className='Filter-dropdown'>
                            <p>Chọn Điều Kiện</p>
                            <div className='Filter-prioritize'>
                                <p>Ca Ưu Tiên: </p>
                                <input type="checkbox" value='morning'
                                    checked={selectPri.includes('morning')}
                                    onChange={e => { selectedPri(e.target.value, e.target.checked) }}
                                /> Ca sáng
                                <input type="checkbox" value='afternoon'
                                    checked={selectPri.includes('afternoon')}
                                    onChange={e => { selectedPri(e.target.value, e.target.checked) }}
                                /> Ca chiều
                            </div>
                            <div className='Filter-day'>
                                <p>Chọn Ngày Học: </p>
                                <input type="checkbox" value='T2'
                                    checked={selectDate.includes('T2')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T2
                                <input type="checkbox" value='T3'
                                    checked={selectDate.includes('T3')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T3
                                <input type="checkbox" value='T4'
                                    checked={selectDate.includes('T4')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T4
                                <input type="checkbox" value='T5'
                                    checked={selectDate.includes('T5')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T5
                                <input type="checkbox" value='T6'
                                    checked={selectDate.includes('T6')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T6
                                <input type="checkbox" value='T7'
                                    checked={selectDate.includes('T7')}
                                    onChange={e => { selectedDate(e.target.value, e.target.checked) }}
                                /> T7
                            </div>
                            <div className='Filter-course'>
                                <p>Chọn Học Phần: </p>
                                <input
                                    type="checkbox" value={2}
                                    checked={selectCredit.includes(2)}
                                    onChange={e => { selectedCredit(e.target.value, e.target.checked) }}
                                /> 2 TC
                                <input
                                    type="checkbox" value={3}
                                    checked={selectCredit.includes(3)}
                                    onChange={e => { selectedCredit(e.target.value, e.target.checked) }}
                                /> 3 TC
                            </div>
                            <div className='Filter-duplication'>
                                <input type="Checkbox"
                                    checked={dup}
                                    onChange={e => checkDup(e.target.checked)}
                                /> Lọc Trùng
                            </div>
                        </div>
                    </div>
                    <div className='Submit-btn'>
                        <button>Reset</button>
                        <button>Sắp Xếp</button>
                    </div>
                </div>
                <div className='Class-Calendar'>
                    <table className='Calendar-table'>
                        <thead className='Calendar-columns'>
                            <tr>
                                <th></th>
                                <th>T2</th>
                                <th>T3</th>
                                <th>T4</th>
                                <th>T5</th>
                                <th>T6</th>
                                <th>T7</th>
                            </tr>
                        </thead>
                        <tbody className='Calendar-row'>
                            <tr>
                                <td>Ca 1</td>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                        <tbody className='Calendar-row'>
                            <tr>
                                <td>Ca 2</td>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                        <tbody className='Calendar-row'>
                            <tr>
                                <td>Ca 3</td>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                        <tbody className='Calendar-row'>
                            <tr>
                                <td>Ca 4</td>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}