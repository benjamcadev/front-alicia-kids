import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import getConfig from 'next/config'
import { createTheme, ThemeProvider } from '@mui/material/styles'

//Styles
import styles from '../styles/reserva.module.css'


export default function ReservaDireccion({ contacto, setContacto }) {
    const { publicRuntimeConfig } = getConfig()
    const { BING_MAP_APIKEY } = publicRuntimeConfig

    const [searchAddress, setSearchAddress] = useState([])

    const handleChangePlace = async (e) => {
        //setSearchAddress(e.target.value)
        const direccionURL = encodeURIComponent(e.target.value)

        if (e.target.value != '') {
            try {
                const response = await fetch(
                    `https://dev.virtualearth.net/REST/v1/Autosuggest?query=${direccionURL}&key=${BING_MAP_APIKEY}`
                )
                const data = await response.json()
                const arrayAddress = data.resourceSets[0].resources[0].value
                const searchedAddress = arrayAddress.map((address) => {
                    return address.address.addressLine + ' ' + address.address.locality + ' ' + address.address.adminDistrict
                })

                setSearchAddress(searchedAddress)
                setContacto({ ...contacto, direccion: e.target.value })

            } catch (error) {
                console.error(`Error fetching search ${e.target.value}`);
            }
        } else {
            setSearchAddress([])
            setContacto({ ...contacto, direccion: '' })
        }
    }

    const theme = createTheme({
        components: {
            MuiInputBase: {
                styleOverrides: {
                    
                
                    root: {
                        
                        fontSize: '1.5rem',
                        color: 'black',
                        background: 'white',
                        border: '1px solid #942a2a',
                        borderRadius: '8px',
                       fontFamily:  'Outfit'
                    }
                }
            }
        }
    })



    return (
        <>
            <h3>Ahora ingresa la direccion del cumpleaños</h3>

            <p className={styles.warning}>Recuerda, solo trabajamos en <b>La Serena y Coquimbo</b></p>

            <Autocomplete

                freeSolo
                id="combo-box-address"
                options={searchAddress}
                renderInput={(params) =>
                    <ThemeProvider theme={theme} >
                        <TextField
                            
                            {...params}
                            placeholder='Ingresa tu dirección'
                            onChange={(e) => handleChangePlace(e)}
                        />
                    </ThemeProvider>


                }
            />

            <h3>Y un numero para contactarte </h3>

            <input
                type="text"
                value={contacto.telefono}
                name="telefono"
                placeholder="Ingresa tu telefono"
                onChange={(e) => setContacto({ ...contacto, telefono: e.target.value })}
            />
        </>

    )
}
