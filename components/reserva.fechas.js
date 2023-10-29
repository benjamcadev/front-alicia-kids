import React from 'react'
const customParseFormat = require('dayjs/plugin/customParseFormat')
import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs'
import swal from 'sweetalert'

//Utils o helpers
import getJuegosReserva from '../utils/getJuegosReserva'
import getReservaDate from '../utils/getReservaDate';

//styles
import styles from '../styles/reserva.module.css'



export default function ReservaFechas({ user, reserva, setReserva, setJuegosActive, setJuegos, setIsLoading }) {
    dayjs.extend(customParseFormat)

    const handleChangeDateStart = (newValue) => {
        setReserva({ ...reserva, fechaInicio: dayjs(newValue).format('YYYY-MM-DD HH:mm:ss') })
    }
    const handleChangeDateEnd = async (newValue) => {
        setReserva({ ...reserva, fechaTermino: dayjs(newValue).format('YYYY-MM-DD HH:mm:ss') })

        if (reserva.fechaInicio !== '' && reserva.fechaTermino !== '') {
            //Validando diferencia de horas max 5 horas y minimo 3
            const date1 = dayjs(reserva.fechaInicio);
            const date2 = dayjs(dayjs(newValue).format('YYYY-MM-DD HH:mm:ss'));
            let hours = date2.diff(date1, 'hours');

            if (hours >= 3 && hours <= 5) {

                // Fetch data de todos los juegos
                setIsLoading(true)
                const juegosResponse = await getJuegosReserva()

                // Fetch de las reservas para ese dia escogido
                const reservasResponse = await getReservaDate(reserva.fechaInicio)

                // del juegosResponse debo eliminar por los id los juegos ya reservados
                const juegosDisponibles = reservasResponse.map((reserva, index) => {

                   return juegosResponse.map((juego, index) => {
                        if (reserva.fk_juego == juego.id_juego) {
                        juegosResponse.splice(index, 1)    
                        
                        }
                
                    })
                    
                })

                if (juegosResponse.length > 0) {
                    setJuegos(juegosResponse)
                    setJuegosActive(true)
                    setIsLoading(false)
                } else {
                    setJuegosActive(false)
                    setIsLoading(false)
                }
            } else {
                swal("Recuerda", "El minimo son 3 horas y el maximo 5 horas!");
                setJuegosActive(false)
            }
        }
    }

    return (
        <>
            <h3>Hola {user.userName} 👋, Ahora selecciona una fecha</h3>
            <p className={styles.warning}>Recuerda que puedes reservar 5 horas como maximo los juegos, si quieres mas horas debes reservar el dia completo</p>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText} >

                <p><small>¿Cuando empieza el cumpleaños ?</small></p>

                <MobileDateTimePicker
                    value={dayjs(reserva.fechaInicio)}
                    onChange={(newValue) => handleChangeDateStart(newValue)}
                    format="YYYY-MM-DD HH:mm:ss"
                    ampm={false}

                />

                <p><small>¿Cuando termina el cumpleaños ?</small></p>

                <MobileDateTimePicker
                    value={dayjs(reserva.fechaTermino)}
                    onChange={(newValue) => handleChangeDateEnd(newValue)}
                    format="YYYY-MM-DD HH:mm:ss"
                    ampm={false}
                />

            </LocalizationProvider>
        </>

    )
}
