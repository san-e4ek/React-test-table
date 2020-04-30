import React, {useState} from 'react'
import {DetailPerson} from "./DetailPerson"
import {Input, Col, Table} from 'antd'

export const PersonsList = props => {
    const {Search} = Input;
    const [detail, setDetail] = useState({});
    const data = [...props.data].map((obj, index) => {
        const newObj = {...obj, key: index + 1};
        return newObj
    });

    const columns = [
        {
            title: '№',
            dataIndex: 'key',
            sorter: (a, b) => a.key - b.key
        },
        {
            title: 'First name',
            dataIndex: 'firstName',
            sorter: (a, b) => a.firstName.length - b.firstName.length
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.length - b.lastName.length
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
    ];


    return (
        <div>
            <Col span={18} offset={3}>
                <Search style={{margin: '10px 0'}} placeholder="Введите текст"
                        onSearch={value => console.log(value)} enterButton/>
            </Col>

            <Table
                pagination={{pageSize: 15, position: ['bottomCenter']}}
                columns={columns}
                dataSource={data}
                onRow={record => {
                    return {
                        onClick: e => setDetail(record)
                    }
                }}
            />

            {Object.keys(detail).length ? <DetailPerson {...detail}/> : null}
        </div>
    )
};