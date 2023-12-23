import React from 'react'

export default function dashboard() {

  const getProfile = async (data) => {
    const response = await fetch('http://localhost:3900/usuarios/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    console.log(response)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => getProfile({"correo_usuario": "beenjaminns@as.cl","pass_usuario": "123456"})}>Get Perfil</button>
    </div>
  )
}
