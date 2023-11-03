
import React,{useState} from 'react';
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
    name: 'Hardman',
    route: 'Route 456',
    dutyTiming: '5:00 AM - 12:30 PM',
    vehicleNumber: 'Bus #C157',
  },
  {
    id: 4,
    name: 'Emily Specter',
    route: 'Route 678',
    dutyTiming: '7:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #D358',
  },
  {
    id: 5,
    name: 'Austin',
    route: 'Route 789',
    dutyTiming: '9:30 AM - 12:30 PM',
    vehicleNumber: 'Bus #E116',
  },
  {
    id: 6,
    name: 'Alwyn',
    route: 'Route 475',
    dutyTiming: '8:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #F974',
  },
  {
    id: 7,
    name: 'Micheal',
    route: 'Route 211',
    dutyTiming: '6:30 AM - 1:30 PM',
    vehicleNumber: 'Bus #G456',
  },
  {
    id: 8,
    name: 'Sam',
    route: 'Route 967',
    dutyTiming: '7:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #H456',
  },
  {
    id: 9,
    name: 'Pheonix',
    route: 'Route 444',
    dutyTiming: '6:50 AM - 4:45 PM',
    vehicleNumber: 'Bus #I456',
  },
  {
    id: 10,
    name: 'Fredrick',
    route: 'Route 202',
    dutyTiming: '7:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #J456',
  },
  {
    id: 11,
    name: 'Aldino',
    route: 'Route 202',
    dutyTiming: '7:30 AM - 3:30 PM',
    vehicleNumber: 'Bus #K456',
  },
  {
    id: 12,
    name: 'Jaden Ross',
    route: 'Route 120',
    dutyTiming: '7:45 AM - 1:30 PM',
    vehicleNumber: 'Bus #L236',
  },
  {
    id: 13,
    name: 'Wilston',
    route: 'Route 505',
    dutyTiming: '1:30 PM - 6:30 PM',
    vehicleNumber: 'Bus #W456',
  },
  {
    id: 14,
    name: 'Rhea John',
    route: 'Route 140',
    dutyTiming: '6:30 AM - 2:30 PM',
    vehicleNumber: 'Bus #N456',
  },

  // Add more driver objects here
  {
    id: 15,
    name: 'Ella Johnson',
    route: 'Route 505',
    dutyTiming: '10:30 AM - 6:30 PM',
    vehicleNumber: 'Bus #M789',
  },
  {
    id: 16,
    name: 'David White',
    route: 'Route 606',
    dutyTiming: '7:00 AM - 3:00 PM',
    vehicleNumber: 'Bus #P678',
  },
  // Add as many driver objects as needed
];
const DriverList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.dutyTiming.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="driverListContainer">
      <input
        type="text"
        placeholder="Search by name, route, duty timing, or vehicle number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchBar"
      />
      <table className="driverList">
        <thead>
          <tr>
            <th>Name</th>
            <th>Route</th>
            <th>Duty Timing</th>
            <th>Vehicle Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver) => (
            <tr key={driver.id} className="driverRow">
              <td>{driver.name}</td>
              <td>{driver.route}</td>
              <td>{driver.dutyTiming}</td>
              <td>
                <FontAwesomeIcon icon={faBus} />
                {driver.vehicleNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
