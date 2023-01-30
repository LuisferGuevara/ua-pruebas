import { Select } from '@chakra-ui/react'
import { useState } from 'react';

const AddressOptions = () => {
  const options = [
    { value: 'calle', label: 'Calle' },
    { value: 'avenida', label: 'Avenida' },
    { value: 'camino', label: 'Camino' },
    { value: 'plaza', label: 'Plaza' },
    { value: 'urbanizacion', label: 'Urbanización' }
  ]

  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <Select
      value={selectedOption}
      onChange={e => setSelectedOption(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default AddressOptions;