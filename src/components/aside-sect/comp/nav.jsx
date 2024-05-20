'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

function Navigation() {
  const links = [
    {
      label: 'Overview',
      path: '/',
      icon_w: 'clipboard-solid.svg',
      icon_b:'clipboard-solid copy.svg'
    },
    {
      label: 'Products',
      path: '/products',
      icon_w: 'box-solid.svg',
      icon_b:'box-solid copy.svg'
    },
    {
      label: 'Patrons',
      path: '/patrons',
      icon_w: 'user-tie-solid.svg',
      icon_b:'user-tie-solid copy.svg'
    }
  ]

  const pathname = usePathname();

  return (
    <div className="mt-[80px]" >
      <ul className="flex flex-col space-y-14" >
      {links.map(link => {
            const isActive = pathname === link.path;
            return (
        <li className= {isActive ?' text-black rounded-full p-2	flex w-[200px] space-x-2  bg-[#F2F5F8]' : undefined+ " flex space-x-2"}>
          <Image
            src={isActive ?link.icon_b:link.icon_w}
            width={20}
            height={20}
            alt="icon"
          />  
          <Link href={link.path}>
              { link.label }
          </Link>        
        </li>
        )
      })}

        {/* <li className="flex space-x-2" >
          <Image
            src={'box-solid.svg'}
            width={20}
            height={20}
            alt="icon"
          />  
          <span>Products</span>
        </li> 
        <li className="flex space-x-2" >
          <Image
            src={'user-tie-solid.svg'}
            width={20}
            height={20}
            alt="icon"
          />  
          <span>Patrons</span>
        </li>      */}
      </ul>
    </div>
  );
}

export default Navigation;