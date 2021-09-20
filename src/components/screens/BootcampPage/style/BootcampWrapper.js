import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
    display:flex;
    flex-direction: column;
    margin-left: 10%;
    padding:50px;
    height:100%;
    min-height:100vh;
    width:100%;

    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
    `,
  })}
`;

IndexWrapper.TextArea = styled.div`
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
height:100%;

.textdiv{
      width:50%;
      margin:1rem;
    }
.auxdiv{
      width:30%;
      margin:1rem;
}

ul{
  display:flex;
  justify-content:space-around;
  width:100%;
  padding:0;
}

.teacher__list{
}

.module__list{
  flex-direction:column;
  flex-wrap:wrap;
}

.teacher__li, .module__li{
  display:flex;
  list-style: none;
  padding:1rem;
}

.teacher__li{
  width:30%;
}

.module__li{
  width:100%;
}

.teacher__link, .module__link{
  display:flex;
  text-decoration:none;
  align-items: center;
  text-align:center;
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  transition: ${({ theme }) => theme.transition};
  flex-shrink: 0;
  width:100%;
}

.teacher__link{
  flex-direction: column;
  justify-content:center;
}

.module__link{
  justify-content:flex-start;
}

.teacher__link:hover, .module__link:hover {
    opacity: .5;
  }


.teacher__image{
  width:100%;
  border-radius:50%;
}

.module__image{
  width:10%;
  margin-right:1rem;
}

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    flex-direction: column;

    .textdiv, .auxdiv{
      width:100%;
      padding:1rem;
    }

    .module__list{
      flex-direction:row;
      flex-wrap:wrap;
}
.module__li{
  width:50%;
}
.teacher__link, .module__link{
  justify-content:center;
}
.module__image{
  width:30%;
}
    `,
  })}
`;

export { IndexWrapper as default };
