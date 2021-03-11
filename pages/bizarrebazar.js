import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home({ artistes = [] }) {

console.log(artistes[0].fields);
    return (
    <div className={styles.container}>
      <Head>
        <title>L'Amicale | Bizarre Bazar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com"></link>
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"></script>
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.SNIPCART_DATA_API_KEY} hidden></div>
      </Head>
        
     <div>
          <div>
              {artistes.map((artiste)=>(
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
              

              }
          </div>
    </div> 

      {/* <main className={styles.main}>

        <h2>
          Achetons l'amicale
        </h2>
       <button class="snipcart-add-item"
          data-item-id="Local de fou"
          data-item-price="230000"
          data-item-url="/index"
          data-item-description="Un superbe local en plein coeur de la guillotiere."
          data-item-name="un tableau de fou">
          Ajouter au panier
        </button>
        <button class="snipcart-checkout">Passer la commande</button>
  </main> */}





      <footer className={styles.footer}>
  
          Powered by Télécrans de derrière les fagots
         
      </footer>
    </div>
  )
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