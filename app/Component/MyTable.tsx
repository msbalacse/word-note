"use client";
import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

type Person = {
  name: string;
  tamil: string;
};

export default function MyTable() {
  const [data, setData] = React.useState<Person[]>([
    { name: "John", tamil: "Doe" },
  ]);

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.tamil, {
      id: "tamil",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Tamil</span>,
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "today"));
      const documents = querySnapshot.docs.map((doc) => doc.data());

      // Make sure to map the documents into the expected structure for the data state
      const people: Person[] = documents.map((item) => ({
        name: item.name,
        tamil: item.tamil,
      }));

      setData(people); // Update the data state
    };

    fetchData();
  }, []);

  // Log data in a separate effect to see the updated value after state change
  React.useEffect(() => {
    console.log(data);
  }, [data]); // This will log every time the 'data' state changes

  return (
    <div className='p-2'>
      <table className='text-black bg-white'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className='border border-gray-400 border-solid'
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  className='border border-gray-400 border-solid bg-yellow-300 p-2'
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      {/* <div className='h-4' />
      <button onClick={() => rerender()} className='border p-2'>
        Rerender
      </button> */}
    </div>
  );
}
