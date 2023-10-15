import { useState } from 'react'
import Layout from "../components/layout";

// Form Wizard
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
// Alertas
import swal from 'sweetalert'
// Fechas
import dayjs from 'dayjs'

import styles from '../styles/reserva.module.css'

//Componentes
import ReservaFechas from '../components/reserva.fechas'
import ReservaJuegos from '../components/reserva.juegos'
import LoadingScreen from '../components/loading-screen'
import Totales from '../components/totales'



export default function Reserva() {

    const [user, setUser] = useState({ userEmail: "", userName: "" })
    const [reserva, setReserva] = useState({ fechaInicio: '', fechaTermino: '', juegos: [], totales: [] })
    const [juegosActive, setJuegosActive] = useState(false)
    const [juegos, setJuegos] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };

    const tabChanged = async ({ prevIndex, nextIndex }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);
       

    };


    // Validacion de la tab
    const checkValidateTab = () => {

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

    // error messages
    const errorMessages = (e) => {
        // you can add alert or console.log or any thing you want

        swal("Ups!", "Algo falta por completar o esta mal escrito!", "warning");
        setUser({ userEmail: "", userName: "" })
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



    return (
        <Layout
            title={'Reserva'}
            description='Reserva, Alicia Kids, Reserva tu hora para celebrar tu cumpleaños o evento'
        >

            <main className="contenedorBody">

                {isLoading ? <LoadingScreen /> : ''}

                { reserva.totales.length > 0 ? <Totales totales={reserva.totales} /> : ''}

                <h2 className="heading">Reserva tu hora</h2>
                <div className={styles.contenido}>
                    <FormWizard
                        stepSize="sm"
                        onComplete={handleComplete}
                        onTabChange={tabChanged}
                        nextButtonTemplate={nextTemplate}
                        backButtonTemplate={backTemplate}
                        color="#c23535"
                    >
                        <FormWizard.TabContent title="Ingresa Datos" >

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
                        <FormWizard.TabContent title="Direccion y Contacto">
                            <h3>Last Tab</h3>
                            <p>Some content for the last tab</p>
                        </FormWizard.TabContent>
                    </FormWizard>
                </div>
            </main>
        </Layout>
    )
}
