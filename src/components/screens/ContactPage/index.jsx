import React from 'react';
import ContactWrapper from './style/ContactWrapper';
import FormCadastro from '../../patterns/ContactForm';
import Text from '../../foundation/text';

export default function ContactPage() {
  return (
    <ContactWrapper>
      <ContactWrapper.Form>
        <Text
          variant="subtitle"
          tag="h2"
          color="secondary.main"
          alignSelf="center"
          margin="1rem"
          textShadow="2px 2px 2px black"
        >
          Contato
        </Text>
        <FormCadastro />
      </ContactWrapper.Form>
      <ContactWrapper.Map>
        <Text
          variant="subtitle"
          tag="h2"
          color="secondary.main"
          textAlign={{
            md: 'center',
          }}
          margin="1rem"
          textShadow="2px 2px 2px black"
        >
          Localização
        </Text>

        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d441269.46174665296!2d-51.68582130118044!3d-30.225163740241804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!3m2!1d-30.0368176!2d-51.2089887!4m5!1s0x951a3ea3d07abdbd%3A0x33e948580e670427!2sR.%20Jo%C3%A3o%20Kehl%2C%20985%2C%20Sert%C3%A3o%20Santana%20-%20RS%2C%2092850-000!3m2!1d-30.462667699999997!2d-51.6057798!5e0!3m2!1spt-BR!2sbr!4v1630719282497!5m2!1spt-BR!2sbr" width="100%" height="100%" title="onde vivo - Sertão Santana - RS" allowFullScreen="" loading="lazy" />
        <Text
          variant="smallestException"
          tag="h2"
          color="secondary.main"
          textAlign={{
            md: 'center',
          }}
          margin="1rem"
          textShadow="2px 2px 2px black"
        >
          (disponível para mudança)
        </Text>
      </ContactWrapper.Map>
    </ContactWrapper>
  );
}
