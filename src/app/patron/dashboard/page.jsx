import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const PatronDashboard = () => {
  return (
    <main className={`relative min-w-fit ${spaceGrotesk.className}`}>
      <div className='absolute w-full h-full bg-[url("https://res.cloudinary.com/drgfavmlw/image/upload/v1715205817/Spiral-Chaos_wexgby.svg")] bg-no-repeat bg-cover bg-center md:animate-[pulse_5s_ease-in-out_infinite]'></div>
      <div className='min-h-screen md:flex md:items-center -webkit-backdrop-blur-16'>
        <section className='w-full max-md:h-screen bg-gradient-to-b from-white to-[#EBEBEB] py-10 mx-auto md:rounded-3xl md:w-[512px] md:drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>
          <div className='px-9'>
            <div className='flex items-center justify-between'>
              <div className='w-9/12'>
                <h3 className='text-4xl text-black font-bold'>Product Name</h3>
                <h4 className='text-neutral-400'>Patron Name</h4>
              </div>
              <button className='w-14 h-14 border-4 border-red-50 bg-red-100 rounded-t-full rounded-b-full'>
                <svg
                  className='mx-auto'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54'
                    stroke='#f87171'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15 12H3.62'
                    stroke='#f87171'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.85 8.6499L2.5 11.9999L5.85 15.3499'
                    stroke='#f87171'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className='relative w-64 h-96 md:hidden left-1/2 -translate-x-1/2 mt-10'>
              <Image src='/assets/product.png' alt='Product image' fill />

              <svg
                className='absolute z-20 -bottom-10 left-1/2 -translate-x-1/2 -webkit-backdrop-blur-12 shape'
                width='204'
                height='93'
                viewBox='0 0 205 93'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21.8919 0.5H183.108C195.571 0.5 205.281 11.3099 203.949 23.7016L198.564 73.7803C197.419 84.4277 188.432 92.5 177.723 92.5H27.2768C16.5679 92.5 7.58113 84.4277 6.43624 73.7803L1.05144 23.7015C-0.281002 11.3099 9.42885 0.5 21.8919 0.5Z'
                  fill='url(#paint0_linear_271_150)'
                  fillOpacity='0.6'
                  stroke='url(#paint1_linear_271_150)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_271_150'
                    x1='103'
                    y1='93'
                    x2='77.1787'
                    y2='-145.311'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='white' />
                    <stop offset='1' stopColor='white' stopOpacity='0.53' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_271_150'
                    x1='102.5'
                    y1='0'
                    x2='102.5'
                    y2='93'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='white' />
                    <stop offset='1' stopColor='white' stopOpacity='0.26' />
                  </linearGradient>
                </defs>
              </svg>

              <div className='absolute z-20 text-[40px] text-pine-green font-bold -bottom-[55.5px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200'>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between gap-12'>
            <div className='w-[88px] h-[210px] bg-gradient-to-r from-transparent to-white flex justify-center items-center left-btn'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 7H13'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 13V1'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            <div className='relative flex flex-col justify-center items-center'>
              <Image
                className='hidden md:block absolute -z-10 animate-[pulse_5s_ease-in-out_infinite] blur-md transition-all duration-200'
                src='/assets/100-percent.svg'
                alt=''
                width={112}
                height={112}
              />
              <div className='w-[8rem] h-[8rem] md:-webkit-backdrop-blur-4 rounded-full overflow-clip flex justify-center items-center'>
                <span className='text-neutral-500 font-bold text-5xl transition-all duration-200'>
                  15
                </span>
              </div>
            </div>

            <div className='w-[88px] h-[210px] bg-gradient-to-l from-transparent to-white flex justify-center items-center right-btn'>
              <svg
                width='24'
                height='4'
                viewBox='0 0 14 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 1H13'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>

          <div className='px-9'>
            <button className='w-full h-[94px] rounded-[60px] bg-white mt-5 p-2 font-bold text-xl text-black'>
              Update{' '}
              <span>
                <svg
                  className='inline'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.5 10.6499H9.5'
                    stroke='#292D32'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 8.20996V13.21'
                    stroke='#292D32'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z'
                    stroke='#292D32'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default PatronDashboard
