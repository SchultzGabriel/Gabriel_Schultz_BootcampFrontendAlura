import React from 'react';
import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import AboutMe from '../src/components/aboutme';
import Footer from '../src/components/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/ContactForm';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <>
      <Header>
        <Nav onClick={() => { setModalState(!isModalOpen); }} isModalOpen={isModalOpen} />
      </Header>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >

        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} onClose={() => setModalState(false)} />

        )}
      </Modal>
      <AboutMe />
      <Footer />
    </>
  );
}
