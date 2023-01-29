import { Select } from '@chakra-ui/react'
import { useState } from 'react';

const ProvincesOptions = () => { 
    const provinces = [
        { value:"A Coruña", label:"A Coruña"},
        { value:"Álava", label:"Álava" },
        { value:"Albacete", label:"Albacete" },
        { value:"Alicante", label:"Alicante" },
        { value:"Almería", label:"Almería"},
        { value:"Asturias", label:"Asturias"},
        { value:"Ávila", label:"Ávila"},
        { value:"Badajoz", label:"Badajoz"},
        { value:"Barcelona", label:"Barcelona"},
        { value:"Burgos", label:"Burgos"},
        { value:"Cáceres", label:"Cáceres"},
        { value:"Cádiz", label:"Cádiz"},
        { value:"Cantabria", label:"Cantabria"},
        { value:"Castellón", label:"Castellón"},
        { value:"Ciudad Real", label:"Ciudad Real"},
        { value:"Córdoba", label:"Córdoba"},
        { value:"Cuenca", label:"Cuenca"},
        { value:"Gerona", label:"Gerona"},
        { value:"Granada", label:"Granada"},
        { value:"Guadalajara", label:"Guadalajara"},
        { value:"Guipúzcoa", label:"Guipúzcoa"},
        { value:"Huelva", label:"Huelva"},
        { value:"Huesca", label:"Huesca"},
        { value:"Islas Balears", label:"Islas Balears"},
        { value:"Jaén", label:"Jaén"},
        { value:"La Rioja", label:"La Rioja"},
        { value:"Las Palmas", label:"Las Palmas"},
        { value:"León", label:"León"},
        { value:"Lérida", label:"Lérida"},
        { value:"Lugo", label:"Lugo"},
        { value:"Madrid", label:"Madrid"},
        { value:"Málaga", label:"Málaga"},
        { value:"Murcia", label:"Murcia"},
        { value:"Navarra", label:"Navarra"},
        { value:"Ourense", label:"Ourense"},
        { value:"Palencia", label:"Palencia"},
        { value:"Pontevedra", label:"Pontevedra"},
        { value:"Salamanca", label:"Salamanca"},
        { value:"Santa Cruz de Tenerife", label:"Santa Cruz de Tenerife"},
        { value:"Segovia", label:"Segovia"},
        { value:"Sevilla", label:"Sevilla"},
        { value:"Soria", label:"Soria"},
        { value:"Tarragona", label:"Tarragona"},
        { value:"Teruel", label:"Teruel"},
        { value:"Toledo", label:"Toledo"},
        { value:"Valencia", label:"Valencia"},
        { value:"Valladolid", label:"Valladolid"},
        { value:"Vizcaya", label:"Vizcaya"},
        { value:"Zamora", label:"Zamora"},
        { value:"Zaragoza", label:"Zaragoza"}
      ];
      

  const [selectedOption, setSelectedOption] = useState(provinces[0])

  return (
    <Select
      value={selectedOption}
      onChange={e => setSelectedOption(e.target.value)}
    >
      {provinces.map(province => (
        <option key={province.value} value={province.value}>
          {province.label}
        </option>
      ))}
    </Select>
  )
}

export default ProvincesOptions;