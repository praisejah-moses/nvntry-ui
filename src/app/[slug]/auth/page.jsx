import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import HeaderLogo from '@/components/header-logo'

const Auth = ({ params: { slug } }) => {
  if (slug !== 'admin' && slug !== 'patron') return notFound()

  return (
    <main className='bg-forest-green'>
      <section className='min-h-screen drop-shadow-[0_35px_35px_rgba(34,58,40,1)]'>
        {/* header logo */}
        <HeaderLogo className='flex gap-4 py-8 items-center justify-center md:hidden' />

        {/* form container */}
        <div className='max-w-7xl sm:w-[600px] sm:mx-auto sm:rounded-2xl md:rounded-3xl md:absolute md:w-10/12 md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:flex overflow-clip transition-all duration-500'>
          {/* illustration */}
          <div className='flex items-center bg-pale-pink p-8 md:order-2 basis-2/3'>
            <div className='relative h-[220px] w-full md:h-2/3'>
              <Image src='/assets/day66travel.svg' alt='' fill />
            </div>
          </div>

          {/* auth form */}
          <div className='bg-white h-full text-forest-green px-6 py-8 md:flex-auto'>
            <HeaderLogo
              className='flex gap-4 py-8 max-md:hidden lg:visible'
              color='#355B3E'
            />

            <h3 className='text-xl font-semibold md:text-2xl'>
              Monitor and manage inventory levels in real-time
            </h3>
            <p className='mt-4 mb-10'>
              Welcome Back, please login to your account
            </p>

            <form action='' className='flex flex-col gap-6'>
              <div>
                <label className='font-semibold text-[#2F3D4C]' htmlFor='email'>
                  Email
                </label>
                <input
                  className='mt-2 border border-[#B8D6BF] w-full rounded-lg p-4 focus-visible:outline-forest-green'
                  type='email'
                  name=''
                  id='email'
                />
              </div>

              <div>
                <label
                  className='font-semibold text-[#2F3D4C]'
                  htmlFor='password'>
                  Password
                </label>
                <input
                  className='mt-2 border border-[#B8D6BF] w-full rounded-lg p-4 focus-visible:outline-forest-green'
                  type='password'
                  name=''
                  id='password'
                />
              </div>

              <div className='flex justify-between'>
                <div>
                  <input
                    className='mr-2'
                    type='checkbox'
                    name=''
                    id='remember-me'
                  />
                  <label htmlFor='remember-me'>Remember me</label>
                </div>
                <Link className='underline' href=''>
                  Forgot password?
                </Link>
              </div>

              <div className='flex gap-6 justify-evenly font-semibold'>
                <button className='bg-pine-green text-white rounded-lg px-4 py-3 w-full'>
                  Login
                </button>
                <button className='border border-pine-green text-pine-green rounded-lg px-4 py-3 w-full'>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Auth
