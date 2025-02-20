"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

// Define a type for all the fields in the form
type TNewEntry = {
  word: string;
  tamil_meaning: string;
  opposite_word: string;
  opposite_word_tamil_meaning: string;
  part_of_speech: string;
  example_sentence_1: string;
  example_sentence_2: string;
  example_sentence_3: string;
  created_at?: string;
  created_by?: string;
};

const NewEntry = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState<TNewEntry>({
    word: "",
    tamil_meaning: "",
    opposite_word: "",
    opposite_word_tamil_meaning: "",
    part_of_speech: "",
    example_sentence_1: "",
    example_sentence_2: "",
    example_sentence_3: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      word,
      tamil_meaning,
      opposite_word,
      opposite_word_tamil_meaning,
      part_of_speech,
      example_sentence_1,
      example_sentence_2,
      example_sentence_3,
    } = formData;

    if (
      !word ||
      !tamil_meaning ||
      !opposite_word ||
      !opposite_word_tamil_meaning ||
      !part_of_speech ||
      !example_sentence_1 ||
      !example_sentence_2 ||
      !example_sentence_3
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "today"), {
        ...formData,
        created_at: new Date().toISOString(),
        created_by: user?.username,
      });

      setFormData({
        word: "",
        tamil_meaning: "",
        opposite_word: "",
        opposite_word_tamil_meaning: "",
        part_of_speech: "",
        example_sentence_1: "",
        example_sentence_2: "",
        example_sentence_3: "",
      });
      alert("Entry added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error adding the entry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-4 w-full mx-auto'>
      <h2 className='text-lg font-semibold'>Add New Entry</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Dynamically render form fields */}
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <Label className='text-xs font-medium'>
              {key.replaceAll("_", " ").toUpperCase()}
            </Label>
            <Input
              id={key}
              name={key}
              type='text'
              value={formData[key as keyof TNewEntry]}
              onChange={handleChange}
              className='border p-2 w-full'
              required
            />
          </div>
        ))}

        <button
          type='submit'
          className={`bg-blue-500 text-white p-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Entry"}
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
