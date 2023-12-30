import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

export default function Dashboard() {

  const [user, setUser] = useState({
    nombre_user: '',
    correo_user: ''
  })

  const [loggedIn, setLoggedIn] = useState(true)

  const router = useRouter()

  useEffect(() => {
    
    if (!loggedIn) {
      router.push("/login")
      return
    }


  }, [loggedIn])

  const { publicRuntimeConfig } = getConfig()
  const { HOST } = publicRuntimeConfig



  const getProfile = async () => {

    const response = await fetch(`${HOST}/usuarios/verify`, {
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

  const logout = async () => {
    const response = await fetch(`${HOST}/usuarios/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },

    })

    if (response.status == 200) {
      setLoggedIn(false)
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => getProfile({ "correo_usuario": "beenjaminns@as.cl", "pass_usuario": "123456" })}>Get Perfil</button>
      <button onClick={() => logout()}>Cerrar Sesion</button>
    </div>
  )
}
