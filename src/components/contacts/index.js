import { useState, useEffect } from 'react'; 
import List from './list';
import Form from './Form';
import "./style.css"
function Contacts() {
  const [contacts, setContacts] = useState([{
    fullname: "Mert",
    phone_number: "0506 190 2535"
  }, {
    fullname: "Mehmet",
    phone_number: "0535 624 7890"
  }]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  const removeContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <Form addContact={setContacts} contacts={contacts} />
      <List contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default Contacts;