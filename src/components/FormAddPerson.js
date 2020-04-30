import React, {useState} from 'react'
import {Form, Input, Button} from 'antd'

export const FormAddPerson = props => {
    const [isSend, setIsSend] = useState({
        id: Date.now().toString(),
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const changeForm = e => {
        setIsSend({...isSend, ...{[e.target.name]: e.target.value}})
    };

    const submitForm = () => {
        props.personHandler({...isSend, isOpen: false});
    };

    return (
        <Form
            style={{margin: '15px 0'}}
            wrapperCol={{span: 12}}
            labelCol={{span: 6}}
            name="nest-messages"
            onFinish={submitForm}
        >
            <Form.Item
                name={['user', 'firstName']}
                label="First name"
            >
                <Input name='firstName' onChange={changeForm}/>
            </Form.Item>

            <Form.Item
                name={['user', 'lastName']}
                label="Last name"
            >
                <Input name='lastName' onChange={changeForm}/>
            </Form.Item>

            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input name='email' onChange={changeForm}/>
            </Form.Item>

            <Form.Item
                name={['user', 'phone']}
                label="Phone"
            >
                <Input type={"number"} name={"phone"} onChange={changeForm}/>
            </Form.Item>

            <Form.Item wrapperCol={{span: 12, offset: 16}}>
                <Button type="primary" htmlType="submit"
                        disabled={
                            isSend.firstName.trim() &&
                            isSend.lastName.trim() &&
                            isSend.email.trim() &&
                            isSend.phone.trim()
                                ? false
                                : true
                        }>
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
};