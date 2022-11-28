import React, { createContext, useState } from 'react';
import './style.css';
import TabMenu from './TabMenu/TabMenu';
import TabHeader from './TabMenu/TabHeader';
import Tab from './TabMenu/Tab';
import TabBody from './TabMenu/TabBody';
import Tabs from './TabMenu/Tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <Tabs>
      {['tab1', 'tab2'].map((item, index) => {
        return (
          <Tab setActiveTab={setActiveTab} title={item} id={`tab${index + 1}`}/>
        )
      })}
      {['tab1', 'tab2'].map((item, index) => {
        return (
          <TabBody id={item} activeTab={activeTab}>
          <p>Tab {index + 1}</p>
        </TabBody> 
        )
      })}
    </Tabs>
  );
}
