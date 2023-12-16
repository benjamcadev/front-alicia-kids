import styles from '../styles/login.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/img/alicia-kids-logo.png'
import { useState } from 'react'

export default function Login() {

    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
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

                    <h2 className="heading">Inicio de Sesión</h2>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <input name='email' type='email' placeholder='Ingresa Correo' onChange={handleChange} />
                        <input name='password' type='password' placeholder='Ingresa Clave' onChange={handleChange} />
                        <div className={styles.buttonFormulario}>
                            <button type="submit" className="buttonForm">Iniciar Sesión</button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}
