import React from 'react';
import { Typography, Divider } from 'antd';
import 'antd/dist/antd.css';
export default class Intro extends React.Component {

    render() {
        const { Title, Paragraph,  } = Typography;
        return (
            <Typography>
                <Title>Introduction</Title>
                <Paragraph>
                   11111111111111111111111111111111111
                   22222222222222222222222222222222222
                   33333333333333333333333333333333333
                </Paragraph>
                <Divider />
            </Typography>
            
        )
    }
}