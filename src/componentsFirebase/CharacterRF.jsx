import React, {useState, useEffect} from "react";
import Notes from './Notes'
import NotesForm from './NotesForm'
import { firestore } from "../firebase/firebaseConfig";

const CharacterRF = () => {

  const [notes, setNotes] = useState([]);

  const addOrEditNote = async (note) => {
    await firestore.collection('notes').doc().set(note);
    console.log('add note');
  }

  const getNotes = async () => {
    await firestore.collection('notes').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.id);
        docs.push({...doc.data(), id: doc.id});
      })
      setNotes(docs)
    })
  }

  const deleteNote = async (id) => {
    console.log(id);
    await firestore.collection('notes').doc(id).delete();
    console.log('note deleted');
  }

  useEffect(() => {
    getNotes();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <NotesForm addOrEditNote={addOrEditNote} />
        </div>
        <div className='col'>
          <Notes notes={notes} deleteNote={deleteNote}/>
        </div>
      </div>
    </div>
  );
};
export { CharacterRF };
