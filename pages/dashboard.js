import React, { useState } from 'react'

export default function Dashboard() {

  const [user, setUser] = useState({
    nombre_user: '',
    correo_user: ''
  })

  const getProfile = async () => {
    const response = await fetch('http://localhost:3900/usuarios/verify', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      
    })

    const dataUser = await response.json()

    setUser({
      nombre_user: dataUser.nombre_usuario,
      correo_user: dataUser.correo_usuario
  })

   
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => getProfile({"correo_usuario": "beenjaminns@as.cl","pass_usuario": "123456"})}>Get Perfil</button>
    </div>
  )
}
