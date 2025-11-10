import Form from 'react-bootstrap/Form';

function Range1() {

  return (
    <Form.Group className="mb-3">
      <Form.Label>Espaçamento entre linhas: x</Form.Label>
      <Form.Range
        min="1.0"
        max="2.5"
      />
    </Form.Group>
  );
}

export default Range1;