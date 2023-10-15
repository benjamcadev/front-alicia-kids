import styles from '../styles/totales.module.css'

export default function Totales({totales}) {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

 const sumTotales = totales.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);

  return (
    <div className={styles.body}>
        <div className={styles.contenedor}>
        <p className={styles.text}>Total: {formatter.format(sumTotales)}</p>
        </div>
    </div>
  )
}
