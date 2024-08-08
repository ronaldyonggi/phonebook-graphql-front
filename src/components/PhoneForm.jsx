import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { EDIT_NUMBER } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';

export default function PhoneForm({ setError }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [changeNumber, { data, loading, error }] = useMutation(EDIT_NUMBER, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      const messages = error.graphQLErrors.map((e) => e.message).join('\n');
      setError(messages);
    },
  });

  const submit = (event) => {
    event.preventDefault();

    changeNumber({ variables: { name, phone } });

    setName('');
    setPhone('');
  };

  useEffect(() => {
    if (data && data.editNumber === null) {
      setError('person not found');
    }
  }, [data]);

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
        <button type='submit'>Change number</button>
      </form>
    </div>
  );
}
