import React, { useEffect, useState } from 'react'
import './home.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


export default function Home() {

    const [inputs, setInputs] = useState({ taskName: "", taskDetails: "" });

    const [array, setArray] = useState([]);

    const navigate = useNavigate();


    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }

    const submit = async () => {
        if (inputs.taskName == "" || inputs.taskDetails == "") {
            toast.error("Fill The Complete Info");
            loadData();
        }
        else {
            await axios.post("http://localhost:8080/addtask", { taskName: inputs.taskName, taskDetails: inputs.taskDetails });
            // setArray([...array,inputs]);
            setInputs({ taskName: "", taskDetails: "" });
            toast.success("Task Added");
            loadData();
        }
    }

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };


    const loadData = async () => {
        const responce = await axios.get("http://localhost:8080/gettask");
        console.log(responce.data);
        setArray(responce.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const del = async (cadid) => {
        await axios.delete(`http://localhost:8080/deletetask/${cadid}`);
        toast.success("Task Deleted");
        loadData();
    }


    return (
        <div className='todo'>
            <ToastContainer autoClose={1000}/>
            <div className='task-main'>
                <div className='task-inputs my-2'>
                    <input
                        type='text'
                        placeholder='Task'
                        className='task my-2 p-2'
                        onClick={show}
                        onChange={change}
                        name='taskName'
                        value={inputs.taskName}
                    />
                    <textarea
                        id='textarea'
                        type='text'
                        placeholder='Task Details'
                        className='task p-2'
                        onChange={change}
                        name='taskDetails'
                        value={inputs.taskDetails}
                    />
                </div>
                <button type="button" className="btn btn-danger" onClick={submit}>ADD</button>
            </div>

            <div className='container-fliud card-cont my-4 p-3'>
                {
                    array.map((Array, index) => [
                        <div className='cad' key={index}>
                            <h2>{Array.taskName}</h2>
                            <p>{Array.taskDetails}</p>
                            <div className='button'>
                                <Link type="button" class="btn btn-outline-primary mx-2" to={`/update/${Array.id}`}>Update</Link>
                                <button type="button" class="btn btn-outline-danger mx-2" onClick={() => { del(Array.id) }}>Delete</button>
                            </div>
                        </div>
                    ])
                }


            </div>

        </div>
    )
}