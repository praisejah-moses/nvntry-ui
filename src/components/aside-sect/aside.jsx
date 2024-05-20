import Brand from "./comp/brand";
import Logout from "./comp/logout";
import Navigation from "./comp/nav";

function Aside() {
  return (
    <div className=" w-[15%] p-10 text-white h-[100vh] bg-[#212227]" >
      <div className="h-[100%] relative flex flex-col" >
        <Brand/>
        <Navigation/>
        <Logout/>
      </div>
    </div>
  );
}

export default Aside;