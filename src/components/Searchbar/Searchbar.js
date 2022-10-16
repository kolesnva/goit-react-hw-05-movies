import { Container, Form, Input, SubmitBtn } from './SearchbarStyled';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

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
    const query = event.target.elements.input.value.trim();
    query ? setSearchParams({ query }) : setSearchParams({});
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="input"
          type="text"
          autocomplete="off"
          autoFocus
          ref={input}
          placeholder="Enter movie name"
        />
        <SubmitBtn type="submit">
          <BiSearchAlt2 size={24} />
        </SubmitBtn>
      </Form>
    </Container>
  );
}

export default Searchbar;
