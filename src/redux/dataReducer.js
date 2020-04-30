const initialState = {
    minData: [],
    bigData: [],
    loading: false,
    alert: null
};

export const dataReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                minData: [actions.data, ...state.minData],
                bigData: [actions.data, ...state.bigData]
            };

        case 'MIN/FETCH_DATA':
            return {...state, minData: [...actions.data]};

        case 'BIG/FETCH_DATA':
            return {...state, bigData: [...actions.data]};

        case 'SHOW_LOADER':
            return {...state, loading: true};

        case 'HIDE_LOADER':
            return {...state, loading: false};

        case 'SHOW_ALERT':
            return {...state, alert: actions.text};

        case 'HIDE_ALERT':
            return {...state, alert: null};

        default:
            return state
    }
};