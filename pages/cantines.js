import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Cantine() {
  return (
    <Layout>
      <Head>
        <title>L'Amicale | Horaires</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" grid grid-cols-3  pl-3 LibreBaskerville  height-control">
        <div>
          <div className="border-r border-black height-control pr-3 pt-3">
            <div className="text-4xl font-bold">
              Hors fermeture COVID, le local restaurant est ouvert aux adhérents
              trois jours par semaine:
              <br />
              <div className="mt-6 ">
                <div className="flex justify-between border-t border-black">
                  <div>
                    mercredi :
                    </div>
                    <div>
                      12h00 — 21h 
                      </div> 
                      </div>

                <div className="flex justify-between border-t border-black">
                  <div>
                    jeudi : 
                    </div>
                    <div>
                      12h00 — 21h 
                      </div>
                  </div>
                <div className="flex justify-between border-t border-b border-black">
                  <div>
                    vendredi :
                    </div> 
                    <div>
                       12h00 — 21h
                    </div>
                   
                </div>
              </div>
            </div>

            <div className="mt-6">
              À ces horaires, il est possible de manger bon et pas cher (menu à
              8€, 4€ prix précaires, 12€ prix soutien) les mercredi, jeudi et
              vendredi midi) mais aussi boire un verre, et surtout se passer le
              bonjour∗. Ont lieu en parallèle, au fil de la semaine, des
              rencontres autour de récits et expériences de lutte, des
              discussions à partir d’ouvrages, des ateliers, des expositions,
              quelques concerts, et parfois des projections de films. L’Amicale
              est une association (adhésion à prix libre), et toute activité y
              est organisée sans qu’aucun de ses membres n’y trouve d’intérêt
              financier personnel.
              <br />
              Pour tout renseignement et/ou demande, merci de nous envoyer un
              mail à :<br />
              <div className="text-4xl font-bold mt-6 text-center">
                amicaledufutur(at)riseup.net
              </div>
            </div>

            <div className="mt-6">
              <small>
                ∗ Dans le cadre des mesures sanitaires nous permettant
                l'ouverture, nous serons amenés à restreindre l’entrée pour
                permettre le respect des distances de 1 mètre. Masque
                obligatoire et gel hydro' à l’entrée.
              </small>
            </div>
          </div>
        </div>

        <div className=" border-r border-black pl-1 pt-3">
          <img src="/images/cantine.jpg" height="100%" width="100%" />
        </div>
      </div>
    </Layout>
  );
}
