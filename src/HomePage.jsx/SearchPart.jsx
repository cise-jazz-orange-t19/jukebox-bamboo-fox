import React from 'react';
 
import 'antd/dist/antd.css';

import { Input } from 'antd';

export default class SearchPart extends React.Component {
    render() {
        const { Search } = Input;

        
        
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                
            </div>
        );
    }
}