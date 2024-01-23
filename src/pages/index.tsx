import ClientCollection from '@/backend/db/ClientCollection'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'
import ClientRepository from '@/core/ClientRepository'
import { useEffect, useState } from 'react'

export default function Home() {
  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [show, setShow] = useState<'table' | 'form'>('table')

  const getAll = () => {
    repo.getAll().then((clients) => {
      setClients(clients)
      setShow('table')
    })
  }

  const selectedClient = (client: Client) => {
    setClient(client)
    setShow('form')
  }

  const newClient = () => {
    setClient(Client.empty())
    setShow('form')
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

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r
               from-blue-500 to-purple-500 text-white"
    >
      <Layout title="Simple register">
        {show === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" onClick={newClient} className="mb-4">
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            onSave={saveClient}
            onCancel={() => setShow('table')}
          />
        )}
      </Layout>
    </div>
  )
}
