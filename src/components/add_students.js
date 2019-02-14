import React, { Component } from 'react';
import {formatPostData} from "../helpers";
import { Link} from "react-router-dom";
import axios from "axios";

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: '',
        instructor:'',
        notes: ''
    }

    handleSubmit = async ( event ) => {
        event.preventDefault();

        const formattedStudent = formatPostData(this.state);

        await axios.post('/server/createstudent.php', formattedStudent);

        this.props.history.push('/');
    }

    handleKeyPress = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    resetForm = ()=> {
        this.setState({
            name: '',
            course: '',
            grade: '',
            instructor: '',
            notes:''
        });
    }


     //  the top is the same as the switch statement
    //     switch (event.target.name) {
    //         case 'name':
    //             this.setState({
    //                 name: event.target.value
    //             });
    //             break;
    //         case 'course':
    //             this.setState({
    //                 course: event.target.value
    //             });
    //             break;
    //         case 'grade':
    //         this.setState({
    //             grade: event.target.value
    //         });
    //     }
    // }

    render(){
        const {name, course, grade, instructor, notes} = this.state;


        return (
            <div>
                <h1 className="center">Add student</h1>

                <div className="row">
                    <div className="col s12 right-align">
                        <Link className='btn blue' to="/">Home</Link>
                        </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className='col input-field s10 offset-s1'>
                            <input onChange={this.handleKeyPress} name="name" type="text" value={name} autoComplete="off"/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col input-field s10 offset-s1'>
                            <input onChange={this.handleKeyPress} name="course" type="text" value={course}/>
                            <label htmlFor="course">Course</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col input-field s10 offset-s1'>
                            <input onChange={this.handleKeyPress} name="grade" type="text" value={grade}/>
                            <label htmlFor="grade">Grade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col input-field s10 offset-s1'>
                            <input onChange={this.handleKeyPress} name="instructor" type="number" type="text" value={instructor}/>
                            <label htmlFor="instructor">Instructor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col input-field s10 offset-s1'>
                            <input onChange={this.handleKeyPress} name="notes" type="number" type="text" value={notes}/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                        </div>
                        <div className="col s6 center">
                            <button className='btn green darken-2'>Add</button>
                        </div>

                    </div>
                </form>

            </div>
        );
    }

}

export default AddStudent;