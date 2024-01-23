import { useState } from 'react'

export default function useTableForm() {
  const [show, setShow] = useState<'table' | 'form'>('table')

  const showTable = () => setShow('table')
  const showForm = () => setShow('form')

  return {
    isVisibleForm: show === 'form',
    isVisibleTable: show === 'table',
    showForm,
    showTable,
  }
}
