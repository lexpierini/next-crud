import Client from '@/core/Client'
import { DeleteIcon, EditIcon } from './Icons'

type TableProps = {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient

  const headerRender = () => (
    <tr>
      <th className="text-left p-4">Code</th>
      <th className="text-left p-4">Name</th>
      <th className="text-left p-4">Age</th>
      {showActions && <th className="p-4">Actions</th>}
    </tr>
  )

  const dataRender = () =>
    props.clients?.map((client, i) => (
      <tr
        key={client.id}
        className={i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
      >
        <td className="text-left p-4">{client.id}</td>
        <td className="text-left p-4">{client.name}</td>
        <td className="text-left p-4">{client.age}</td>
        {showActions && actionsRender(client)}
      </tr>
    ))

  const actionsRender = (client: Client) => (
    <td className="flex justify-center">
      {props.selectedClient && (
        <button
          onClick={() => props.selectedClient?.(client)}
          className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
        >
          {EditIcon}
        </button>
      )}
      {props.deletedClient && (
        <button
          onClick={() => props.deletedClient?.(client)}
          className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50"
        >
          {DeleteIcon}
        </button>
      )}
    </td>
  )

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to bg-purple-800">
        {headerRender()}
      </thead>
      <tbody>{dataRender()}</tbody>
    </table>
  )
}
