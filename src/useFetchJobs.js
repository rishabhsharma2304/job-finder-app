import axios from 'axios';
import { useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    jobs: [],
    loading: true
}

const BASE_URL = 'https://young-peak-13473.herokuapp.com/https://jobs.github.com/positions.json'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_REQUEST: 'get-request',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'update_has_next_page'
}



export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL,{
            cancelToken: cancelToken1.token,
            params: { markdown: true, page: page, ...params}
        }).then(
            res => {
                dispatch({type: ACTIONS.GET_REQUEST, payload: {jobs: res.data}})
            }).catch(e => {
                if(axios.isCancel(e)) return
                dispatch({type: ACTIONS.ERROR, payload: {error: e}})
            })

            // const cancelToken2 = axios.CancelToken.source();
            // axios.get(BASE_URL,{
            //     cancelToken: cancelToken2.token,
            //     params: { markdown: true, page: page + 1, ...params}
            // }).then(
            //     res => {
            //         dispatch({type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: {hasNextPage: res.data.length !== 0 }})
            //     }).catch(e => {
            //         if(axios.isCancel(e)) return
            //         dispatch({type: ACTIONS.ERROR, payload: {error: e}})
            //     })

            return () => {
                cancelToken1.cancel();
                //cancelToken2.cancel();
            }

    }, [params, page])

    return state
}