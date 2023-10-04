// date time picker
import React from 'react'
const customParseFormat = require('dayjs/plugin/customParseFormat')
import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs'



export default function ReservaFechas({user, reserva, setReserva}) {
    dayjs.extend(customParseFormat)
    return (
        <>
            <h3>Hola {user.userName}, Ahora selecciona una fecha</h3>
            <p>Recuerda que puedes reservar 5 horas como maximo los juegos, si quieres mas horas debes reservar el dia completo</p>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText} >

                <p><small>¿Cuando empieza el cumpleaños ?</small></p>

                <MobileDateTimePicker
                    value={dayjs(reserva.fechaInicio)}
                    onChange={(newValue) => setReserva({ ...reserva, fechaInicio: dayjs(newValue).format('YYYY-MM-DD HH:mm:ss') })}
                    format="YYYY-MM-DD HH:mm:ss"
                    ampm={false}

                />

                <p><small>¿Cuando termina el cumpleaños ?</small></p>

                <MobileDateTimePicker
                    value={dayjs(reserva.fechaTermino)}
                    onChange={(newValue) => setReserva({ ...reserva, fechaTermino: dayjs(newValue).format('YYYY-MM-DD HH:mm:ss') })}
                    format="YYYY-MM-DD HH:mm:ss"
                    ampm={false}
                />
            </LocalizationProvider>
        </>

    )
}
