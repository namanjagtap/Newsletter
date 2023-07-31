const reducer = (state, action) => {
    switch(action.type){
        case "SET_LOADING":
                    return{
                        ...state,
                        isLoading: true,
                    };
        case "GET_STORIES":
                    return{
                        ...state,
                        isLoading: false,
                        hits: action.payload.hits,
                        nbPages: action.payload.nbPages,
                    };
        case "REMOVE_POST":
                    return{
                        ...state,
                        hits: state.hits.filter((currPost) => currPost.objectID !== action.payload),
                    };
        case "SEARCH_QUERY":
                    return{
                        ...state,
                        query: action.payload,
                    };
        case "PREVIOUS_PAGE":
                    return{
                        ...state,
                        page: state.page>0 ? state.page-1 : 0,
                    };
        case "NEXT_PAGE":
            return{
                ...state,
                page: state.page < (state.nbPages-1) ? state.page+1 : 0,
            }
        default:
    }
    return state;
}
export default reducer;