import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { EDIT_NUMBER } from '../queries';

export default function PhoneForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [changeNumber] = useMutation(EDIT_NUMBER);

  const submit = (event) => {
    event.preventDefault();

    changeNumber({ variables: { name, phone } });

    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Change number</h2>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone
          <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <button type="submit">Change number</button>
      </form>
    </div>
  );
}
