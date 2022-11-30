import React from 'react';
import { Button, DatePicker, Space, version } from 'antd';
import { Steps } from 'antd';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Step } = Steps;
function App() {
  return (
    <div className="App">
     
        
        <h1> My first react project</h1>
        <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
      <Divider dashed />
      <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
    </div>
  );
}

export default App;
