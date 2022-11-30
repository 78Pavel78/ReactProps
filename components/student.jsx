import React from 'react'

const Student = (props) => {
    return (
        <div>
            <div>Имя: {props.name} </div>
            <div>Телеграм: {props.telegram} </div>

        </div>
    );
}

export default Student;

