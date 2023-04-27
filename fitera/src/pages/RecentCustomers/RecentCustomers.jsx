import React, { useState, useEffect } from 'react';
import './RecentCustomers.css'
function RecentCustomers() {

    const data = [
        {
            "id": 1,
            "name": "Aarya Tiwari",
            "email": "aarya.tiwari@somaiya.edu",
            "phone": "+917021875752",
            "age": 19,
            "plan": "Monthly",
        },
        {
            "id": 2,
            "name": "Dhairya Satra",
            "email": "satra.dv@somaiya.edu",
            "phone": "+918135692464",
            "age": 20,
            "plan": "Yearly",
        },
        {
            "id": 3,
            "name": "Pratham Goenka",
            "email": "pratham.goenka@somaiya.edu",
            "phone": "+91250175012",
            "age": 20,
            "plan": "Lifetime",
        },
        {
            "id": 4,
            "name": "Dhruv Sharma",
            "email": "dhruv.sharma@somaiya.edu",
            "phone": "+910157032149",
            "age": 34,
            "plan": "Quarterly",
        },
        {
            "id": 5,
            "name": "Ameya Yeole",
            "email": "ameya.yeole@somaiya.edu",
            "phone": "+91673782012",
            "age": 21,
            "plan": "Lifetime",
        },
        {
            "id": 6,
            "name": "Aditya Awhad",
            "email": "aditya.awhad@somaiya.edu",
            "phone": "+919153195688",
            "age": 90,
            "plan": "Guest",
        },
    ]
    const stringJSON = JSON.stringify(data) //Converted to String
    console.log(stringJSON)
    const dataJSON = JSON.parse(stringJSON) // Converted Back to JSON Data
    return (
        <div className='main-table'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th className='heading'>ID</th>
                        <th className='heading'>Name</th>
                        <th className='heading'>Email</th>
                        <th className='heading'>Phone</th>
                        <th className='heading'>Age</th>
                        <th className='heading'>Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {dataJSON.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.age}</td>
                            <td>{row.plan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentCustomers;