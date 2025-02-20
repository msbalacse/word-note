"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

type TNewEntry = {
  word: string;
  tamil_meaning: string;
  opposite_word: string;
  opposite_word_tamil_meaning: string;
  part_of_speech: string;
  example_sentence_1: string;
  example_sentence_2: string;
  example_sentence_3: string;
}

const NewEntry = () => {
  const [name, setName] = useState("");
  const [tamil, setTamil] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name && tamil) {
      try {
        // Add the new entry to Firestore
        await addDoc(collection(db, "today"), {
          name,
          tamil,
        });

        // Reset the form after submission
        setName(""); // Clear the name field
        setTamil(""); // Clear the tamil field

        // Optionally, you can notify the user that the entry was successfully added
        alert("Entry added successfully!");
      } catch (error) {
        // Handle any errors that occur during the Firestore operation
        console.error("Error adding document: ", error);
        alert("There was an error adding the entry. Please try again.");
      }
    } else {
      // If either name or tamil is empty, alert the user
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className='mt-4'>
      <h2 className='text-lg font-semibold'>Add New Entry</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block'>
            Name
          </label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border p-2 w-full'
            required
          />
        </div>
        <div>
          <label htmlFor='tamil' className='block'>
            Tamil
          </label>
          <input
            id='tamil'
            type='text'
            value={tamil}
            onChange={(e) => setTamil(e.target.value)}
            className='border p-2 w-full'
            required
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Add Entry
        </button>
      </form>
      <Button>Send</Button>
    </div>
  );
};

export default NewEntry;
