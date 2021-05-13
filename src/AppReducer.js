export default function AppReducer(state, action) {
    switch (action.type) {
        case 'make-request':
            return {
                jobs: [],
                loading: true
            }

        case 'get-request':
            return {
                ...state,
                jobs: action.payload.jobs,
                loading: false
            }

        case 'error':
            return {
                ...state,
                loading: false,
                jobs: [],
                error: action.payload.error
            }

        default:
            return state
    }
}