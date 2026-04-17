import React, { useEffect, useState } from 'react'
import './update.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Update() {


    const { id } = useParams();

    const navigate = useNavigate();

    const [values, setValues] = useState({ taskName: "", taskDetails: "" });



    useEffect(() => {
        axios.get(`http://localhost:8080/gettask/${id}`)
            .then(res => setValues({ ...values, taskName: res.data.taskName, taskDetails: res.data.taskDetails }))
            .catch(err => console.log(err));

            console.log("get data");


    }, []);

    const change = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value });
        console.log("change");
    }


    const handelSubmit = () => {
       
        axios.put(`http://localhost:8080/updatetask/${id}`, values)
        .then(res => {toast.success("Task Updated")})
        .catch(err => {toast.error(err)})

        navigate('/');
    }

    return (
        <div>
            <ToastContainer autoClose={3000}/>
            <div className='update' id='task-up' >
                    <div><h2>Update Task</h2></div>
                    <div className='task-update'>
                        <input
                            type='text'
                            placeholder='Task'
                            name='taskName'
                            className='up p-2'
                            value={values.taskName}
                            onChange={change}
                        />
                        <textarea
                            type='text'
                            placeholder='Task Details'
                            name='taskDetails'
                            className='up p-2'
                            value={values.taskDetails}
                            onChange={change}
                        />
                    </div>
                    <div className='button'>
                        <button type="button" className="btn btn-outline-primary mx-2" onClick={()=>{handelSubmit()}}>Update</button>
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={() => { navigate("/") }}>Close</button>
                    </div>
            </div>
        </div>
    )
}
