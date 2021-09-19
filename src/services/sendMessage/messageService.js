import isStagingEnv from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  console.log(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  });
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://contact-form-api-jamstack.herokuapp.com/message'
  // Back End de PROD
  : 'https://contact-form-api-jamstack.herokuapp.com/message';

const messageService = {
  async send(
    { user, email, message },
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(BASE_URL, {
      method: 'POST',
      body: {
        user,
        email,
        message,
      },
    })
      .then((respostaConvertida) => {
        console.log(respostaConvertida.data);
      });
  },
};

export { messageService as default };
