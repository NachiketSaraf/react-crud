import React, { useEffect, useState } from 'react'

export default function CreateTour() {
    const [tourName, setTourName] = useState('');
    const [summary, setSummary] = useState('');
    const [duration, setDuration] = useState('');

    async function create(event) {
        const req = await fetch("http://localhost:8080/api/v1/tours", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{name: tourName,summary: summary, duration: duration}])
        })
        const res = await req.json() 
        console.log(res);
    }

    return (
        <div>
            <form action="" onSubmit={create} className=' flex gap-2'>
                <input value={tourName} onChange={(e) => setTourName(e.target.value)} type="text" placeholder='Tour Name' className='border-2 p-2' style={{ border: "2px solid black" }} />
                <input value={summary} onChange={(e) => setSummary(e.target.value)} type="text" placeholder='Tour Summery' className='border-2 p-2' style={{ border: "2px solid black" }} />
                <input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" placeholder='Duration' className='border-2 p-2' style={{ border: "2px solid black" }} />
                <button type='submit' className='p-3 bg-rose-500 border-2 border-rose-950 rounded-lg items-center'>Submit</button>
            </form>
        </div>
    )
}
