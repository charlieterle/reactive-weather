import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function ButtonMenu({ onCelFarClick, onMiKmClick }) {
  return (
    <Container className='mt-2 text-center'>
      <Button className='m-1' onClick={onCelFarClick}>Celcius / Fahrenheit</Button>
      <Button className='m-1' onClick={onMiKmClick}>Metric / Imperial</Button>
    </Container>
  )
}
