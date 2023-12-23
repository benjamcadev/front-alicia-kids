import React from 'react'

export default function Dashboard() {

  const getProfile = async () => {
    const response = await fetch('http://localhost:3900/usuarios/verify', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      
    })

    console.log(await response.json())
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => getProfile({"correo_usuario": "beenjaminns@as.cl","pass_usuario": "123456"})}>Get Perfil</button>
    </div>
  )
}
