const initialState = {
    data: [],
    filteredData: [],
    detailData: {},
    loading: false,
    showForm: false,
    alert: null
}

export const stateReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_PERSON':
            return {...state, data: [actions.data, ...state.data]}

        case 'SEARCH':
            const searchData = [...state.data].filter(item => {
                return item.firstName.toLowerCase().includes(actions.value.toLowerCase())
                || item.lastName.toLowerCase().includes(actions.value.toLowerCase())
                || item.email.toLowerCase().includes(actions.value.toLowerCase())
                || item.phone.includes(actions.value.toLowerCase())
            })
            return {...state, filteredData: [...searchData]}

        case 'SHOW_FORM':
            return {...state, showForm: !state.showForm}

        case 'SHOW_DETAIL':
            return {...state, detailData: actions.record}

        case 'MIN/FETCH_DATA':
            return {...state, data: [...actions.data]}

        case 'BIG/FETCH_DATA':
            return {...state, data: [...actions.data]}

        case 'SHOW_LOADER':
            return {...state, loading: true}

        case 'HIDE_LOADER':
            return {...state, loading: false}

        case 'SHOW_ALERT':
            return {...state, alert: actions.text}

        case 'HIDE_ALERT':
            return {...state, alert: null}

        default:
            return state
    }
}