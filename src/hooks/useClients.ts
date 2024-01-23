import { useEffect, useState } from 'react'
import Client from '@/core/Client'
import ClientCollection from '@/backend/db/ClientCollection'
import ClientRepository from '@/core/ClientRepository'
import useTableForm from './useTableForm'

export default function useClient() {
  const repo: ClientRepository = new ClientCollection()

  const { isVisibleForm, isVisibleTable, showForm, showTable } = useTableForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const getAll = () => {
    repo.getAll().then((clients) => {
      setClients(clients)
      showTable()
    })
  }

  const selectedClient = (client: Client) => {
    setClient(client)
    showForm()
  }

  const newClient = () => {
    setClient(Client.empty())
    showForm()
  }

  const saveClient = async (client: Client) => {
    await repo.save(client)
    getAll()
  }

  const deletedClient = async (client: Client) => {
    await repo.delete(client)
    getAll()
  }

  useEffect(() => {
    getAll()
  }, [])

  return {
    client,
    clients,
    getAll,
    selectedClient,
    newClient,
    saveClient,
    deletedClient,
    isVisibleForm,
    isVisibleTable,
    showTable,
  }
}
