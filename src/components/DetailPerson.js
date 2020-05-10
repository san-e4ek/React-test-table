import React from 'react'
import {Col} from 'antd'

export default props => (
    <Col className="detail-list" span={12}>
        <li className="list-item">Выбран пользователь <b>{props.firstName} {props.lastName}</b></li>
        <li className="list-item">Описание: <br/>{props.description}</li>
        <li className="list-item">Адрес проживания: <b>{props.address.streetAddress}</b></li>
        <li className="list-item">Город: <b>{props.address.city}</b></li>
        <li className="list-item">Провинция/штат: <b>{props.address.state}</b></li>
        <li className="list-item">Индекс: <b>{props.address.zip}</b></li>
    </Col>
)