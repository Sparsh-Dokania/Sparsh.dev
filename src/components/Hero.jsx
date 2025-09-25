import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop Scene - Hidden on mobile, visible on md and up */}
      <div className="hidden md:block w-full h-full">
        <Spline 
          scene="https://prod.spline.design/A9hFBOm06qcD4Qtx/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
      
      {/* Mobile Scene - Visible on mobile, hidden on md and up */}
      <div className="block md:hidden w-full h-full">
        <Spline 
          scene="https://prod.spline.design/LsD8USp400RePYbK/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
    </div>
  );
}




// https://app.spline.design/community/file/04adce5a-9dc1-440b-96ad-bff190f19471 - published by Sparsh