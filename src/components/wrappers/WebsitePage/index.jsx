/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import Footer from '../../commons/Footer';
import Header from '../../commons/Header';
import Nav from '../../commons/Nav';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/ContactForm';
import SEO from '../../commons/SEO';
import ContactButton from '../../commons/ContactButton';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
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
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro
              propsDoModal={propsDoModal}
              onClose={() => {
                setModalState(false);
              }}
            />
          )}
        </Modal>
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
            <HamburgerMenu
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
          {menuProps.display && (
          <Header open={isMenuOpen}>
            <Nav open={isMenuOpen} />
            <Footer />
          </Header>
          )}
          {children}
        </Box>
        <ContactButton onClick={() => { setModalState(!isModalOpen); }} isModalOpen={isModalOpen} />

      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
