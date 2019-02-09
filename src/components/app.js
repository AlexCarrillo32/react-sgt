import 'materialize-css/dist/css/materialize.min.css';
import'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import Addstudent from './add_students';
import Table from './table';

const App = () => (
    <div>
        <h1 className="center">SGT</h1>

        <div className="row">
            <div className='row'>
                <Table/>
            </div>
            <div className="col s12 m4">
                <Addstudent/>
            </div>
        </div>

    </div>
);

export default App;
