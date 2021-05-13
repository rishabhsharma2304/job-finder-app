import axios from 'axios';
import { useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    jobs: [],
    loading: true
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_REQUEST: 'get-request',
    ERROR: 'error'
}



export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL,{
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params}
        }).then(
            res => {
                dispatch({type: ACTIONS.GET_REQUEST, payload: {jobs: res.data}})
            }).catch(e => {
                if(axios.isCancel(e)) return
                dispatch({type: ACTIONS.ERROR, payload: {error: e}})
            })

            return () => {
                cancelToken.cancel();
            }

    }, [params, page])

    return state
}