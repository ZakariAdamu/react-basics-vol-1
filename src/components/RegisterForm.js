import {React, useState} from 'react'

function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mymail.com'
    })

  return (
    <div>
          <label>
              First name:
              <input value={form.firstName} onChange={e => {
                  setForm({...form, firstName: e.target.value})
              }}/>
          </label>
          <label>
              Last name:
              <input value={form.lastName} onChange={e => {
                  setForm({...form, lastName: e.target.value})
              }}/>
          </label>
          <label>
              Email:
              <input value={form.email} onChange={e => {
                  setForm({...form, email: e.target.value})
              }}/>
          </label>
    </div>
  )
}

export default RegisterForm
