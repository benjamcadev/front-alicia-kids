import styles from '../styles/login.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/img/alicia-kids-logo.png'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import { useState, useEffect } from 'react'

// Alertas
import swal from 'sweetalert'

export default function Login() {

    const [loggedIn, setLoggedIn] = useState(false)

    const [credenciales, setCredenciales] = useState({
        correo_usuario: '',
        pass_usuario: ''
    })

    const { publicRuntimeConfig } = getConfig()
    const { HOST } = publicRuntimeConfig

    const router = useRouter()

    useEffect(() => {
       
        if (loggedIn) {
            router.push("/dashboard")
            return
        }

        router.push("/login")
    }, [loggedIn])


    const handleChange = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch(`${HOST}/usuarios/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credenciales)
        })

        if (response.status == 200) {
            swal({
                title: 'Hola !',
                text: 'Iniciando sesión...',
                icon: 'success',
                timer: 3000,
                buttons: false,
            })
            .then(() => {
                setLoggedIn(true)
            })
        }else{
            swal("Ups!", "No encontramos el usuario o la clave esta mal ingresada", "warning");
        }

    }

    return (
        <div>
            <main className="contenedorBody">
                <div className={styles.contenido}>

                    <div className={styles.logoHeader}>
                        <Link href={'/'}>
                            <Image src={logo.src} width={160} height={140} alt='imagen logotipo' />
                        </Link>

                    </div>

                    <h2 className="heading_login">Inicio de Sesión</h2>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <input name='correo_usuario' type='email' placeholder='Ingresa Correo' onChange={handleChange} />
                        <input name='pass_usuario' type='password' placeholder='Ingresa Clave' onChange={handleChange} />
                        <div className={styles.buttonFormulario}>
                            <button type="submit" className="buttonForm">Iniciar Sesión</button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}
