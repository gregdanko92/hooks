import { useEffect, useState } from "react/cjs/react.development"

export const useFetch = (url) =>{


    const [state, setState] = useState({data:null, loading:true})


    useEffect(()=>{
        setState({data:null, loading:true})
        fetch(url)
        .then(x=>x.text())
        .then(y=>{
            console.log(y)
            setState({data:y, loading:false})
        })
    }, [url])

    return state
}

//http://numbersapi.com/43/trivia