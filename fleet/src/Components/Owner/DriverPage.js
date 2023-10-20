import React from 'react';
import Navbar from '../Navbar';
import BusDrivers from './BusDrivers';
export default function DriverPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 bg-dark text-light p-0">
          <Navbar />
        </div>
        <div className="col-md-9 p-3">
          <BusDrivers/>
        </div>
      </div>
    </div>
  );
}
