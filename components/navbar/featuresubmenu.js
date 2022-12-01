import Image from 'next/image';
import { NavigationBlock, NavMenu, MobileListLi, MenuWrap, LeftImg, RightText } from './styles';

export default function FeatureSubMenu() {
  return (
    <>
      <NavMenu>
        <NavigationBlock>
          <MobileListLi>
            <MenuWrap msghover href='/modules/message'>
              <LeftImg>
                <Image src='/images/menumsg.svg' alt='msg-icon' width={32} height={32} />
              </LeftImg>
              <RightText>
                <h5>Messaging</h5>
                <span>Communicate with clients securely</span>
              </RightText>
            </MenuWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuWrap billhover href='/modules/billing'>
              <LeftImg>
                <Image src='/images/billmenuicon.svg' alt='bill-icon' width={32} height={32} />
              </LeftImg>
              <RightText>
                <h5>Billing</h5>
                <span>Create invoices and subscriptions</span>
              </RightText>
            </MenuWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuWrap filehover href='/modules/file'>
              <LeftImg>
                <Image src='/images/filemenuicon.svg' alt='file-icon' width={32} height={32} />
              </LeftImg>
              <RightText>
                <h5>Files & eSignatures</h5>
                <span>Share files and sign contracts</span>
              </RightText>
            </MenuWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuWrap helphover href='/modules/knowledge'>
              <LeftImg>
                <Image src='/images/deskmenuicon.svg' alt='desk-icon' width={32} height={32} />
              </LeftImg>
              <RightText>
                <h5>Helpdesk</h5>
                <span>Improve customer support</span>
              </RightText>
            </MenuWrap>
          </MobileListLi>
        </NavigationBlock>
      </NavMenu>
    </>
  );
}
