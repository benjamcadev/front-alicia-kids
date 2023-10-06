

export default async function getJuegosReserva() {
    const respuesta = await fetch('https://api-alicia-kids.onrender.com/juego',{
        mode: "no-cors",
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': 'https://api-alicia-kids.onrender.com/juego'
          },
    }
   
    )
   
    if (!respuesta.ok) {
      // This will activate the closest `error.js` Error Boundary
      return respuesta.json()
      throw new Error('Failed to fetch data')
     
    }
    const { juegos } = await respuesta.json()
    return  juegos
  }