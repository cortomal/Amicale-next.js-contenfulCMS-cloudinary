import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Navbar(props) {
  const router = useRouter()

  let bgColor = '' 
  if(router.pathname === '/bizarrebazar'){
    bgColor='#f6f036' 
  }else{bgColor='white'}

  const style = {
    backgroundColor:bgColor
  }


  return (
    <div className={"sticky top-0 flex justify-between px-3 pb-3 LibreBaskerville text-lg border-b border-black py-3 textDecorationNone"} style={style}>
      <Link href="/">
        <a className='textDecorationNone' >L'Amicale du Futur, 31 rue Sébastien Gryphe Lyon 7e</a>
      </Link>
      <div className="flex justify-around">
        <div className="mr-6">
          <a
            href="https://www.helloasso.com/associations/l-amicale-du-futur/collectes/appel-a-dons"
            target="_blank"
            className='textDecorationNone' 
          >
            Appel à dons
          </a>
        </div>
        <div className="mr-6 arkm">
          <Link href="/bizarrebazar">
            <a className='textDecorationNone'  >Bizarre Bazar</a>
          </Link>
        </div>
        {/* <div className="mr-6">
          <Link href="/publications">
            <a>Publications</a>
          </Link>
        </div> */}
        <div className="mr-3">
          <Link href="/cantines">
            <a className='textDecorationNone'  >Horaires/Contact</a>
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
