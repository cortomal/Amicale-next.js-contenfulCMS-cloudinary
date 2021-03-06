import React from "react";
import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <div className="">
      <div>L'Amicale du Futur, 31 rue Sébastien Gryphe Lyon 7e</div>
      <div>
          <a
          href="https://www.helloasso.com/associations/l-amicale-du-futur/collectes/appel-a-dons"
          target="_blank"
          >
          Appel à dons
          </a>
      </div>
    </div>





  );
}
