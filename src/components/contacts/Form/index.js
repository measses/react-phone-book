import { useState } from "react"; 

function Form({ addContact }) {
    const [form, setForm] = useState({fullname:"", phone_number:""});

    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if(form.fullname ==='' ||form.phone_number ===''){
            return false;
        }

        addContact(prevContacts => [...prevContacts, form]);
        setForm({fullname:"", phone_number:""});

        setForm({fullname:"", phone_number:""});
    };

    return (
        <form onSubmit={onSubmit}>
            
                <div>
                    <input name="fullname" 
                    placeholder='Full Name' 
                    value={form.fullname}
                    onChange={onChangeInput} 
                    />
                </div>
                <div>
                    <input name="phone_number" 
                    placeholder='Phone Number' 
                    value={form.phone_number}
                    onChange={onChangeInput} 
                    />
                </div>
                <div className="btn">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form;