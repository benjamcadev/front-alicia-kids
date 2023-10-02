import { useState } from 'react'
import Layout from "../components/layout";
import FormWizard from "react-form-wizard-component";
import swal from 'sweetalert'
import 'react-form-wizard-component/dist/style.css';

import styles from '../styles/reserva.module.css'

export default function Reserva() {

    const [user, setUser] = useState({ userEmail: "", userName: "" });
   


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

        swal("Good job!", "You clicked the button!", "warning");
        setUser({ userEmail: "", userName: "" })
    };


    return (
        <Layout
            title={'Reserva'}
            description='Reserva, Alicia Kids, Reserva tu hora para celebrar tu cumpleaños o evento'
        >

            <main className="contenedorBody">
                <h2 className="heading">Reserva tu hora</h2>
                <div className={styles.contenido}>
                    <FormWizard
                        onComplete={handleComplete}
                        onTabChange={tabChanged}
                    >
                        <FormWizard.TabContent title="Personal details" >

                            <h3>Hola ! </h3>
                            <p>Ingresa tus datos</p>
                            <input
                                type="text"
                                value={user.userName}
                                name="name"
                                placeholder="Ingresa tu nombre"
                                onChange={(e) => setUser({...user, userName: e.target.value })}
                            />
                            <input
                                type="email"
                                value={user.userEmail}
                                name="email"
                                placeholder="Ingresa tu correo"
                                onChange={(e) => setUser({...user, userEmail: e.target.value })}
                            />

                        </FormWizard.TabContent>
                        <FormWizard.TabContent
                            title="Additional Info"
                            isValid={checkValidateTab()}
                            validationError={errorMessages}
                        >
                            <h3>Second Tab</h3>
                            <p>Some content for the second tab</p>
                        </FormWizard.TabContent>
                        <FormWizard.TabContent title="Last step">
                            <h3>Last Tab</h3>
                            <p>Some content for the last tab</p>
                        </FormWizard.TabContent>
                    </FormWizard>
                </div>
            </main>
        </Layout>
    )
}
