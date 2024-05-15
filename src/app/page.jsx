import { Space_Grotesk } from 'next/font/google'

import DefaultLayout from '@/components/DefaultLayout'
import ECommerce from '@/components/Dashboard/E-commerce'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const Home = () => {
  // const menuItems = [
  //   {
  //     name: 'Dashboard',
  //     iconSrc: '/assets/dashboard.svg',
  //     href: '',
  //   },
  //   {
  //     name: 'Products',
  //     iconSrc: '/assets/products.svg',
  //     href: '',
  //   },
  //   {
  //     name: 'Patrons',
  //     iconSrc: '/assets/patrons.svg',
  //     href: '',
  //   },
  // ]

  // return (
  //   <main className={`${spaceGrotesk.className}`}>
  //     <section className='flex gap-5 h-screen max-md:hidden bg-white p-5'>
  //       <nav className='w-14 p-4 flex flex-col justify-between bg-forest-green overflow-clip rounded-xl hover:w-48 transition-all duration-500 drop-shadow-[0_20px_10px_rgba(0,0,0,0.2)]'>
  //         LOGO
  //         <ul className='flex flex-col gap-5'>
  //           {menuItems.map(({ name, iconSrc, href }) => (
  //             <li key={name}>
  //               <Link href={href}>
  //                 <div className='flex gap-4'>
  //                   <Image src={iconSrc} alt='Icon' width={24} height={24} />
  //                   {name}
  //                 </div>
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //         AVATAR
  //       </nav>
  //       <div className='w-full'>
  //         <div className='bg-pale-pink rounded-2xl p-4'>
  //           <h2>Overview</h2>
  //           <div className='flex gap-5'>
  //             <div className='flex gap-4 items-center p-4 bg-forest-green rounded-2xl border-2 border-pine-green'>
  //               <div className='min-w-fit px-2 py-1 bg-sage-green rounded-lg border-2 border-olive-green'>
  //                 <Image
  //                   src='/assets/products.svg'
  //                   alt=''
  //                   width={24}
  //                   height={24}
  //                 />
  //               </div>
  //               <div>
  //                 <p>30</p>
  //                 <p>Products</p>
  //               </div>
  //             </div>
  //             <div className='flex gap-4 items-center p-4 bg-forest-green rounded-2xl border-2 border-pine-green'>
  //               <div className='min-w-fit px-2 py-1 bg-sage-green rounded-lg border-2 border-olive-green'>
  //                 <Image
  //                   src='/assets/patrons.svg'
  //                   alt=''
  //                   width={24}
  //                   height={24}
  //                 />
  //               </div>
  //               <div>
  //                 <p>30</p>
  //                 <p>Patrons</p>
  //               </div>
  //             </div>
  //             <div className='flex gap-4 items-center p-4 bg-forest-green rounded-2xl border-2 border-pine-green'>
  //               <div className='min-w-fit px-2 py-1 bg-sage-green rounded-lg border-2 border-olive-green'>
  //                 <Image
  //                   src='/assets/in-stock.svg'
  //                   alt=''
  //                   width={24}
  //                   height={24}
  //                 />
  //               </div>
  //               <div>
  //                 <p>30</p>
  //                 <p>Total Stock</p>
  //               </div>
  //             </div>
  //             <div className='flex gap-4 items-center p-4 bg-forest-green rounded-2xl border-2 border-pine-green'>
  //               <div className='min-w-fit px-2 py-1 bg-sage-green rounded-lg border-2 border-olive-green'>
  //                 <Image
  //                   src='/assets/stock-out.svg'
  //                   alt=''
  //                   width={24}
  //                   height={24}
  //                 />
  //               </div>
  //               <div>
  //                 <p>3</p>
  //                 <p>Out of Stock</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     <div className='md:hidden'>DESKTOP AND TABLETS ONLY</div>
  //   </main>
  // )

  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  )
}

export default Home
