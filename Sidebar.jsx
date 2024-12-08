import React from 'react';

const Sidebar = ({ handleLinkClick }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <button className="link-button" onClick={() => handleLinkClick("You clicked Link 1!")}>
            Link 1
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => handleLinkClick("You clicked Link 2!")}>
            Link 2
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => handleLinkClick("You clicked Link 3!")}>
            Link 3
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;



