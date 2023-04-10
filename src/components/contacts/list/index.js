import {useState} from 'react'


function List({ contacts, removeContact }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((contact) =>
    Object.keys(contact).some((key) =>
      contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  );

  console.log("filtered",filtered);

  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className='list'>
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullname}
          
          <span>{contact.phone_number}</span>
          <button onClick={() => removeContact(index)}>Remove</button>
          </li>
          
        ))}
      </ul>

      <p>Total contacs ({filtered.length})</p>
    </div>
  );
}

export default List;