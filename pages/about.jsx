import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutMe from '../src/components/screens/aboutme';

// getRepos();
// async function getRepos() {
//   const repo = await fetch('https://api.github.com/users/SchultzGabriel/repos')
//     .then((respostaDoServer) => respostaDoServer.json())
//     .then((respostaConvertida) => console.log('aa', respostaConvertida));
//     .then()
//   return repo;
// }
function AboutPage() {
  const [repos, setRepos] = React.useState([]);

  // 0 - Pegar o array de dados do github
  React.useEffect(() => {
    fetch('https://api.github.com/users/SchultzGabriel/repos')
      .then((respostaDoServidor) => respostaDoServidor.json())
      .then((respostaCompleta) => {
        setRepos(respostaCompleta);
      });
  }, []);
  return (
    <>
      <AboutMe repos={repos} />
    </>
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
