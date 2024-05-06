import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen bg-forest-green'>
      <section className='drop-shadow-[0_35px_35px_rgba(34,58,40,1)]'>
        <div className='flex items-center justify-center gap-4 py-8'>
          <div className='relative w-12 h-12'>
            <Image src='/icon.svg' alt='Nvntry logo' fill />
          </div>
          <h1 className='font-semibold text-[32px]'>Nvntry</h1>
        </div>
        <div className='bg-pale-pink h-[220px] flex justify-center items-center'>
          <Image
            src='/assets/day66travel.svg'
            alt=''
            width='230'
            height='155'
          />
        </div>
        <div className='bg-white h-full text-forest-green px-6 py-8'>
          <h3 className='text-xl font-semibold'>
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
                className='mt-2 border border-[#B8D6BF] w-full rounded-lg p-4'
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
                className='mt-2 border border-[#B8D6BF] w-full rounded-lg p-4'
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
      </section>
    </main>
  )
}
