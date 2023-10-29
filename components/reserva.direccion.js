import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import getConfig from 'next/config'

export default function ReservaDireccion() {
    const { publicRuntimeConfig } = getConfig()
    const { BING_MAP_APIKEY } = publicRuntimeConfig

    const [searchAddress, setSearchAddress] = useState([])

    const handleChangePlace = async (e) => {
        //setSearchAddress(e.target.value)
        const direccionURL = encodeURIComponent(e.target.value)

        if (e.target.value != '') {
            try {
                const response = await fetch(
                    `http://dev.virtualearth.net/REST/v1/Autosuggest?query=${direccionURL}&key=${BING_MAP_APIKEY}`
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
        }else{
            setSearchAddress([])
        }



    }

    const direcciones = []

    return (
        <>
            <Autocomplete
                freeSolo
                id="combo-box-address"
                options={searchAddress}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Ingrese Dirección"
                        onChange={(e) => handleChangePlace(e)}
                    />}
            />
        </>

    )
}
