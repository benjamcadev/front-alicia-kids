import styles from '../styles/cancelar.module.css'

//React Hooks
import { useState, useEffect } from 'react'

//Next hooks
import Link from 'next/link'
import { useRouter } from 'next/router'

// imagenes
import Image from 'next/image'
import logo from '../public/img/alicia-kids-logo.png'

//Search params in url
import { useSearchParams } from 'next/navigation'

//.env
import getConfig from 'next/config'

// Alertas
import swal from 'sweetalert'

export default function Cancelar() {

    const [cancel, setCancel] = useState(false)

    const searchParams = useSearchParams()
    const idReserva = searchParams.get('id')
    const emailReserva = searchParams.get('email')

    const { publicRuntimeConfig } = getConfig()
    const { HOST } = publicRuntimeConfig

    const router = useRouter()

    useEffect(() => {
       
        if (cancel) {
            router.push("/")
            return
        }else{

        }

    }, [cancel])


    const handleButtonSi = async() => {

        if (idReserva && emailReserva) {
            
            const response = await fetch(`${HOST}/reservas/delete/${idReserva}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numero_reserva: idReserva,
                    email_reserva: emailReserva
                })
            })

            if (response.status == 200) {
                swal({
                    title: '🥺',
                    text: 'La reserva de ha cancelado con exito, esperamos volverte a ver pronto !',
                    icon: 'success',
                    timer: 3000,
                    buttons: false,
                })
                .then(() => {
                    setCancel(true)
                })
            }else{
                swal("Ups!", "No encontramos la reserva", "warning");
            }

        }else{
            swal("Ups!", "Faltan datos", "warning");
        }

       
    }

    const handleButtonNo = () => {
         swal("😊", "Que bueno, nos vemos el dia de la fiesta !!!  🎉 🎉 🎉", "success");
    }


    return(
        <div>
        <main className="contenedorBody">
            <div className={styles.contenido}>

                <div className={styles.logoHeader}>
                    <Link href={'/'}>
                        <Image src={logo.src} width={160} height={140} alt='imagen logotipo' />
                    </Link>

                </div>

                <h2 className="heading_login">¿Seguro desea cancelar la reserva {idReserva} ?</h2>

                    <div className={styles.buttonFormulario}>
                        <button type="button" onClick={handleButtonSi} className="buttonForm">SI</button>
                        <button type="button" onClick={handleButtonNo} className="buttonForm">NO</button>
                    </div>

               
            </div>
        </main>
    </div>
    )
}