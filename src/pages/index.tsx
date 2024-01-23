import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import useClient from '@/hooks/useClients'

export default function Home() {
  const {
    clients,
    client,
    selectedClient,
    newClient,
    saveClient,
    deletedClient,
    isVisibleTable,
    showTable,
  } = useClient()

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r
               from-blue-500 to-purple-500 text-white"
    >
      <Layout title="Simple register">
        {isVisibleTable ? (
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
          <Form client={client} onSave={saveClient} onCancel={showTable} />
        )}
      </Layout>
    </div>
  )
}
