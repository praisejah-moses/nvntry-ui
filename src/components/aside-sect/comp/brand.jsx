import Image from "next/image"

const Brand = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src={'icon.svg'}
        width={38}
        height={38}
        alt="Logo"
      />
      <h1 className='font-semibold text-white flex items-center text-[23px]'><span>Nvntry</span></h1>
    </div>
  )
}

export default Brand
