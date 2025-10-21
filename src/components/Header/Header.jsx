import { useState } from "react";
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLogoDark,
  HeaderNav,
  HeaderBtnMain,
  HeaderBtnLink,
  HeaderUserBtn,
  HeaderPopUserBlock,
  HeaderPopUserBlockClose,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  ThemeText, ThemeCheckbox, PopUserBtn, PopUserBtnLink
} from "./Header.styled";
import { Container } from "../Main/Main.styled";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogoDark>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMain id="btnMainNew">
              <HeaderBtnLink href="#popNewCard">
                Создать новую задачу
              </HeaderBtnLink>
            </HeaderBtnMain>

            <HeaderUserBtn onClick={toggleUserMenu}>Ivan Ivanov</HeaderUserBtn>

            {isUserMenuOpen && (
              <HeaderPopUserBlock>
                <HeaderPopUserBlockClose onClick={toggleUserMenu}>
                  ×
                </HeaderPopUserBlockClose>
                <PopUserName>Ivan Ivanov</PopUserName>
                <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
                <PopUserTheme>
                  <ThemeText>Темная тема</ThemeText>
                  <ThemeCheckbox type="checkbox" name="checkbox" />
                </PopUserTheme>
                <PopUserBtn type="button">
                  <PopUserBtnLink href="#popExit">Выйти</PopUserBtnLink>
                </PopUserBtn>
              </HeaderPopUserBlock>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
