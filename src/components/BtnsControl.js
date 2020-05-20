import React from "react";
import {Button, Row} from "antd";
import {useDispatch} from "react-redux";

export default props => {
    const dispatch = useDispatch()
    const minDataUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigDataUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
        <Row justify="center">
            <Button
                type="primary"
                onClick={() => dispatch(props.fetchData(minDataUrl, 'MIN/FETCH_DATA'))}
            >
                Troop
            </Button>

            <Button
                style={{margin: '0 10px'}}
                type="primary"
                onClick={() => dispatch(props.fetchData(bigDataUrl, 'BIG/FETCH_DATA'))}
            >
                Battalion
            </Button>

            <Button
                type="primary"
                onClick={() => dispatch(props.showForm())}
            >
                Add warrior
            </Button>
        </Row>
    )
}