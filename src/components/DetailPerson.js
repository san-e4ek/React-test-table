import React from 'react'
import {List, Divider, Col} from 'antd'

export default props => {
    const data = [
        `Выбран пользователь: ${props.firstName} ${props.lastName}`,
        `Описание: ${props.description}`,
        `Адрес проживания: ${props.address.streetAddress}`,
        `Город: ${props.address.city}`,
        `Провинция/штат: ${props.address.state}`,
        `Индекс: ${props.address.zip}`
    ]
    return (
        <Col span={12}>
            <Divider orientation="left">Detail info</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Col>
    )

}