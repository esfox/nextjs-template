import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export default function () {
  const mockUsers = [
    {
      id: 'asdkfjasfkjdksjfa',
      email: 'foo@foo.com',
      username: 'foo',
    },
    {
      id: 'asdkfjasfkjdksjfa',
      email: 'foo@foo.com',
      username: 'foo',
    },
    {
      id: 'asdkfjasfkjdksjfa',
      email: 'foo@foo.com',
      username: 'foo',
    },
    {
      id: 'asdkfjasfkjdksjfa',
      email: 'foo@foo.com',
      username: 'foo',
    },
  ];

  return (
    <DataTable value={mockUsers} stripedRows>
      <Column field="id" header="ID"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="username" header="Username"></Column>
    </DataTable>
  );
}
