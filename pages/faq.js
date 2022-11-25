import FAQScreen from "../src/screens/FAGScreen";

export default FAQScreen;

// export async function getServerSideProps(context) {
//   console.log('Em Mode DEV (yarn start) sempre executa esse método')
//   console.log('Roda a cada acesso que o app recebe em PROD')
// }

export async function getStaticProps() {
  console.log('Em Mode DEV (yarn start) sempre executa esse método')
  console.log('Roda SOMENTE no BUILD (yarn build) do projeto')
  const URL_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(URL_API)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log('data', data)
      return data;
    })
  return {
    props: {
      faq
    }, // will be passed to the page component as props
  }
}

// export default function FaqPage(props) {
//   console.log('props', props);
//   return (
//     <div>
//       <Head>
//         <title>FAQ - Alura Cases</title>
//       </Head>
//       <h1>Alura Cases - Perguntas</h1>
//       <Link href="/">
//         Home
//       </Link>
//       <ul>
//         {props?.faq?.map(({ answer, question }) => {
//           return (
//             <li key={question}>
//               <article>
//                 <h2>{question}</h2>
//                 <p>{answer}</p>

//               </article>
//             </li>)
//         }
//         )
//         }

//       </ul>
//     </div>
//   )
// }