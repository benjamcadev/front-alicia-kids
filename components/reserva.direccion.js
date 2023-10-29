import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import getConfig from 'next/config'

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

            } catch (error) {
                console.error(`Error fetching search ${e.target.value}`);
            }
        } else {
            setSearchAddress([])
        }



    }

    return (
        <>
            <h3>Ahora ingresa la direccion del cumpleaños</h3>
            <Autocomplete
                freeSolo
                id="combo-box-address"
                options={searchAddress}
                renderInput={(params) =>
                    <TextField
                        className='inputDireccion'
                        {...params}
                       placeholder='Ingresa tu dirección'
                        onChange={(e) => handleChangePlace(e)}
                    />}
            />

            <h3>Y danos un numero para contactarte </h3>

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
