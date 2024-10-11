
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({ properties: [], occupancy: [], finances: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${window.location.origin}/api/data` );
            await setData(response.data);
        };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
