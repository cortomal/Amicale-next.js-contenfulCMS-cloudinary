import React from "react";
import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <div className="flex justify-between px-6 pb-3 LibreBaskerville text-lg border-b border-black py-3">
      <Link href="/listevenements">
        <a className='  px-6 ' >L'Amicale du Futur, 31 rue Sébastien Gryphe Lyon 7e</a>
      </Link>
      <div className="flex justify-around">
        <div className="mr-6">
          <a
            href="https://www.helloasso.com/associations/l-amicale-du-futur/collectes/appel-a-dons"
            target="_blank"
          >
            Appel à dons
          </a>
        </div>
        <div className="mr-6 arkm">
          <Link href="/bizarrebazar">
            <a>Bizarre Bazar</a>
          </Link>
        </div>
        <div className="mr-6">
          <Link href="/publications">
            <a>Publications</a>
          </Link>
        </div>
        <div className="mr-6">
          <Link href="/cantines">
            <a>Horaires</a>
          </Link>
        </div>
        {/* <div className="mr-6">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div> */}
        
      </div>
    </div>
  );
}
