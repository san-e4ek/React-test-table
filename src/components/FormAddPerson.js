import React, {useState} from 'react'
import {Form, Input, Button} from 'antd'

export const FormAddPerson = props => {
    const [isSend, setIsSend] = useState({
        id: Math.floor(Math.random() * 899 + 100),
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isSend: false

    })

    const changeForm = e => {
        if (isSend.firstName === '' || isSend.lastName === '' || isSend.email === '' || isSend.phone === '') {
            setIsSend({...isSend, ...{[e.target.name]: e.target.value}, isSend: false})
        }

        if (isSend.firstName !== '' && isSend.lastName !== '' && isSend.email !== '' && isSend.phone !== '') {
            setIsSend({...isSend, ...{[e.target.name]: e.target.value}, isSend: true})
        }
    }

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 12,
        },
    }

    const submitForm = () => {
        props.data({...isSend, isOpen: false});
    }

    return (
        <div>
            <Form
                style={{margin: '15px 0'}}
                {...layout}
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

                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 16}}>
                    <Button type="primary" htmlType="submit" disabled={!isSend.isSend}>
                        Добавить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}