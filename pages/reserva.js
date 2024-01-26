import { useState, useCallback } from 'react'
import Layout from "../components/layout";

// Form Wizard
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
// Alertas
import swal from 'sweetalert'

// Fechas
import dayjs from 'dayjs'

// Confetti
import ConfettiExplosion from 'react-confetti-explosion'

import styles from '../styles/reserva.module.css'

//Componentes
import ReservaFechas from '../components/reserva.fechas'
import ReservaJuegos from '../components/reserva.juegos'
import ReservaDireccion from '../components/reserva.direccion'
import LoadingScreen from '../components/loading-screen'
import Totales from '../components/totales'




export default function Reserva() {

    const [user, setUser] = useState({ userEmail: "", userName: "" })
    const [reserva, setReserva] = useState({ fechaInicio: '', fechaTermino: '', juegos: [], totales: [] })
    const [juegosActive, setJuegosActive] = useState(false)
    const [juegos, setJuegos] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [contacto, setContacto] = useState({ direccion: '', telefono: '' })
    const [isExploding, setIsExploding] = useState(false);




    const handleComplete = async () => {

        if (contacto.direccion === "" || contacto.telefono === "") {
            console.log('falta completar direccion y telefono')
            swal("Ups!", "Algo falta por completar o esta mal escrito!", "warning");
        } else {

            const request = {
                cliente: {
                    nombre_cliente: user.userName,
                    correo_cliente: user.userEmail,
                    telefono_cliente: contacto.telefono
                }
            }

            //Recorrer con ciclo con map reservas
            const arrayReservas = reserva.juegos.map((juego) => {
                return {
                    fecha_inicio_reserva: reserva.fechaInicio,
                    fecha_termino_reserva: reserva.fechaTermino,
                    total_reserva: reserva.totales.reduce((a, b) => a + b, 0),
                    estado_reserva: true,
                    direccion_reserva: contacto.direccion,
                    fk_juego: juego
                }
            })

            //Agregando reservas al request
            const reservas = { ...request, reservas: arrayReservas }

            setIsLoading(true)

            const response = await fetch('https://api-alicia-kids.onrender.com/reservas/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservas)
            });
            const content = await response.json();

            if (content.status === 'success') {

                setIsLoading(false)
                setIsExploding(true)

                swal({
                    title: "Listo !",
                    text: `Reserva realizada con exito, tu numero de reserva es: ${content.reserva.numero_reserva}, hemos enviado un correo con los detalles de la reserva a ${content.reserva.cliente.correo}. Nos vemos pronto ! 👋🎉`,
                    icon: "success",
                    button: "Ok",
                }).then((button) => {
                    if (button) {
                        window.location.href = '/';
                    }
                });
            } else {

                setIsLoading(false)

                swal({
                    title: "Algo salio mal !",
                    text: `Detalles: ${content.message}`,
                    icon: "error",
                    button: "Ok",
                });

            }
        }
    }

    const tabChanged = async ({ prevIndex, nextIndex }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);

    };


    // Validacion de la tab
    const checkValidateTab = () => {

        console.log("Validando tab ")

        if (user.userEmail === "" || user.userName === "") {
            return false;
        } else {
            const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
            if (testEmail.test(user.userEmail)) {
                // this is a valid email address
                return true;
            }
            else {
                // invalid email, maybe show an error to the user.
                return false;
            }
        }
    };

    //Validando tab 2
    const checkValidateTab2 = () => {

        if (reserva.fechaInicio == '' || reserva.fechaTermino == '') {
            return false;
        } else {

            if (reserva.totales !== 'undefined' && reserva.totales.length <= 0) {
                return false;
            } else {
                return true;
            }
        }

    }

    // error messages
    const errorMessages = () => {
        swal("Ups!", "Algo falta por completar o esta mal escrito!", "warning");
        setUser({ userEmail: "", userName: "" })
    };
    const errorMessages2 = () => {
        if (reserva.fechaInicio == '' || reserva.fechaTermino == '') {
            swal("Ups!", "Algo falta por completar en las fechas!", "warning");
            setReserva({ ...reserva, fechaInicio: '', fechaTermino: '' })
        } else {
            if (reserva.juegos.length <= 0 || reserva.totales.length <= 0) {
                swal("Ups!", "Debes seleccionar algun juego!", "warning");
                setReserva({ ...reserva, juegos: [], totales: [] })
            }
        }



    };

    const nextTemplate = (handleNext) => {
        return (
            <button className={styles.contenidoButtons + ' ' + styles.buttonRight} onClick={handleNext}>
                Siguiente
            </button>
        )
    }

    const backTemplate = (handlePrevious) => {
        return (
            <button className={styles.contenidoButtons + ' ' + styles.buttonLeft} onClick={handlePrevious}>
                Atras
            </button>
        )
    }

    const finishTemplate = (handleFinish) => {
        return (
            <button className={styles.contenidoButtons + ' ' + styles.buttonRight} onClick={handleComplete}>
                Listo !
            </button>
        )
    }

    const ConfettiProps = {
        force: 0.8,
        duration: 3000,
        zIndex: 1000,
        particleCount: 250,
        width: 2600,
        colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
      };


    return (
        <Layout
            title={'Reserva'}
            description='Reserva, Alicia Kids, Reserva tu hora para celebrar tu cumpleaños o evento'
        >
             

             {isExploding && <ConfettiExplosion {...ConfettiProps}></ConfettiExplosion> }
            <main className="contenedorBody">

           

                {isLoading ? <LoadingScreen /> : ''}

                {reserva.totales.length > 0 ? <Totales totales={reserva.totales} /> : ''}

                <h2 className="heading">Reserva tu hora</h2>
                <div className={styles.contenido}>
                    <FormWizard
                        stepSize="sm"
                        onComplete={handleComplete}
                        //onTabChange={tabChanged}
                        nextButtonTemplate={nextTemplate}
                        backButtonTemplate={backTemplate}
                        finishButtonTemplate={finishTemplate}
                        color="#c23535"
                    >
                        <FormWizard.TabContent
                            title="Ingresa Datos"

                        >

                            <h3>Hola ! 👋 Ingresa tus datos </h3>

                            <input
                                type="text"
                                value={user.userName}
                                name="name"
                                placeholder="Ingresa tu nombre"
                                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            />
                            <input
                                type="email"
                                value={user.userEmail}
                                name="email"
                                placeholder="Ingresa tu correo"
                                onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
                            />

                        </FormWizard.TabContent>
                        <FormWizard.TabContent
                            title="Selecciona Fecha"
                            isValid={checkValidateTab()}
                            validationError={errorMessages}

                        >
                            <ReservaFechas
                                user={user}
                                reserva={reserva}
                                setReserva={setReserva}
                                setJuegosActive={setJuegosActive}
                                setJuegos={setJuegos}
                                setIsLoading={setIsLoading}
                            />

                            {juegosActive ? <ReservaJuegos
                                juegos={juegos}
                                setReserva={setReserva}
                                reserva={reserva}
                            /> : ''}

                        </FormWizard.TabContent>
                        <FormWizard.TabContent
                            title="Direccion y Contacto"
                            isValid={checkValidateTab2()}
                            validationError={errorMessages2}
                        >
                            <ReservaDireccion
                                contacto={contacto}
                                setContacto={setContacto}
                            />

                        </FormWizard.TabContent>
                    </FormWizard>
                </div>
            </main>
        </Layout>
    )
}
