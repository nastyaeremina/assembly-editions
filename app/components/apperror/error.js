import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { AppMain, ErrorMain } from './styles';

export default function AppError({ query }) {
  return (
    <AppMain>
      <Image src='/images/errorapp.svg' alt='main-logo' height={333} width={381} />
      <h4>
        Sorry We Couldn’t Find Any Matches For <span>{query}</span>
      </h4>
      <p>Please try searching with another terms</p>
    </AppMain>
  );
}
