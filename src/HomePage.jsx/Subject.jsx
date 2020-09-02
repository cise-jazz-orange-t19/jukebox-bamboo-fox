import React from 'react';

import 'antd/dist/antd.css';

import { Card, Col, Row } from 'antd';
import './App.css';

export default class Subject extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title=" Subject one" bordered={false}>
                            one
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Subject two" bordered={false}>
                            two
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Subject three" bordered={false}>
                            three
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Subject four" bordered={false}>
                            four
        </Card>
                    </Col> <Col span={8}>
                        <Card title="Subject five" bordered={false}>
                            five
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Subject six" bordered={false}>
                            six
        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}