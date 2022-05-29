// Converte a url
const Utils = {

  // Lógica das rotas
  parseRequestURL: () => {

    // Pega o hash (#) da url ou '/'
    let url = location.hash.slice(1).toLowerCase() || '/';

    // Pega request e separa tudo que tiver por '/'
    let r = url.split('/');

    let request = {
      resource: null,
      id: null,
      verb: null,
    }

    // Ex.: dominio.com.br/#/blog/categoria/noticia/

    request.resource = r[1];  // Ex.: /blog
    request.id = r[2]         // Ex.: /categoria
    request.verb = r[3]       // Ex.: /noticia

    return request;
  },

  // Trata erro
  redirect_to: (next) => location.replace(`#/${next}`),
  
  sleep: (ms) => new Promise( resolve => setTimeout(resolve, ms) ),
}

export default Utils