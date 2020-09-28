import React from 'react';
import './style.css';
import { StarOutlined,HeartTwoTone, TrademarkCircleFilled,UserOutlined} from '@ant-design/icons';
import { Button,Divider  } from 'antd';
import 'antd/dist/antd.css'
import Homepage from './Homepage.jsx';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <div className="logo" > <StarOutlined  />SEER</div>
        <div className="save"><Button icon={<HeartTwoTone />}>My saved searches</Button></div>
        <div className="rate"><Button icon={<TrademarkCircleFilled />}>My ratings</Button></div>

        <div className="user"><Button icon={<UserOutlined />}>User</Button></div>
        <Divider className="divider"/>

        <Homepage />
      </div>
    )
  }
}