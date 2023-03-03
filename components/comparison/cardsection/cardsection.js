import { Allcard } from '../styles';
import Card from './card';

export default function Cardsection() {
  return (
    <>
      <Allcard>
        <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} />
      </Allcard>
    </>
  );
}
