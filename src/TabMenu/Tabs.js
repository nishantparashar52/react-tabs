import React from 'react';

const Tabs = ({ children }) => {
  return (
    <div className="Tabs">
      <ul className="nav">{children}</ul>
      <div className="outlet"></div>
    </div>
  );
};
export default Tabs;
