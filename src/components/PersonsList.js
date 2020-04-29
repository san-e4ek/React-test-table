import React, {useState} from 'react'
import {DetailPerson} from "./DetailPerson"
import {Input, Col, Table} from 'antd'

export const PersonsList = props => {
    const {Search} = Input
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
    ]

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const data = [...props.data].map((obj, index) => {
        const newObj = {...obj, key: index + 1}
        return newObj
    })

    const [fullPerson, setFullPerson] = useState({})
    const [visible, changeVisible] = useState(false)

    const handlerPerson = record => {
        setFullPerson(record)
        changeVisible(true)
    }

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
                onChange={onChange}
                onRow={record => {
                    return {
                        onClick: e => handlerPerson(record)
                    }
                }}
            />

            {visible ? <DetailPerson {...fullPerson}/> : null}
        </div>
    )
}