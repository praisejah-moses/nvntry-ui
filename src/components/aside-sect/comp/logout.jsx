import Image from "next/image";

function Logout() {
  return (
    <div className="w-full flex justify-center absolute bottom-0">
      <div className="flex  space-x-2" >
        <Image
          src={'right-from-bracket-solid.svg'}
          width={20}
          height={20}
          alt="icon"
        /> 
        <span className=" text-red-600" >Logout</span>
      </div>
      
    </div>
  );
}

export default Logout;