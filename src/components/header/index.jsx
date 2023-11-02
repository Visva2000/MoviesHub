import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';  
import { getPopularMovies, getSearchMovies } from '../../actions/moviesActions';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

 const Header =(props)=> {


  const {setProducts,setApiStatus} = props

 

  const onChangeInput=(e)=>{
    const {value} = e.target;
    if (value) {
      getSearchResults(value)
    }
    else{
      fetchMovies();
    }
  
  }
  const getSearchResults = async (value) => {

    try {
      setApiStatus("loading")
      const { data } = await getSearchMovies(value);
      console.log("promise data", data);
      const movies = (data && data.results) || []

      setProducts(movies);
      setApiStatus("SUCCESS")
    } catch (e) {
      setApiStatus("ERROR")
      console.log(e)
    }



  }
  const fetchMovies = async () => {
  
    try {
      setApiStatus("loading")
      const data = await getPopularMovies();
      console.log("promise data", data);
      const movies = (data && data.results) || []

      setProducts(movies);
      setApiStatus("SUCCESS")
    } catch (e) {
      setApiStatus("ERROR")
      console.log(e)
    }



  }
  useEffect(() => {
    fetchMovies();


  }, []);
  return (
    <Box sx={{ flexGrow: 1, }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography 
           
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
             color={'orange'}
          >
            Movies HUB
            {/* <Box 
            fontWeight={'bold'} 
            color={'black'} 
            backgroundColor={'orange'}  
            padding={0.5} 
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-block' } }}
            >
              HUB
            </Box> */}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search'}}
              onChange={onChangeInput}
              
            />
          </Search>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
export default Header