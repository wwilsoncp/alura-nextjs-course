module.exports = {
  trailingSlash: true,
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