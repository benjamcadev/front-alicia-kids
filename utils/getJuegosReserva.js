

export default async function getJuegosReserva() {
      const respuesta = await fetch('https://api-alicia-kids.onrender.com/juego',{
        method: "GET"
    })
   
    if (!respuesta.ok) {
      throw new Error('Failed to fetch data')
     
    }
    const { juegos } = await respuesta.json()
    return  juegos
  }