import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          {/* Navbar content */}
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-content">
                  <h1>Fleet Management Home</h1>
                 { /*<img src="https://images.immediate.co.uk/production/volatile/sites/3/2022/05/VK09172921a93b1-5340-44ba-a4ee-7e79d4a257c5b2e171af-a9aa-45cf-b936-d6e12ea962ae-3fd921c.jpg?quality=90&crop=6px,357px,2826px,1882px&fit=700,466"></img>
             */  }   {/* Add your fleet management content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
