//mui components
import Fab from '@mui/material/Fab'
//mui icons 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
//styles
import '../../styles/components/buttons/_addBackToTop.scss'
//theme
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme ({
palette: {
        button: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF', 
        },
        secondary: {
            main: '#D44651',
        },
        },
        appbar: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF'
        }
        }
    },
});

function addBackToTop() {
    return (
     <ThemeProvider theme={theme}>
        <>
            <Fab aria-label='add' sx={{bgcolor: 'button.secondary.main', color: 'button.primary.contrastText'}}>
                <AddOutlinedIcon />
            </Fab> 
            <Fab variant='extended' sx={{ height: '55.590px', bgcolor: 'button.secondary.main', color: 'button.primary.contrastText'}}>
                <VerticalAlignTopOutlinedIcon sx={{ mr: 2 }} />
                Back to top
            </Fab>
        </>
     </ThemeProvider>
    )
   
}

export default addBackToTop