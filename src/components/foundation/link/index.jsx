/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

const Anchor = styled.a`
color: ${({ theme }) => theme.colors.primary.main.contrastText};
text-decoration: none;
transition: ${({ theme }) => theme.transition};

${({ theme, nav }) => nav && css`
    color: ${theme.colors.secondary.main.contrastText};

    &:hover{
    color: ${theme.colors.primary.main.contrastText};

    }
    }
  `}
`;

// eslint-disable-next-line react/prop-types
export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Anchor
        {...props}
      >
        {children}
      </Anchor>
    </NextLink>
  );
}
