import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";



const MoviesCard = (props) => {
    
    const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`
    return(
        
        <Card sx={{ width:200, backgroundColor:'#272727' }}>
     
        <CardActionArea>
        
          <CardMedia
            component="img"
            height="240"
            width="200"
            image={image}
            alt={props.title}
          />
    
          <CardContent sx={{backgroundColor:"#272727"}} >
            <Typography sx={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap', textDecoration:'none',color:'white'}}  fontSize={20}  gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    )

  
    };
  
  export default MoviesCard