export const addPerson = data => {
    return {
        type: 'ADD_PERSON', data
    }
};

export function showLoader() {
    return {
        type: 'SHOW_LOADER'
    }
}

export function hideLoader() {
    return {
        type: 'HIDE_LOADER'
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({type: 'SHOW_ALERT', text});

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: 'HIDE_ALERT'
    }
}

export function fetchMinData() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
            const data = await response.json();
            dispatch({type: 'MIN/FETCH_DATA', data});
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert('Сервак не дает :('))
        }

    }
}

export function fetchBigData() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
            const data = await response.json();
            dispatch({type: 'BIG/FETCH_DATA', data});
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert('Сервак не дает :('))
        }

    }
}