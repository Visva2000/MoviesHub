import React from "react";
import MoviesList from "../../components/movieList";


const Movies = (props)=>{
    const {products,apiStatus} = props
    
    return(
        <>
        <MoviesList  products={products} apiStatus={apiStatus}/>
       
        </>

    )
}

export default Movies