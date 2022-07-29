import loader from '../../../asserts/images/kakashi-loader.gif'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

let Preloader = (props) => {
  return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
  )
}

export default Preloader;