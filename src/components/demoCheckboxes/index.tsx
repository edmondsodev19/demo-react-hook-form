import { useForm } from 'react-hook-form'

interface Option {
  name: string
  value: string
}

export default function DemoCheckBoxes() {
  const { handleSubmit, getValues, setValue, watch } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const formValues = watch()

  // For checking form selected options values
  console.log('formValues', formValues)

  const checkboxes: Option[] = [
    { name: 'checkbox1', value: '1' },
    { name: 'checkbox2', value: '2' },
    { name: 'checkbox3', value: '3' },
  ]

  const toggleOptionInList = (list: any[], option: any) => {
    const newList = list
    const isExist = list.find((item) => item.name === option.name)
    if (!isExist) {
      newList.push(option)
      return newList
    }
    return newList.filter((item) => item.name !== option.name)
  }

  const handleClick = (option: Option): any => {
    const listValues = getValues('listValues')
    if (!listValues) {
      setValue('listValues', [option])
      return
    }

    setValue('listValues', toggleOptionInList(listValues, option))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {checkboxes &&
        checkboxes.map((checkbox) => (
          <input key={checkbox.name} type='checkbox' onClick={() => handleClick(checkbox)} />
        ))}
    </form>
  )
}
