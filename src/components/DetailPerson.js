import React from 'react'
import {Col} from 'antd'

export const DetailPerson = props => {
    const address = {...props['address']}
    return (
        <Col className="detail-list" span={12}>
            <li className="list-item">Выбран пользователь <b>{props.firstName} {props.lastName}</b></li>
            <li className="list-item">Описание: <br/>{props.description}</li>
            <li className="list-item">Адрес проживания: <b>{address.streetAddress}</b></li>
            <li className="list-item">Город: <b>{address.city}</b></li>
            <li className="list-item">Провинция/штат: <b>{address.state}</b></li>
            <li className="list-item">Индекс: <b>{address.zip}</b></li>
        </Col>
    )
}