import { Container } from '../../styles/commonStyles';
import { FooterSectionLegal, FooterSub } from './styles';
import SocialMediaListItems from './socialMediaListItems';

export default function LegalFooter({ socialMediaLinks = [] }) {
  return (
    <>
      <FooterSectionLegal>
        <Container>
          <FooterSub>
            <p>Assembly Resources © 2022 </p>
            <SocialMediaListItems socialMediaLinks={socialMediaLinks} />
          </FooterSub>
        </Container>
      </FooterSectionLegal>
    </>
  );
}
