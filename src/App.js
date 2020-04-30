import React, {useState} from 'react'
import {Row, Col, Button, Spin, Alert} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import {connect, useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {fetchMinData, fetchBigData, addPerson, showAlert} from './redux/actions'
import {FormAddPerson} from "./components/FormAddPerson"
import {PersonsList} from "./components/PersonsList"

function App(props) {
    const antIcon = <LoadingOutlined style={{fontSize: 45}} spin/>;
    const dispatch = useDispatch();
    const minData = useSelector(state => state.data.minData);
    const bigData = useSelector(state => state.data.bigData);
    const loader = useSelector(state => state.data.loading);
    const alert = useSelector(state => state.data.alert);
    const [isOpen, setIsOpen] = useState(false);
    const [showData, changeShowData] = useState(null);

    const addPerson = data => {
        setIsOpen(data.isOpen);
        props.addPerson(data);
        props.showAlert('Успешно добавлен');
    };

    return (
        <Col span={20} offset={2}>
            <Row justify="center">
                <h1>Solders</h1>
            </Row>

            {alert && <Alert style={{marginBottom: 20}} message={props.data.alert} type="success"/>}

            <Row justify="center">
                <Button
                    type="primary"
                    onClick={e => {
                        dispatch(fetchMinData());
                        changeShowData(true)
                    }}
                >Маленький объем</Button>

                <Button
                    style={{margin: '0 10px'}}
                    type="primary"
                    onClick={e => {
                        dispatch(fetchBigData());
                        changeShowData(false)
                    }}
                >Большой объем</Button>

                <Button
                    type="primary"
                    onClick={e => setIsOpen(!isOpen)}
                >Добавить нового</Button>
            </Row>

            {isOpen && <FormAddPerson personHandler={addPerson}/>}

            <Row justify="center">
                <Col span={20}>
                    {
                        !minData.length && !bigData.length
                            ? <h2 style={{textAlign: 'center', marginTop: 20}}>Данных пока нет :(</h2>
                            : showData
                            ? <PersonsList data={minData}/>
                            : <PersonsList data={bigData}/>
                    }

                    {loader && <Spin style={{margin: '20% 50%'}} indicator={antIcon}/>}
                </Col>
            </Row>
        </Col>
    )
}

const mapStateToProps = state => ({
    data: state.data
});


export default connect(mapStateToProps, {addPerson, showAlert})(App)
