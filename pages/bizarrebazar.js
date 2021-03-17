import Head from "next/head";
import Layout from "../components/Layout";
import Markdown from "react-markdown";

export default function Home({ artistes = [] }) {

  function fisherYatesShuffle(arr){
    for(let i =arr.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); 
        [arr[i],arr[j]]=[arr[j],arr[i]]; 
    }
}

  fisherYatesShuffle(artistes);

  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>L'Amicale | Bizarre Bazar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com"></link>
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css"
        />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-api-key={process.env.SNIPCART_DATA_API_KEY}
          hidden
        ></div>
      </Head>
      <Layout>
        <div>
          <div className="text-9xl px-6 mt-6 arkm">BIZARRE BAZAR</div>
          <div className="px-6 mt-20 LibreBaskerville">
            

            {artistes.map((artiste) => (
              <div className="border-t border-black">
                <div>{artiste.fields.nomDeLartiste}</div>
                <a href={artiste.fields.siteDeLarticle} className="hover:text-red-600" target="_blank">
                  {artiste.fields.siteDeLarticle}
                </a>

                <div className="grid gap-6 grid-cols-3">
                  <div>
                     {artiste.fields.illustrationOeuvre1 && 
                    <img
                      src={artiste.fields.illustrationOeuvre1[0].url}
                      width="400vw"
                      height="auto"
                    /> } 
                    <p>{artiste.fields.oeuvre1}</p>
                    <Markdown
                      source={artiste.fields.descriptionOeuvre1}
                      escapeHtml={true}
                    />
                    <p>{artiste.fields.prix1} euros</p>

                    <button
                      className="snipcart-add-item"
                      data-item-id={artiste.fields.oeuvre1}
                      data-item-price={artiste.fields.prix1}
                      data-item-url="/bizarrebazar"
                      // data-item-description=""
                      data-item-name={artiste.fields.oeuvre1}
                    >
                      Ajouter au panier
                    </button>
                  </div>

                  <div>
                    <div>
                     {artiste.fields.illustrationOeuvre2 && <img
                        src={artiste.fields.illustrationOeuvre2[0].url}
                        width="400vw"
                        height="auto"
                     /> }
                      <p>{artiste.fields.oeuvre2}</p>
                      <Markdown
                        source={artiste.fields.descriptionOeuvre2}
                        escapeHtml={true}
                      />
                      <p>{artiste.fields.prixOeuvre2} euros</p>

                      <button
                        className="snipcart-add-item"
                        data-item-id={artiste.fields.oeuvre2}
                        data-item-price={artiste.fields.prixOeuvre2}
                        data-item-url="/bizarrebazar"
                        // data-item-description=""
                        data-item-name={artiste.fields.oeuvre2}
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>

      <div>
        <div>
          {/* {artistes.map((artiste)=>(
                <div key={artiste.sys.id}>
                    <h2>
                        <div>{artiste.fields.nomDeLartiste}</div>
                    </h2>
                    <a href={artiste.fields.siteDeLarticle} >{artiste.fields.siteDeLarticle}</a>
                    <img
                    src={artiste.fields.illustrationOeuvre1[0].url}
                    width="100%"
                    height="auto"/>
                    <p>{artiste.fields.oeuvre1}</p>
                    <p>{artiste.fields.descriptionOeuvre1}</p>
                    <p>{artiste.fields.prix1}</p>
                    <img
                    src={artiste.fields.illustrationOeuvre2[0].url}
                    width="100%"
                    height="auto"/>
                    <p>{artiste.fields.oeuvre2}</p>
                    <p>{artiste.fields.prixOeuvre2}</p>
                
                </div>
              ))
              } */}
        </div>
      </div>

      {/* <main className={styles.main}>

       <button class="snipcart-add-item"
          data-item-id="Local de fou"
          data-item-price="230000"
          data-item-url="/index"
          data-item-description="Un superbe local en plein coeur de la guillotiere."
          data-item-name="un tableau de fou">
          Ajouter au panier
        </button>
        <button class="snipcart-checkout">Passer la commande</button>
  
  */}
    </div>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `blogPost`
  const artistes = await client
    .getEntries({ content_type: "artiste" })
    .then((response) => response.items);

  return {
    props: {
      artistes,
    },
  };
}

