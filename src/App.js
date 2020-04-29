import React, {useEffect, useState} from 'react'
import {PersonsList} from "./components/PersonsList"
import {FormAddPerson} from "./components/FormAddPerson"
import 'antd/dist/antd.css'
import {Row, Col, Button, Spin} from 'antd'
import { grey } from '@ant-design/colors'
import { LoadingOutlined } from '@ant-design/icons'

function App() {
    const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />
    const [minData, setMinData] = useState([])
    // const [bigData, setBigData] = useState([])
    const [isBigData, setIsBigData] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(result => result.json())
            .then(data => setMinData([...data]))

        // fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        //     .then(result => result.json())
        //     .then(data => setBigData([...data]))
    }, [])

    const addNewPerson = data => {
        setMinData([{...data}, ...minData])
        // setBigData([{...data}, ...bigData])
        setIsOpen(data.isOpen)
    }

    return (
        <Col span={20} offset={2}>
            <Row justify="center">
                <h1 className={"text-center"}>Persons list</h1>
            </Row>
            <Row justify="center">
                <Button type="primary" onClick={e => setIsBigData(false)}>Маленький объем</Button>
                <Button style={{margin: '0 10px'}} type="primary" onClick={e => setIsBigData(true)}>Большой объем</Button>
                <Button type="primary" onClick={e => setIsOpen(!isOpen)}>Добавить нового
                    пользователя
                </Button>
            </Row>
            {!isOpen ? null : <FormAddPerson data={addNewPerson}/>}

            {!minData.length
                // || !bigData.length
                ? <Spin style={{margin: "20% 50%"}} indicator={antIcon}/>
                : !isBigData
                    ? <PersonsList data={minData}/>
                    : <div>Bigdata</div>}
            {/*<PersonsList data={bigData}/>*/}

        </Col>
    )
}

export default App
