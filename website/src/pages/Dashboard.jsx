import React from "react";
import WebAppHeader from '../components/WebAppHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';

const edgesData = [300, 122, 133, 177, 122]

function Dashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const myData = [];
            const response = await axios.get('http://localhost:3001/dashboard');
            console.log(response.data);
            setData(response.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <WebAppHeader edges={edgesData} values={data} />
        </>
    );
};

export default Dashboard;