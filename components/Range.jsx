import Form from 'react-bootstrap/Form';

function Range({ currentSize, onSizeChange }) {
  const handleChange = (e) => {
    onSizeChange(e.target.value);
  };


  return (
    <Form.Group className="mb-3">
      <Form.Label>Tamanho da fonte:{currentSize}px</Form.Label>
      <Form.Range
        min="12"
        max="24"
        value={currentSize}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default Range;