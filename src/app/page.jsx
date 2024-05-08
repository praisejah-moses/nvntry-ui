import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={`relative ${spaceGrotesk.className}`}>
      <div className='absolute w-full h-full sm:bg-[url("/assets/spiral-chaos.svg")] sm:bg-no-repeat sm:bg-cover sm:bg-center sm:animate-[pulse_5s_ease-in-out_infinite]'></div>
      <div className='min-h-screen sm:flex sm:items-center sm:backdrop-blur-lg'>
        <section className='bg-gradient-to-b from-white to-[#EBEBEB] py-10 h-[896px] mx-auto sm:rounded-3xl sm:w-[512px] sm:drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>
          <div className='px-9'>
            <div className='flex items-center justify-between'>
              <h3 className='w-9/12 text-4xl text-black font-bold'>
                Product Name
              </h3>
              <button className='w-14 h-14 border-4 border-[#F3F3F3] bg-neutral-50 rounded-t-full rounded-b-full'>
                <svg
                  className='mx-auto'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                    stroke='#292D32'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22'
                    stroke='#292D32'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className='relative w-64 h-96 left-1/2 -translate-x-1/2 mt-10'>
              <Image src='/assets/product.png' alt='Product image' fill />

              <svg
                className='absolute z-20 -bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-md shape'
                width='209'
                height='93'
                viewBox='0 0 209 93'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g filter='url(#filter0_b_4_1327)'>
                  <path
                    d='M2.5543 23.755C1.19008 11.0677 11.1315 0 23.8919 0H185.108C197.868 0 207.81 11.0677 206.446 23.755L201.061 73.8337C199.889 84.7352 190.688 93 179.723 93H29.2768C18.3125 93 9.11131 84.7352 7.93911 73.8337L2.5543 23.755Z'
                    fill='url(#paint0_linear_4_1327)'
                    fill-opacity='0.6'
                  />
                  <path
                    d='M23.8919 0.5H185.108C197.571 0.5 207.281 11.3099 205.949 23.7016L200.564 73.7803C199.419 84.4277 190.432 92.5 179.723 92.5H29.2768C18.5679 92.5 9.58113 84.4277 8.43624 73.7803L3.05144 23.7015C1.719 11.3099 11.4288 0.5 23.8919 0.5Z'
                    stroke='url(#paint1_linear_4_1327)'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_b_4_1327'
                    x='-21.5711'
                    y='-24'
                    width='252.142'
                    height='141'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'>
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feGaussianBlur in='BackgroundImageFix' stdDeviation='12' />
                    <feComposite
                      in2='SourceAlpha'
                      operator='in'
                      result='effect1_backgroundBlur_4_1327'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_backgroundBlur_4_1327'
                      result='shape'
                    />
                  </filter>
                  <linearGradient
                    id='paint0_linear_4_1327'
                    x1='105'
                    y1='93'
                    x2='79.1787'
                    y2='-145.311'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='white' />
                    <stop offset='1' stopColor='white' stopOpacity='0.53' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_4_1327'
                    x1='104.5'
                    y1='0'
                    x2='104.5'
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

            <div>
              <span className='text-neutral-500 font-bold text-5xl transition-all duration-200'>
                15
              </span>
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

          <div className='h-[94px] rounded-[60px] bg-white mt-5 mx-9 p-2 flex items-center justify-'>
            <p className='font-bold text-xl text-black mx-auto'>
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
                    stroke-width='1.5'
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
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
