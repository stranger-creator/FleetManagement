import React, { useState } from 'react';
import Navbar from './Navbar';

export default function BusSchedule() {
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
    // Other bus schedule items for tomorrow...
  ];

  const [highlightedTodayHeader, setHighlightedTodayHeader] = useState(false);
  const [highlightedTomorrowHeader, setHighlightedTomorrowHeader] = useState(false);
  const [highlightedTodayCard, setHighlightedTodayCard] = useState(null);
  const [highlightedTomorrowCard, setHighlightedTomorrowCard] = useState(null);

  const cardTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle = {
    backgroundColor: 'orange',
    transition: 'transform 0.2s',
  };

  const highlightCardStyle = {
    backgroundColor: 'SkyBlue',
    transform: 'scale(1.05)',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div className="bus-schedule-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Navbar />
          </div>
          <div className="col-md-9">
            <h2
              className="schedule-header"
              onMouseEnter={() => setHighlightedTodayHeader(true)}
              onMouseLeave={() => setHighlightedTodayHeader(false)}
              style={highlightedTodayHeader ? { ...headerStyle, backgroundColor: 'orange' } : headerStyle}
            >
              Today's Schedule
            </h2>

            <div className="row">
              {todaySchedule.map((item) => (
                <div
                  key={item.id}
                  className="col mb-4"
                  onMouseEnter={() => setHighlightedTodayCard(item.id)}
                  onMouseLeave={() => setHighlightedTodayCard(null)}
                >
                  <div
                    className="card h-100"
                    style={highlightedTodayCard === item.id ? { ...cardStyle, ...highlightCardStyle } : cardStyle}
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
            
            <h2
              className="schedule-header"
              onMouseEnter={() => setHighlightedTomorrowHeader(true)}
              onMouseLeave={() => setHighlightedTomorrowHeader(false)}
              style={highlightedTomorrowHeader ? { ...headerStyle, backgroundColor: 'orange' } : headerStyle}
            >
              Tomorrow's Schedule
            </h2>

            <div className="row">
              {tomorrowSchedule.map((item) => (
                <div
                  key={item.id}
                  className="col mb-4"
                  onMouseEnter={() => setHighlightedTomorrowCard(item.id)}
                  onMouseLeave={() => setHighlightedTomorrowCard(null)}
                >
                  <div
                    className="card h-100"
                    style={highlightedTomorrowCard === item.id ? { ...cardStyle, ...highlightCardStyle } : cardStyle}
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
  );
}
