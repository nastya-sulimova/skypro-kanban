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
import { Link } from "react-router-dom";

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
            
            <Link to="/card/add">
              <HeaderBtnMain id="btnMainNew">
                <HeaderBtnLink >
                  Создать новую задачу
                </HeaderBtnLink>
              </HeaderBtnMain>
            </Link>

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

                <Link to="/exit">
                  <PopUserBtn type="button">
                    <PopUserBtnLink >Выйти</PopUserBtnLink>
                  </PopUserBtn>
                </Link>
                
              </HeaderPopUserBlock>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
