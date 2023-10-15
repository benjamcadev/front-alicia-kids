import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from '../styles/loading-screen.module.css'

export default function LoadingScreen() {
  return (
    <div className={styles.body}>
      <div className={styles.contenedor}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress
            size={80}
            color='inherit' />
        </Box>
        <p className={styles.text}>Cargando</p>
      </div>

    </div>

  )
}
