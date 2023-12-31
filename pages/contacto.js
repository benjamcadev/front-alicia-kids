import Layout from "../components/layout";
import styles from '../styles/contacto.module.css'
import { FiAlertTriangle } from 'react-icons/fi'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Form, Formik, Field, ErrorMessage } from 'formik'

export default function Contacto() {

  const [stateRecaptcha, setStateRecaptcha] = useState(false)
  const captcha = useRef(null)

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log('No es un robot');
      setStateRecaptcha(true)
    }
  }

  const validate = (values) => {
    const errors = {}

    console.log(values);
    values.recaptcha = stateRecaptcha

    if (!values.name) { errors.name = 'Nombre Requerido' }
    if (!values.lastname) { errors.lastname = 'Apellido Requerido' }
    if (!values.email) { errors.email = 'Correo Requerido' }
    if (!values.recaptcha) { errors.recaptcha = 'Captcha Requerido' }
    return errors
  }

  const introContacto = {
    hide: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  }

  return (
    <Layout
      title={'Contacto'}
      description='Contacto, Alicia Kids, Contactanos para celebrar tu cumpleaños o evento'
    >

      <motion.div
       initial='hide'
       whileInView='show'
       exit='hide'
       variants={introContacto}
      >

        <main className="contenedorBody">
          <h2 className="heading">Contacto</h2>

          <div className={styles.contenido}>

            <div>
              <Image src="/img/imagen_contacto.jpg" width={450} height={250} layout="responsive" className={styles.imagenContacto} alt="Imagen contacto" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div>
              <Formik
                initialValues={
                  {
                    name: '',
                    lastname: '',
                    email: '',
                    consulta: '',
                    recaptcha: stateRecaptcha
                  }
                }
                validate={validate}
                onSubmit={values => console.log("Validacion Correcta")}
              >
                {formik =>
                  <Form>

                    <Field name="name" placeholder="Nombre" type="text" />
                    <ErrorMessage name="name" render={msg => <div className={styles.alertRed}>
                      <FiAlertTriangle className={styles.iconRed} />{msg}</div>
                    }
                    />



                    <Field name="lastname" placeholder="Apellido" type="text" />
                    <ErrorMessage name="lastname" render={msg => <div className={styles.alertRed}>
                      <FiAlertTriangle className={styles.iconRed} />{msg}</div>
                    }
                    />

                    <Field name="email" placeholder="Correo" type="email" />
                    <ErrorMessage name="email" render={msg => <div className={styles.alertRed}>
                      <FiAlertTriangle className={styles.iconRed} />{msg}</div>
                    }
                    />

                    <Field as="textarea" name="consulta" placeholder="Escribe aca tu consulta" type="textarea" />

                    <ReCAPTCHA
                      ref={captcha}
                      sitekey="6LeoVgAoAAAAAJ-fi37ZVSpW3LTlgX6d-6SgOBF0"
                      onChange={onChange}
                      onExpired={(value) => {
                        console.log(value);
                      }}
                    />

                    <ErrorMessage name="recaptcha" render={msg => <div className={styles.alertRed}>
                      <FiAlertTriangle className={styles.iconRed} />{msg}</div>
                    }
                    />
                    <button type="submit" className="buttonForm">Enviar</button>
                  </Form>
                }

              </Formik>

            </div>



          </div>
        </main>
      </motion.div>


    </Layout>

  )
}
