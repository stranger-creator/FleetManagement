import React from 'react';
import './DriverList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

const drivers = [
  {
    id: 1,
    name: 'John Doe',
    route: 'Route 101',
    dutyTiming: '8:00 AM - 4:00 PM',
    vehicleNumber: 'Bus #A123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    route: 'Route 202',
    dutyTiming: '7:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #B456',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    route: 'Route 303',
    dutyTiming: '9:15 AM - 5:15 PM',
    vehicleNumber: 'Bus #C789',
  },
  {
    id: 4,
    name: 'Emily Wilson',
    route: 'Route 404',
    dutyTiming: '6:45 AM - 2:45 PM',
    vehicleNumber: 'Bus #D012',
  },
  {
    id: 5,
    name: 'Daniel Brown',
    route: 'Route 505',
    dutyTiming: '10:30 AM - 6:30 PM',
    vehicleNumber: 'Bus #E345',
  },
  {
    id: 6,
    name: 'Olivia Lee',
    route: 'Route 606',
    dutyTiming: '7:00 AM - 3:00 PM',
    vehicleNumber: 'Bus #F678',
  },
  {
    id: 7,
    name: 'William Davis',
    route: 'Route 707',
    dutyTiming: '8:45 AM - 4:45 PM',
    vehicleNumber: 'Bus #G901',
  },
  {
    id: 8,
    name: 'Ava Rodriguez',
    route: 'Route 808',
    dutyTiming: '11:15 AM - 7:15 PM',
    vehicleNumber: 'Bus #H234',
  },
  {
    id: 9,
    name: 'Timothy Mclain',
    route: 'Route 909',
    dutyTiming: '12:25 AM - 5:30 PM',
    vehicleNumber: 'Bus #I123',
  },
];

const DriverList = () => {
  return (
    <div className="driverList">
      {drivers.map((driver) => (
        <div key={driver.id} className="driverCard">
          <h2>{driver.name}</h2>
          <p>Route: {driver.route}</p>
          <p>Duty Timing: {driver.dutyTiming}</p>
          <p>
            <FontAwesomeIcon icon={faBus} />
            {driver.vehicleNumber}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DriverList;
