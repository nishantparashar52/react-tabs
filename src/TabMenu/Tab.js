import React from 'react';

const Tab = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => setActiveTab(id);
  return (
    <div
      className=""
      id={id}
      className={activeTab ? 'active' : ''}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Tab;
