import Layout from "../components/layout";
import styles from '../styles/contacto.module.css'
import { Form, Formik , Field, ErrorMessage} from 'formik'

export default function Contacto() {

  const validate = (values) => {
    const errors = {}

    if (!values.name) { errors.name = 'Requerido' }
    if (!values.lastname) { errors.lastname = 'Requerido' }
    if (!values.email) { errors.email = 'Requerido' }
    return errors
  }

  return (
    <Layout
      title={'Contacto'}
      description='Contacto, Alicia Kids, Contactanos para celebrar tu cumpleños o evento'
    >

      <main className="contenedorBody">
        <h2 className="heading">Contacto</h2>

        <div className={styles.contenido}>

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <Formik
            initialValues={
              {
                name: '',
                lastname: '',
                email: '',
                consulta: ''
              }
            }
            validate={validate}
            onSubmit={values => console.log(values)}
          >
            {formik =>
              <Form>

                <Field name="name" placeholder="Nombre" type="text"  />
                <ErrorMessage name="name" />

                <Field name="lastname" placeholder="Apellido" type="text"  />
                <ErrorMessage name="lastname" />

                <Field name="email" placeholder="Correo" type="email" />
                <ErrorMessage name="email" />

                <Field as="textarea" name="consulta" placeholder="Escribe aca tu consulta" type="textarea"  />


                <button type="submit" className="buttonForm">Enviar</button>
              </Form>
            }

          </Formik>


        </div>
      </main>

    </Layout>

  )
}
