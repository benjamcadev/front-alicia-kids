
import dayjs from 'dayjs'

export default async function getReservaDate(fechaInicio){

    const fecha = dayjs(fechaInicio).format('YYYY-MM-DD')

    const respuesta = await fetch('https://api-alicia-kids.onrender.com/reservas',{
        method: "POST",
        'headers': {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "date": fecha
          })
    })

    if (!respuesta.ok) {
        throw new Error('Failed to fetch data')
      }


    const response = await respuesta.json()
    return response
}