import React, { useContext } from 'react';
import './FindjobsMenu.css';

const MenuContext = React.createContext(false);

function Menu() {
  const showMenu = useContext(MenuContext);

  return (
    <div className="menu-container">
      {showMenu && (
        <div className="menu">
          <div className="menu-column">
            <h2>Popular Categories</h2>
            {/* <ul style={{ listStyleType: 'none' }}> */}
              <p>IT Jobs</p>
              <p>Sales Jobs</p>
              <p>Marketing Jobs</p>
              <p>Data Science Jobs</p>
              <p>HR Jobs</p>
              <p>Engineering Jobs</p>
            {/* </ul> */}
          </div>
          <div className="menu-divider"></div>
          <div className="menu-column">
          <h2>Jobs In Demand</h2>
            {/* <ul style={{ listStyleType: 'none' }}> */}
              <p>Jobs In Demand</p>
              <p>Fresher Jobs</p>
              <p>MNC Jobs</p>
              <p>Remote Jobs</p>
              <p>Work From Home Jobs</p>
              <p>Walk-In Jobs</p>
              <p>Menu Item 3</p>
            {/* </ul> */}
          </div>
          <div className="menu-divider"></div>
          <div className="menu-column">
          <h2>Jobs In Location</h2>
            {/* <ul style={{ listStyleType: 'none' }}> */}
              <p>Jobs In Delhi</p>
              <p>Jobs In Mumbai</p>
              <p>Jobs In Banglore</p>
              <p>Jobs In Hydrabad</p>
              <p>Jobs In Chennai</p>
              <p>Jobs In Pune</p>
            {/* </ul> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
export { MenuContext };
