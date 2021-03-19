import Head from "next/head";
import Layout from "../components/Layout";
import Markdown from "react-markdown";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ artistes = [] }) {
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  fisherYatesShuffle(artistes);



  
  return (
    <html lang="fr">
      <div className=" bgColor">
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
            <div className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">BIZARRE BAZAR</div>

            <button className="snipcart-checkout px-6 text-6xl">Panier</button>

            <div className="border-t border-black pt-3 pl-6 px-6 LibreBaskerville text-xl">
              <p><span className="arkm"><strong>Bizarre</strong> Bazar </span>a été créé pour tenter de rendre visible un geste qui nous tient à coeur : 
              l’infinie puissance créatrice de nos proches au profit de l’achat de l’Amicale. Vous trouverez donc ici des pièces toutes 
              fantastiques qui nous ont été généreusement données par nos ami.e.s musicien.nes, artistes, plasticien.nes, illustrateur.rices, photographes, 
              imprimeuse.rs, tisserand.es, potier.es, bijoutier.es, graphistes, designeuse.rs textile, peintres… Vous avez la possibilité de les acheter si elles vous 
              plaisent afin de contribuer d’une manière originale à l’achat des murs de l’Amicale. Vous pourrez également faire un don supplémentaire lorsde votre commande.
              N'hésitez surtout pas!</p>
              <p>Découvrez aussi les supers compiles de l’Amicale que les copines et copains musiciens nous ont concoctés mais aussi une série spéciale de t-shirts 
              imprimé dans les ateliers de <a className="textDecorationNone hover:text-red-600" href="https://www.grrrndzero.org/" target="_blank">Grrrnd Zero</a> 
              avec les dessins de <a className="textDecorationNone hover:text-red-600" href="https://felicite.land/" target="_blank">Félicité Landrivon</a>, 
              <a className="textDecorationNone hover:text-red-600" href="https://servicelocal.fr/" target="_blank"> Service Local</a>, 
              <a className="textDecorationNone hover:text-red-600" href="https://marionjdanoff.net/" target="_blank"> Marion Jdanoff</a>, 
              <a className="textDecorationNone hover:text-red-600" href="https://www.alaricgarnier.fr/" target="_blank"> Alaric Garnier</a>, 
              <a className="textDecorationNone hover:text-red-600" href="http://www.benoitfrancois.art/" target="_blank"> Benoît François</a>, et 
              <a className="textDecorationNone hover:text-red-600" href="https://www.instagram.com/soleil_de_nuit__/" target="_blank"> Soleil de nuit</a> !</p>
              <p>Et rendez-vous prochainement pour un <span className="arkm"><strong>Bizarre</strong> Bazar </span> en réel !! Bonne visite !</p></div>

            <div className="border-t border-black pt-3 pl-6 px-6 text-xl">
              <p className="arkm">COMPILE DE L'AMICALE ---- link ---- COMPILE DE L'AMICALE ---- link</p>
              <img src="https://res.cloudinary.com/dbqfcp9vd/image/upload/v1616165428/illustration/compile_ddzfu2.jpg" alt="la casette de la super compil de l'Amicale!" className="tailleImage">
              </img>
            </div>


            {artistes.map((artiste) => (
              <div className="border-t border-black pt-3 pl-6">
                <div>{artiste.fields.nomDeLartiste}</div>
                <a
                  href={artiste.fields.siteDeLartiste}
                  className="hover:text-red-600 textDecorationNone"
                  target="_blank"
                >
                  {artiste.fields.siteDeLartiste}
                </a>
                <div className="flex flex-col m-auto p-auto ">
                  <div className="flex overflow-x-scroll ">
                    <div className="flex flex-nowrap  ">
                      <div className="inline-block ">
                        <div className=" mt-6 taillecontainer max-w-full overflow-hidden  transition-shadow duration-300 ease-in-out">
                          {artiste.fields.titreOeuvre1 && (
                            <div className="">
                              {/*//////////////////////////////
                     ////////oeuvre 1////////////////
                   */}

                              {artiste.fields.illustrationOeuvre1 && (
                                <Carousel
                                  controls={
                                    artiste.fields.illustrationOeuvre1.length <
                                    2
                                      ? false
                                      : true
                                  }
                                  justify-self="center"
                                  align-self="center"
                                  control-prev-icon-color="invert(100%)"
                                  control-next-icon-color="invert(100%)"
                                  indicators={false}
                                  touch={true}
                                  interval={null}
                                >
                                  {artiste.fields.illustrationOeuvre1.map(
                                    (oeuvre, i) => (
                                      <Carousel.Item key={i}>
                                        <img
                                          src={
                                            artiste.fields.illustrationOeuvre1[
                                              i
                                            ].url
                                          }
                                          className="tailleImage"
                                        />
                                      </Carousel.Item>
                                    )
                                  )}
                                </Carousel>
                              )}
                              <p>{artiste.fields.titreOeuvre1}</p>
                              <Markdown
                                source={artiste.fields.descriptionOeuvre1}
                                escapeHtml={true}
                              />
                              <p>{artiste.fields.prixOeuvre1} euros</p>

                              {!artiste.fields.oeuvre1Vendue ? (artiste.fields.tShirt1 ? (
                                <button
                                  className="snipcart-add-item"
                                  data-item-id={artiste.fields.titreOeuvre1}
                                  data-item-price={artiste.fields.prixOeuvre1}
                                  data-item-url="/bizarrebazar"
                                  data-item-name={artiste.fields.titreOeuvre1}
                                  data-item-custom1-name="Prix libre / Faire un don :"
                                  data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                  data-item-custom2-name="Taille"
                                  data-item-custom2-options="S|M|L"
                                  data-item-weight={
                                    typeof artiste.fields.poidsOeuvre1 ==
                                    undefined
                                      ? 0
                                      : artiste.fields.poidsOeuvre1
                                  }
                                >
                                  Ajouter au panier
                                </button>
                              ) : (
                                <button
                                  className="snipcart-add-item"
                                  data-item-id={artiste.fields.titreOeuvre1}
                                  data-item-price={artiste.fields.prixOeuvre1}
                                  data-item-url="/bizarrebazar"
                                  data-item-name={artiste.fields.titreOeuvre1}
                                  data-item-custom1-name="Prix libre / Faire un don :"
                                  data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                  data-item-weight={
                                    typeof artiste.fields.poidsOeuvre1 ==
                                    undefined
                                      ? 0
                                      : artiste.fields.poidsOeuvre1
                                  }
                                >
                                  Ajouter au panier
                                </button>
                              )):<div>N'est plus disponible...</div>}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="inline-block px-3">
                        <div className=" mt-6 taillecontainer max-w-full overflow-hidden transition-shadow duration-300 ease-in-out">
                          {/* ////////oeuvre 2 */}
                          {artiste.fields.titreOeuvre2 && (
                            <div>
                              {artiste.fields.illustrationOeuvre2 && (
                                <Carousel
                                  controls={
                                    artiste.fields.illustrationOeuvre2.length <
                                    2
                                      ? false
                                      : true
                                  }
                                  justify-self="center"
                                  align-self="center"
                                  control-prev-icon-color="invert(100%)"
                                  control-next-icon-color="invert(100%)"
                                  indicators={false}
                                  touch={true}
                                  interval={null}
                                >
                                  {artiste.fields.illustrationOeuvre2.map(
                                    (oeuvre, i) => (
                                      <Carousel.Item key={i}>
                                        <img
                                          src={
                                            artiste.fields.illustrationOeuvre2[
                                              i
                                            ].url
                                          }
                                          className="tailleImage"
                                        />
                                      </Carousel.Item>
                                    )
                                  )}
                                </Carousel>
                              )}
                              <p>{artiste.fields.titreOeuvre2}</p>
                              <Markdown
                                source={artiste.fields.descriptionOeuvre2}
                                escapeHtml={true}
                              />
                              <p>{artiste.fields.prixOeuvre2} euros</p>

                              {!artiste.fields.oeuvre2Vendue ? (artiste.fields.tShirt2 ? (
                                <button
                                  className="snipcart-add-item"
                                  data-item-id={artiste.fields.titreOeuvre2}
                                  data-item-price={artiste.fields.prixOeuvre2}
                                  data-item-url="/bizarrebazar"
                                  data-item-name={artiste.fields.titreOeuvre2}
                                  data-item-custom1-name="Prix libre / Faire un don :"
                                  data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                  data-item-custom2-name="Taille"
                                  data-item-custom2-options="S|M|L"
                                  data-item-weight={
                                    typeof artiste.fields.poidsOeuvre2 ==
                                    undefined
                                      ? 0
                                      : artiste.fields.poidsOeuvre2
                                  }
                                >
                                  Ajouter au panier
                                </button>
                              ) : (
                                <button
                                  className="snipcart-add-item"
                                  data-item-id={artiste.fields.titreOeuvre2}
                                  data-item-price={artiste.fields.prixOeuvre2}
                                  data-item-url="/bizarrebazar"
                                  data-item-name={artiste.fields.titreOeuvre2}
                                  data-item-custom1-name="Prix libre / Faire un don :"
                                  data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                  data-item-weight={
                                    typeof artiste.fields.poidsOeuvre2 ==
                                    undefined
                                      ? 0
                                      : artiste.fields.poidsOeuvre2
                                  }
                                >
                                  Ajouter au panier
                                </button>
                              )):<div>N'est plus disponible...</div>}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="inline-block px-3">
                        <div className=" mt-6 taillecontainer max-w-full overflow-hidden  transition-shadow duration-300 ease-in-out">
                          {/* 
                    //////////////////////////
                    /////// oeuvre 3 /////////
                    //////////////////////////////*/}

                          {artiste.fields.titreOeuvre3 && (
                            <div>
                              {artiste.fields.illustrationOeuvre3 && (
                                <Carousel
                                  controls={
                                    artiste.fields.illustrationOeuvre3.length <
                                    2
                                      ? false
                                      : true
                                  }
                                  justify-self="center"
                                  align-self="center"
                                  control-prev-icon-color="invert(100%)"
                                  control-next-icon-color="invert(100%)"
                                  indicators={false}
                                  touch={true}
                                  interval={null}
                                >
                                  {artiste.fields.illustrationOeuvre3.map(
                                    (oeuvre, i) => (
                                      <Carousel.Item key={i}>
                                        <img
                                          src={
                                            artiste.fields.illustrationOeuvre3[
                                              i
                                            ].url
                                          }
                                          className="tailleImage"
                                        />
                                      </Carousel.Item>
                                    )
                                  )}
                                </Carousel>
                              )}
                              <p>{artiste.fields.titreOeuvre3}</p>
                              <Markdown
                                source={artiste.fields.descriptionOeuvre3}
                                escapeHtml={true}
                              />
                              <p>{artiste.fields.prixOeuvre3} euros</p>

                              {!artiste.fields.oeuvre3Vendue ? (<button
                                className="snipcart-add-item"
                                data-item-id={artiste.fields.titreOeuvre3}
                                data-item-price={artiste.fields.prixOeuvre3}
                                data-item-url="/bizarrebazar"
                                data-item-name={artiste.fields.titreOeuvre3}
                                data-item-custom1-name="Prix libre / Faire un don :"
                                data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                data-item-weight={
                                  typeof artiste.fields.poidsOeuvre3 ==
                                  undefined
                                    ? 0
                                    : artiste.fields.poidsOeuvre3
                                }
                              >
                                Ajouter au panier
                              </button>):<div>N'est plus disponible...</div>}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="inline-block px-3">
                        <div className=" mt-6 taillecontainer max-w-full overflow-hidden transition-shadow duration-300 ease-in-out">
                          {/* 
                    //////////////////////////
                    /////// oeuvre 4 /////////
                    //////////////////////////////*/}
                          {artiste.fields.titreOeuvre4 && (
                            <div>
                              {artiste.fields.illustrationOeuvre4 && (
                                <Carousel
                                  controls={
                                    artiste.fields.illustrationOeuvre4.length <
                                    2
                                      ? false
                                      : true
                                  }
                                  justify-self="center"
                                  align-self="center"
                                  control-prev-icon-color="invert(100%)"
                                  control-next-icon-color="invert(100%)"
                                  indicators={false}
                                  touch={true}
                                  interval={null}
                                >
                                  {artiste.fields.illustrationOeuvre4.map(
                                    (oeuvre, i) => (
                                      <Carousel.Item key={i}>
                                        <img
                                          src={
                                            artiste.fields.illustrationOeuvre4[
                                              i
                                            ].url
                                          }
                                          className="tailleImage"
                                        />
                                      </Carousel.Item>
                                    )
                                  )}
                                </Carousel>
                              )}
                              <p>{artiste.fields.titreOeuvre4}</p>
                              <Markdown
                                source={artiste.fields.descriptionOeuvre4}
                                escapeHtml={true}
                              />
                              <p>{artiste.fields.prixOeuvre4} euros</p>

                              {!artiste.fields.oeuvre4Vendue ? (<button
                                className="snipcart-add-item"
                                data-item-id={artiste.fields.titreOeuvre4}
                                data-item-price={artiste.fields.prixOeuvre4}
                                data-item-url="/bizarrebazar"
                                data-item-name={artiste.fields.titreOeuvre4}
                                data-item-custom1-name="Prix libre / Faire un don :"
                                data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                                data-item-weight={
                                  typeof artiste.fields.poidsOeuvre4 ==
                                  undefined
                                    ? 0
                                    : artiste.fields.poidsOeuvre4
                                }
                              >
                                Ajouter au panier
                              </button>):<div>N'est plus disponible...</div>}
                            </div>
                          )}
                        </div>
                      </div>
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*<div className="px-6 mt-20 LibreBaskerville">
              {artistes.map((artiste) => (
                <div className="border-t border-black">
                  <div>{artiste.fields.nomDeLartiste}</div>
                  <a
                    href={artiste.fields.siteDeLarticle}
                    className="hover:text-red-600"
                    target="_blank"
                  >
                    {artiste.fields.siteDeLarticle}
                  </a>
                  <div className="grid gap-6 grid-cols-3">
                    {artiste.fields.oeuvre1 && (
                      <div>
                        {//oeuvre 1}
                        {artiste.fields.illustrationOeuvre1 && (
                          <Carousel
                            controls={
                              artiste.fields.illustrationOeuvre1.length < 2
                                ? false
                                : true
                            }
                            justify-self="center"
                            align-self="center"
                            control-prev-icon-color="invert(100%)"
                            control-next-icon-color="invert(100%)"
                            indicators={false}
                            touch={true}
                            interval={null}
                          >
                            {artiste.fields.illustrationOeuvre1.map(
                              (oeuvre, i) => (
                                <Carousel.Item key={i}>
                                  <img
                                    src={
                                      artiste.fields.illustrationOeuvre1[i].url
                                    }
                                    className="tailleImage"
                                  />
                                </Carousel.Item>
                              )
                            )}
                          </Carousel>
                        )}
                        <p>{artiste.fields.oeuvre1}</p>
                        <Markdown
                          source={artiste.fields.descriptionOeuvre1}
                          escapeHtml={true}
                        />
                        <p>{artiste.fields.prix1} euros</p>

                        {artiste.fields.tShirt ? (
                          <button
                            className="snipcart-add-item"
                            data-item-id={artiste.fields.oeuvre1}
                            data-item-price={artiste.fields.prix1}
                            data-item-url="/bizarrebazar"
                            data-item-name={artiste.fields.oeuvre1}
                            data-item-custom1-name="Prix libre / Faire un don :"
                            data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                            data-item-custom2-name="Taille"
                            data-item-custom2-options="S|M|L"
                            data-item-weight={
                              typeof artiste.fields.poidsOeuvre1 == undefined
                                ? 0
                                : artiste.fields.poidsOeuvre1
                            }
                          >
                            Ajouter au panier
                          </button>
                        ) : (
                          <button
                            className="snipcart-add-item"
                            data-item-id={artiste.fields.oeuvre1}
                            data-item-price={artiste.fields.prix1}
                            data-item-url="/bizarrebazar"
                            data-item-name={artiste.fields.oeuvre1}
                            data-item-custom1-name="Prix libre / Faire un don :"
                            data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                            data-item-weight={
                              typeof artiste.fields.poidsOeuvre1 == undefined
                                ? 0
                                : artiste.fields.poidsOeuvre1
                            }
                          >
                            Ajouter au panier
                          </button>
                        )}
                      </div>
                    )}
                    {//oeuvre 2 }
                    {artiste.fields.oeuvre2 && (
                      <div>
                        {artiste.fields.illustrationOeuvre2 && (
                          <Carousel
                            controls={
                              artiste.fields.illustrationOeuvre2.length < 2
                                ? false
                                : true
                            }
                            justify-self="center"
                            align-self="center"
                            control-prev-icon-color="invert(100%)"
                            control-next-icon-color="invert(100%)"
                            indicators={false}
                            touch={true}
                            interval={null}
                          >
                            {artiste.fields.illustrationOeuvre2.map(
                              (oeuvre, i) => (
                                <Carousel.Item key={i}>
                                  <img
                                    src={
                                      artiste.fields.illustrationOeuvre2[i].url
                                    }
                                    className="tailleImage"
                                  />
                                </Carousel.Item>
                              )
                            )}
                          </Carousel>
                        )}
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
                          data-item-name={artiste.fields.oeuvre2}
                          data-item-custom1-name="Prix libre / Faire un don :"
                          data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                          data-item-weight={
                            typeof artiste.fields.poidsOeuvre1 == undefined
                              ? 0
                              : artiste.fields.poidsOeuvre1
                          }
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    )}
                    { //oeuvre 3 }
                    {artiste.fields.titreOeuvre3 && (
                      <div>
                        {artiste.fields.illustrationOeuvre3 && (
                          <Carousel
                            controls={
                              artiste.fields.illustrationOeuvre2.length < 2
                                ? false
                                : true
                            }
                            justify-self="center"
                            align-self="center"
                            control-prev-icon-color="invert(100%)"
                            control-next-icon-color="invert(100%)"
                            indicators={false}
                            touch={true}
                            interval={null}
                          >
                            {artiste.fields.illustrationOeuvre3.map(
                              (oeuvre, i) => (
                                <Carousel.Item key={i}>
                                  <img
                                    src={
                                      artiste.fields.illustrationOeuvre3[i].url
                                    }
                                    className="tailleImage"
                                  />
                                </Carousel.Item>
                              )
                            )}
                          </Carousel>
                        )}
                        <p>{artiste.fields.titreOeuvre3}</p>
                        <Markdown
                          source={artiste.fields.descriptionOeuvre3}
                          escapeHtml={true}
                        />
                        <p>{artiste.fields.prixOeuvre3} euros</p>

                        <button
                          className="snipcart-add-item"
                          data-item-id={artiste.fields.titreOeuvre3}
                          data-item-price={artiste.fields.prixOeuvre3}
                          data-item-url="/bizarrebazar"
                          data-item-name={artiste.fields.titreOeuvre3}
                          data-item-custom1-name="Prix libre / Faire un don :"
                          data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                          data-item-weight={
                            typeof artiste.fields.poidsOeuvre1 == undefined
                              ? 0
                              : artiste.fields.poidsOeuvre1
                          }
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    )}{" "}
                    {//oeuvre 4}
                    {artiste.fields.titreOeuvre3 && (
                      <div>
                        {artiste.fields.illustrationOeuvre4 && (
                          <Carousel
                            controls={
                              artiste.fields.illustrationOeuvre4.length < 2
                                ? false
                                : true
                            }
                            justify-self="center"
                            align-self="center"
                            control-prev-icon-color="invert(100%)"
                            control-next-icon-color="invert(100%)"
                            indicators={false}
                            touch={true}
                            interval={null}
                          >
                            {artiste.fields.illustrationOeuvre4.map(
                              (oeuvre, i) => (
                                <Carousel.Item key={i}>
                                  <img
                                    src={
                                      artiste.fields.illustrationOeuvre4[i].url
                                    }
                                    className="tailleImage"
                                  />
                                </Carousel.Item>
                              )
                            )}
                          </Carousel>
                        )}
                        <p>{artiste.fields.titreOeuvre4}</p>
                        <Markdown
                          source={artiste.fields.descriptionOeuvre4}
                          escapeHtml={true}
                        />
                        <p>{artiste.fields.prixOeuvre4} euros</p>

                        <button
                          className="snipcart-add-item"
                          data-item-id={artiste.fields.titreOeuvre4}
                          data-item-price={artiste.fields.prixOeuvre4}
                          data-item-url="/bizarrebazar"
                          data-item-name={artiste.fields.titreOeuvre4}
                          data-item-custom1-name="Prix libre / Faire un don :"
                          data-item-custom1-options="0 euros [+0.00] | 2 euros[+2.00]|5 euros[+5.00]|10 euros[+10.00]|15 euros[+15.00]"
                          data-item-weight={
                            typeof artiste.fields.poidsOeuvre4 == undefined
                              ? 0
                              : artiste.fields.poidsOeuvre4
                          }
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    )}{" "}
                  </div>
                </div>
              ))}
            </div>*/}
          </div>
        </Layout>

        <div>
          <div></div>
        </div>
      </div>
    //</html>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artistes = await client
    .getEntries({ content_type: "artiste" })
    .then((response) => response.items);

  return {
    props: {
      artistes,
    },
  };
}
