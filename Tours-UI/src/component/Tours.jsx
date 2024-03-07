import React, { useEffect, useState } from 'react'

import { MdOutlineDelete } from "react-icons/md";

export default function Tours() {
    const [list, setList] = useState([]);
    async function fetchTours() {
        const request = await fetch("http://localhost:8080/api/v1/tours", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
        const res = await request.json();
        setList(res);
    }
    async function deleteTours(){   
        const req = fetch("http://localhost:8080/api/v1/tours/:id",{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
    }
    useEffect(() => {
        fetchTours();
    })
    return (
        <div>
            <table className='mx-auto my-5'>
                <thead>
                    <tr className='bg-rose-500 text-black '>
                        <td className='p-5'>Sr. No</td>
                        <td className='p-5'>Tour Name</td>
                        <td className='p-5'>Summary</td>
                        <td className='p-5'>Duration</td>
                        <td className='p-5'>Delete</td>
                    </tr>
                </thead>
                <tbody>{
                    list.length === 0 ?
                        "loading..."
                        :
                        list.map((item, index) => (
                            <tr key={index} className='text-black bg-slate-100 items-center'>
                                <td className='p-5 '>{index + 1}</td>
                                <td className='p-5'>{item.name}</td>
                                <td className='p-5'>{item.summary}</td>
                                <td className='p-5'>{item.duration}</td>
                                <td className='p-5'>
                                <button type='submit' className='p-3 bg-rose-500 border-2 border-rose-950 rounded-lg flex items-center'>Delete  <MdOutlineDelete /></button>
                                </td>
                            </tr>
                        ))
                }
                </tbody>
            </table>
        </div>
    )
}
