import React from 'react';
import Clock from './clock';
import Tab from "./tab";
import Weather from "./weather";

const Root = () => {
  return (
    <div className = "rootDiv">
      <Clock/>
      <span className="test"></span>
      <h1 className="header">Tab</h1>
      <Tab options={[{title: 'one', content: "css sucks"}, {title:'two', content: "toodledoos"}, {title: 'three',content: 'appppppp'}]} />
      <Weather />
    </div>
  );
};


export default Root;
