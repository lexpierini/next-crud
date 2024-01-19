import Client from '@/core/Client'
import Input from './Input'
import { useState } from 'react'
import Button from './Button'

type FormProps = {
  client: Client
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id && <Input text="Code" readOnly value={id} className="mb-5" />}
      <Input text="Name" value={name} onChange={setName} className="mb-5" />
      <Input text="Age" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2">
          {id ? 'Edit' : 'Save'}
        </Button>
        <Button>Cancel</Button>
      </div>
    </div>
  )
}
