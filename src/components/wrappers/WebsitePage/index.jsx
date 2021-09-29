/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenuButton from 'react-hamburger-menu';
import Footer from '../../commons/Footer';
import Header from '../../commons/Header';
import Nav from '../../commons/Nav';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  const [isMenuOpen, setMenuState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Box
          display="flex"
        >
          <Box
            position="fixed"
            top="1rem"
            right="1rem"
            zIndex="3"
            mobile
          >
            <HamburgerMenuButton
              isOpen={isMenuOpen}
              menuClicked={() => setMenuState(!isMenuOpen)}
              width={40}
              height={30}
              strokeWidth={1}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.2}
            />
          </Box>
          <Header open={isMenuOpen}>
            <Nav open={isMenuOpen} />
            <Footer />
          </Header>
          {children}
        </Box>
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
