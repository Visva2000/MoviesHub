import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Skeleton } from '@mui/material';

const ProductCardSkeleton=()=> {
  return (
    <Card sx={{ width:200,backgroundColor:"#272727" }} >
     
       <Skeleton variant="rectangular" height={200}  animation="wave"/>
        <CardContent>
        <Skeleton variant="text" animation="wave"  height={20} width="90%" sx={{mb:2}}  />  
        </CardContent>
    </Card>
  );
}

export default ProductCardSkeleton
