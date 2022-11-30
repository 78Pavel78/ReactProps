import React from 'react'
import Student from './student'

const students = [
    {
        name: 'Пушкин',
        telegram: '@pushkin'
    },
    {
        name: 'Ломоносов',
        telegram: '@lomonosov'
    },
    {
        name: 'Менделеев',
        telegram: '@mendeleev'
    },
    {
        name: 'Попов',
        telegram: '@popov'
    },
]


const Students = () => {
  return (
    <div>
        <h1>Студенты</h1>
       {students.map(item => {return <Student name={item.name} telegram={item.telegram} /> })} 
    </div>
  )
}

export default Students;