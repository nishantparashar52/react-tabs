import React from 'react';

const TabBody = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="tabContent">{children}</div> : null;
};

export default TabBody;
