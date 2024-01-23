import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'
import { useState } from 'react'

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [show, setShow] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4'),
  ]

  const selectedClient = (client: Client) => {
    setClient(client)
    setShow('form')
  }

  const newClient = () => {
    setClient(Client.empty())
    setShow('form')
  }

  const saveClient = (client: Client) => {
    setShow('table')
  }

  const deletedClient = (client: Client) => {}

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
