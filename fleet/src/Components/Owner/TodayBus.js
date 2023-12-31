import React from 'react';
import Navbar from '../Navbar';
import './TodayBus.css';

export default function TodayBus() {
  const todaySchedule = [
    {
      id: 1,
      task: 'StateBank - Puttur',
      time: '08:00 AM',
      image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
    },
    {
      id: 2,
      task: 'Puttur-Uppinangady',
      time: '10:00 AM',
      image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
    },
    {
      id: 3,
      task: 'StateBank - Puttur',
      time: '08:00 AM',
      image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
    },
    {
      id: 4,
      task: 'Puttur-Uppinangady',
      time: '10:00 AM',
      image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
    },
    {
        id: 5,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
      {
        id: 6,
        task: 'Puttur-Uppinangady',
        time: '10:00 AM',
        image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
      },
      {
        id: 7,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
      {
        id: 8,
        task: 'Puttur-Uppinangady',
        time: '10:00 AM',
        image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
      },
      {
        id: 9,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
    // Other bus schedule items for today...
  ];

  const tomorrowSchedule = [
    {
      id: 1,
      task: 'StateBank - Puttur',
      time: '08:00 AM',
      image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
    },
    {
      id: 2,
      task: 'Puttur-Uppinangady',
      time: '10:00 AM',
      image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
    },
    {
      id: 3,
      task: 'StateBank - Puttur',
      time: '08:00 AM',
      image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
    },
    {
      id: 4,
      task: 'Puttur-Uppinangady',
      time: '10:00 AM',
      image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
    },
    {
        id: 5,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
      {
        id: 6,
        task: 'Puttur-Uppinangady',
        time: '10:00 AM',
        image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
      },
      {
        id: 7,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
      {
        id: 8,
        task: 'Puttur-Uppinangady',
        time: '10:00 AM',
        image: 'https://cache.careers360.mobi/media/colleges/staticmap/2023/8/8/20415.png',
      },
      {
        id: 9,
        task: 'StateBank - Puttur',
        time: '08:00 AM',
        image: 'https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg',
      },
    // Other bus schedule items for tomorrow...
  ];
 
  
  const cardTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Times, serif',
  };

  const cardStyle = {
    backgroundColor: 'white',
    transition: 'transform 0.2s',
    width: '100%', // Adjusted width to take the full width of the column
  };

  

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Times, serif',
  };

  return (
    <>
      <div className="bus-schedule-bg">
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="row">
            <div className="col-md-3">
              <Navbar />
            </div>
            <div className="col-md-9">
              <h2 className="schedule-header mt-5" style={headerStyle}>
                Today's Schedule
              </h2>

              <div className="row">
                {todaySchedule.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-4 mb-4" // Divide each row into 4 columns
                  >
                    <div
                      className="card h-100"
                      style={cardStyle}
                    >
                      <img
                        src={item.image}
                        alt={item.task}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={cardTextStyle}>
                          {item.task}
                        </h5>
                        <div className="text-center">
                          <p className="card-text" style={cardTextStyle}>
                            <strong>Time:</strong> {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="schedule-header" style={headerStyle}>
                Tomorrow's Schedule
              </h2>

              <div className="row">
                {tomorrowSchedule.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-4 mb-4" // Divide each row into 4 columns
                  >
                    <div
                      className="card h-100"
                      style={cardStyle}
                    >
                      <img
                        src={item.image}
                        alt={item.task}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={cardTextStyle}>
                          {item.task}
                        </h5>
                        <div className="text-center">
                          <p className="card-text" style={cardTextStyle}>
                            <strong>Time:</strong> {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}