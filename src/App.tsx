import './index.css';
import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Tag } from './Tag';
import { Tabs } from './Tabs';

function App() {
  return ( 
    <div className="p-6 space-y-4">
      <Tag label="New" color="primary" />
      <Tag label="Success" color="success" size="lg" />
      <Tag label="Error" color="error" size="sm" />

      <Tabs
        tabs={[
          { label: 'Home' },
          { label: 'Profile' },
          { label: 'Settings' },
        ]}
      />
    </div>
  );
}

export default App;
