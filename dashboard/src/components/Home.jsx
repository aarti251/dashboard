import React from 'react';
import  { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../context/Datacontext';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {
     const [selectedProperties, setSelectedProperties] = useState([]);
    const [selectedFinancials, setSelectedFinancials] = useState([]);
{/*
    const properties = [
        { id: 1, owner_name: 'John Doe', property_name: 'Downtown Apartments', total_units: 100, filled_units: 90, vacant_units: 10, occupancy_rate: 90.00, last_maintenance_date: '2024-01-15' },
        { id: 2, owner_name: 'Jane Smith', property_name: 'Lakeside Villas', total_units: 50, filled_units: 45, vacant_units: 5, occupancy_rate: 90.00, last_maintenance_date: '2024-02-10' },
        { id: 3, owner_name: 'Mike Johnson', property_name: 'Mountain View Estates', total_units: 200, filled_units: 150, vacant_units: 50, occupancy_rate: 75.00, last_maintenance_date: '2023-12-20' },
    ];

    const financialRecords = [
        { id: 1, property_id: 1, income: 10000.00, expenses: 5000.00, net_profit: 5000.00 },
        { id: 2, property_id: 2, income: 6000.00, expenses: 3000.00, net_profit: 3000.00 },
        { id: 3, property_id: 3, income: 20000.00, expenses: 15000.00, net_profit: 5000.00 },
    ];

    const handlePropertySelect = (id) => {
        setSelectedProperties((prev) => {
            if (prev.includes(id)) {
                return prev.filter((propertyId) => propertyId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleFinancialSelect = (id) => {
        setSelectedFinancials((prev) => {
            if (prev.includes(id)) {
                return prev.filter((recordId) => recordId !== id);
            } else {
                return [...prev, id];
            }
        });
    }; 

    */}
    const handlePropertySelect = (id) => {
        setSelectedProperties((prev) => {
            if (prev.includes(id)) {
                return prev.filter((propertyId) => propertyId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleFinancialSelect = (id) => {
        setSelectedFinancials((prev) => {
            if (prev.includes(id)) {
                return prev.filter((recordId) => recordId !== id);
            } else {
                return [...prev, id];
            }
        });
    }; 

    const { properties } = useContext(DataContext); 
    const { finances } = useContext(DataContext); 

  return (
    <>
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>properties</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>occupacy rate</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>80%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>vacancy rate</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>85%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>net profit</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>$15,000</h1>
            </div>
        </div>

       
   
        <div className="dashboard">
            <div className="header1">
            <div className="delt">
            <h2>Properties Overview</h2>
            <div className="add">
                <p>
                <MdDelete />delete
                </p>
          <p  className='added'>
          <FaPlus className='plus'/>Add New
          </p>
         
            </div>
         
            </div>
            
           
           
              
           
            <table className="properties-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Owner Name</th>
                        <th>Property Name</th>
                        <th>Total Units</th>
                        <th>Filled Units</th>
                        <th>Vacant Units</th>
                        <th>Occupancy Rate</th>
                        <th>Last Maintenance Date</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedProperties.includes(property.id)} 
                                    onChange={() => handlePropertySelect(property.id)} 
                                />
                            </td>
                            <td>{property.owner_name}</td>
                            <td>{property.property_name}</td>
                            <td>{property.total_units}</td>
                            <td>{property.filled_units}</td>
                            <td>{property.vacant_units}</td>
                            <td>{property.occupancy_rate}</td>
                            <td>{property.last_maintenance_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
<div className="header2">
            <h2>Financial Records</h2>
            <table className="financial-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Property ID</th>
                        <th>Income</th>
                        <th>Expenses</th>
                        <th>Net Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {finances.map(record => (
                        <tr key={record.id}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedFinancials.includes(record.id)} 
                                    onChange={() => handleFinancialSelect(record.id)} 
                                />
                            </td>
                            <td>{record.property_id}</td>
                            <td>{record.income}</td>
                            <td>{record.expenses}</td>
                            <td>{record.net_profit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
 </main>
 </>
  )
}

export default Home