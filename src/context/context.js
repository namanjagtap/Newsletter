//context creation
//provider
//consumer-> its a lenght step so it is eliminated by useContext hook

import React, { useContext, useReducer, useEffect } from "react"
import reducer from "../hook/reducer"

let API = "http://hn.algolia.com/api/v1/search?";

const initialValue = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);
    
    const fetchApiData = async (url) => {
        dispatch({type: "SET_LOADING"})
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                },
            })
        }catch(error){
            console.log(error);
        }
    };

    const removePost = (id) => {
        dispatch({type: "REMOVE_POST", payload: id})
    }

    const searchPost = (searchQuery) => {
        dispatch({type: "SEARCH_QUERY", payload: searchQuery})
    }

    const getPreviousPage = (currPage) => {
        dispatch({type: "PREVIOUS_PAGE", payload: currPage});
    }
    
    const getNextPage = (currPage) => {
        dispatch({type: "NEXT_PAGE", payload: currPage});
    }
    
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.page, state.query])

    console.log(state);
    
    return(
        <AppContext.Provider value={{...state, removePost, searchPost, getPreviousPage, getNextPage}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};