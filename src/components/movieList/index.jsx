import {Container, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import ProductCardSkeleton from "../loaders/ProductCardSkeleton";
import noProductsPic from "../../assets/noProducts.svg";
import errorPic from "../../assets/error.svg";
import MoviesCard from "../movieCard";


const MoviesList = (props)=>{
  const {products,apiStatus} = props
  
    const showLoader = apiStatus==="loading";

    const isEmptyArray = Array.isArray(products)&& !products.length;
    const noProducts =apiStatus==="SUCCESS"&&(!products||isEmptyArray)
    const error = apiStatus==="ERROR"
    return( 
        <Container >
            <Stack mt={4} mb={4} gap={4}  flexWrap={"wrap"} direction={"row"}>

            {Array.isArray(products)&& products.map((item)=>(<MoviesCard key={item.id} title={item.original_title} poster_path={item.poster_path} />)) }
            
            {showLoader&&[0,0,0,0].map((_,index)=>(
                <ProductCardSkeleton key={index}/>
            ))}
            {noProducts&&(
                <Box sx={{margin:"0 auto",textAlign:"center"}}>
                    <img height={300} width={"100%"} src={noProductsPic}/>
                    <Typography variant="h5"component={"p"} color="grey">No Movies Available</Typography>
                </Box>
            )}
              {error&&(
                <Box sx={{margin:"0 auto",textAlign:"center"}}>
                    <img height={300} width={"100%"} src={errorPic}/>
                    <Typography variant="h5"component={"p"} color="grey">something went wrong</Typography>
                </Box>  
            )}

            </Stack>
        </Container>
    )
}
export default MoviesList