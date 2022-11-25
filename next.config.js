module.exports = {
  trailingSlash: true, // adiciona a / no final da url automaticamente
  async redirects() {
    return [
      {
        source: '/perguntas', // caso algum usuário digite /perguntas no final da URL, será redirecionado para /faq
        destination: '/faq',
        permanent: true,
      },
    ]
  },
}