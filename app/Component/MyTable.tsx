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

// Define the structure of the data to match the fields in the new entry form
type Entry = {
  word: string;
  tamil_meaning: string;
  opposite_word: string;
  opposite_word_tamil_meaning: string;
  part_of_speech: string;
  example_sentence_1: string;
  example_sentence_2: string;
  example_sentence_3: string;
};

export default function MyTable() {
  const [data, setData] = React.useState<Entry[]>([]);

  const columnHelper = createColumnHelper<Entry>();

  // Define the table columns, including new fields
  const columns = [
    columnHelper.accessor("word", {
      cell: (info) => info.getValue(),
      header: () => <span>Word</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("tamil_meaning", {
      cell: (info) => info.getValue(),
      header: () => <span>Tamil Meaning</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("opposite_word", {
      cell: (info) => info.getValue(),
      header: () => <span>Opposite Word</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("opposite_word_tamil_meaning", {
      cell: (info) => info.getValue(),
      header: () => <span>Opposite Tamil Meaning</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("part_of_speech", {
      cell: (info) => info.getValue(),
      header: () => <span>Part of Speech</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("example_sentence_1", {
      cell: (info) => info.getValue(),
      header: () => <span>Example Sentence 1</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("example_sentence_2", {
      cell: (info) => info.getValue(),
      header: () => <span>Example Sentence 2</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("example_sentence_3", {
      cell: (info) => info.getValue(),
      header: () => <span>Example Sentence 3</span>,
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

      const entries: Entry[] = documents.map((item) => ({
        word: item.word,
        tamil_meaning: item.tamil_meaning,
        opposite_word: item.opposite_word,
        opposite_word_tamil_meaning: item.opposite_word_tamil_meaning,
        part_of_speech: item.part_of_speech,
        example_sentence_1: item.example_sentence_1,
        example_sentence_2: item.example_sentence_2,
        example_sentence_3: item.example_sentence_3,
      }));

      setData(entries);
    };

    fetchData();
  }, []);

  return (
    <div className='p-2'>
      <table className='text-black bg-white w-full'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='border border-gray-400 border-solid bg-yellow-300 p-2'
                >
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
                <td key={cell.id} className='border border-gray-400 p-2'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
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
        </tfoot> */}
      </table>
    </div>
  );
}
