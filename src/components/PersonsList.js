import React from 'react'
import {Table} from 'antd'
import {useDispatch} from "react-redux";

export default props => {
    const dispatch = useDispatch()
    const data = props.data.map((item, i) => item = {...item, key: i})
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'key',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'First name',
            dataIndex: 'firstName',
            sorter: (a, b) => {
                if (a.firstName < b.firstName) {
                    return - 1
                }
                if (a.firstName > b.firstName) {
                    return + 1
                }
            }
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            sorter: (a, b) => {
                if (a.lastName < b.lastName) {
                    return - 1
                }
                if (a.lastName > b.lastName) {
                    return + 1
                }
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                if (a.email < b.email) {
                    return - 1
                }
                if (a.email > b.email) {
                    return + 1
                }
            }
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            sorter: (a, b) => a.phone.replace(/\D+/g,"") - b.phone.replace(/\D+/g,"")
        }
    ]

    return (
        <>
            <Table
                style={{cursor: 'pointer'}}
                pagination={{position: ['bottomCenter']}}
                columns={columns}
                dataSource={data}
                onRow={record => {
                    return {
                        onClick: () => dispatch(props.showDetail(record))
                    }
                }}
            />
        </>
    )
};