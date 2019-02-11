import React from 'react';

const StudentRow = (props) => {

    // console.log('Student:', props.student);

    const { name, course, grade, id } = props.student;

    return(
        <tr>
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
            <td className="center">
                <button onClick={() => {props.delete(id)}} className="btn btn-small red darken-2">Delete</button>
            </td>
        </tr>

    );
}


export default StudentRow;