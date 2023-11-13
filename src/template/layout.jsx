import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material';


function Layout() {
  return (
        <Box sx={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={220}  >NAVEGATION</Grid>
                <Grid item flex={1} spacing={8}>
                    <Grid xs={12}  >HEADER</Grid>
                    <Grid xs={12}  >USER INPUT</Grid>
                    <Grid xs={12}  >THREAD</Grid>
                </Grid> 
                <Grid item flex={1} >
                    <Grid xs={12}  >SEARCH</Grid>
                    <Grid xs={12}  >CONTAINER 1</Grid>
                    <Grid xs={12}  >CONTAINER 2</Grid>
                    <Grid xs={12}  >CONTAINER 3</Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;
