import { useState } from 'react'
import Layout from "../components/layout";
import FormWizard from "react-form-wizard-component";
import swal from 'sweetalert'
import 'react-form-wizard-component/dist/style.css';

// date time picker
import dayjs from 'dayjs'
import 'dayjs/locale/de';
import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';


import styles from '../styles/reserva.module.css'

export default function Reserva() {

    const [user, setUser] = useState({ userEmail: "bmcortes@agroplastic.cl", userName: "Benjamin" });



    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };

    const tabChanged = ({
        prevIndex,
        nextIndex,
    }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);
    };

    // Validacion de la tab
    const checkValidateTab = () => {

        console.log(user);


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
                            <h3>Hola {user.userName}, Ahora selecciona una fecha</h3>
                            <LocalizationProvider 
                            dateAdapter={AdapterDayjs}
                            localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText} >
                                <MobileDateTimePicker
                                    defaultValue={dayjs()}
                                    format="YYYY-MM-DD HH:mm:ss"
                                    slotProps={{ textField: { size: 'normal' } }}
                                />
                            </LocalizationProvider>
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
