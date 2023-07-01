import { useEffect, useState } from "react";
import Layout from "./layout";
import Axios from 'axios';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Note from "../components/note";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/api/getllnote');
        setNotes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    const filterNotes = () => {
      if (searchQuery === '') {
        setFilteredNotes(notes);
      } else {
        const filtered = notes.filter(note =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredNotes(filtered);
      }
    };

    filterNotes();
  }, [searchQuery, notes]);

  const deleteNote = async (id) => {
    try {
      await Axios.delete(`http://localhost:3000/api/notes/${id}`);
      setNotes(prevNotes =>
        prevNotes.filter(note => note._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-100 p-2 gap-2">
        <div className="flex justify-between gap-2 items-center w-100">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            className="px-3 py-1 w-full d-block rounded-md outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button>
            <AiOutlineFileAdd />
          </button>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            {filteredNotes.map(note => (
              <li className="bg-yellow-200 text-zinc-600 px-2" key={note._id}>
                <Note
                  id={note._id}
                  title={note.title}
                  desc={note.description}
                  trash={<BsTrash />}
                  onDel={deleteNote}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
