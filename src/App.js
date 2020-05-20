import React from 'react'
import {Row, Col, Spin, Alert, Input} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import {connect, useSelector} from "react-redux"
import {fetchData, addPerson, showAlert, showForm, showDetail, onSearch} from './redux/actions'
import FormAddPerson from "./components/FormAddPerson"
import PersonsList from "./components/PersonsList"
import BtnControl from "./components/BtnsControl"
import DetailPerson from "./components/DetailPerson"

function App(props) {
    const antIcon = <LoadingOutlined style={{fontSize: 45}} spin/>
    const {Search} = Input

    const data = useSelector(state => state.state.data)
    const filteredData = useSelector(state => state.state.filteredData)
    const loader = useSelector(state => state.state.loading)
    const form = useSelector(state => state.state.showForm)
    const alert = useSelector(state => state.state.alert)
    const detail = useSelector(state => state.state.detailData)

    const personHandler = data => {
        props.addPerson(data)
        props.showAlert('Успешно добавлен')
        props.showForm()
    }

    return (
        <Col span={20} offset={2}>
            <Row className="header" justify="center" align="middle">
                <h1>Legion</h1>
                {alert && <Alert style={{width: '50%'}} message={alert} type="success"/>}
                {loader && <Spin style={{position: "absolute", left: '35%'}} indicator={antIcon}/>}
            </Row>

            <Col span={20} offset={2}>
                <BtnControl
                    fetchData={fetchData}
                    showForm={showForm}
                />

                {form && <FormAddPerson personHandler={personHandler}/>}

                <Search style={{margin: '10px 0'}}
                        placeholder="Type text..."
                        onSearch={value => props.onSearch(value)}
                        enterButton
                />

                <PersonsList data={filteredData.length ? filteredData : data} showDetail={showDetail}/>

                {Object.keys(detail).length > 0 && <DetailPerson {...detail}/>}
            </Col>
        </Col>
    )
}

const mapStateToProps = state => ({state})

export default connect(mapStateToProps, {addPerson, showAlert, showForm, showDetail, onSearch})(App)
