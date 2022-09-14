import { Header, Form, Input, SubmitBtn } from './SearchbarStyled';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = useRef();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      input.current.value = query;
    }
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.input.value });
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          name="input"
          type="text"
          autocomplete="off"
          autoFocus
          ref={input}
        />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </Form>
    </Header>
  );
}

export default Searchbar;
