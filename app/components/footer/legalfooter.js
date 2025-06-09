import { Container } from '../../styles/commonStyles';
import { FooterSectionLegal, FooterSub } from './styles';
import SocialMediaListItems from './socialMediaListItems';

export default function LegalFooter() {
  return (
    <>
      <FooterSectionLegal>
        <Container>
          <FooterSub>
            <p>Copilot Resources © 2022 </p>
            <SocialMediaListItems />
          </FooterSub>
        </Container>
      </FooterSectionLegal>
    </>
  );
}
