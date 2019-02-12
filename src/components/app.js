import 'materialize-css/dist/css/materialize.min.css';
import'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Addstudent from './add_students';
import Table from './table';
import studentData from '../data/get_all_students';
import { randomString } from '../helpers';


class App extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        this.getStudentData();

    }

    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student) =>{
            return student.id === id;
        });
        if (indexToDelete >= 0){
            const tempStudents = this.state.students.slice();

            tempStudents.splice(indexToDelete, 1);

            this.setState({
                students: tempStudents
            });
        }
    }


    addStudent =(student) =>{

        student.id = randomString();

        this.setState({
            students: [...this.state.students, student]
        });
    }

    getStudentData(){
        // call server to get student data
        axios.get('http://localhost/server/getstudentlist.php').then((response) => {
            console.log("Server Response:", response.data.data);

            this.setState({
                students: response.data.data
            });
        });


    }

    render() {
        return (
            <div>
                <h1 className="center">SGT</h1>

                <div className="row">
                    <div className='col s12 m8'>
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <Addstudent add={this.addStudent}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
