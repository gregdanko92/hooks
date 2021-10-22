import { render } from '@testing-library/react'
import { useEffect, useState } from 'react'

function Giphy(){
    const [searchTerm, setSearchTerm] = useState('')
    const [gifData, setGifData] = useState([])////this was set to an object, which made it unMAPpable
    const [gifJSX, setGifJSX] = useState('')

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9OJLbKFA9CYHBo4rBITrQ9z7DVFMCjO0&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`

    const getSearchTerm = (e) =>{
        setSearchTerm(e.target.value)
        console.log(url)
    }

    const getJSX = () => {
        let gifJSX = gifData.gifData.map((gif,idx)=>{
            return(
                <div key={idx}>
                    <p>{gif.id}</p>
                    <iframe className='resultimg' src= {'https://giphy.com/embed/' + gif.id} alt="" frameBorder="0" />
                </div>
            )
        })
        setGifJSX(gifJSX)
    }

    const fetchGifs = () => {
        fetch(url)
              .then((response)=> response.json())
              .then(json =>{
                  setGifData({gifData: json.data})
                  console.log('set the data')
                  console.log(gifData)
                  getJSX()
              })
              .catch((err)=>{
                  console.log(err)
              })
    }

    // if(gifData){
    //     gifData.map(x =>{
    //         return(
    //             <div>
    //                 {x.id}
    //             </div>
    //         )
    //     })
    //     console.log('yenos')
    // }

    useEffect(function(){
        if (gifData){
            fetchGifs()
        }
        console.log(gifData) 
    }, [searchTerm])





    // const getGifJSX = (gifData) =>{
    //     if (!gifData) {
    //         console.log('hello fromt he rendering condition')
    //         let gifData = gifData.gifData
    //         // let resultsJSX = gifData.map((gif, idx)=>{
    //         //     return(
    //         //          <div key={idx}>
    //         //              <p>{gif.slug}</p>
    //         //          </div>
    //         //     )
                
    //         //  })
    //         //  console.log(resultsJSX)
    //         //  return resultsJSX
    //         }

    // console.log('HERE' + gifData)

    //  }
    
     
    return(
        <div>
            <h1>Giphy Search</h1>
            <form action=""
            >
                <input 
                type="text" 
                value={searchTerm}
                onChange={ getSearchTerm }
                />
            </form>

            <div className="gif-container">
                {/* <img src={gifData} alt="" /> */}
g                <div>{gifJSX}</div>

                <div>

                </div>
            </div>

             
        </div>
    )
}

export default Giphy