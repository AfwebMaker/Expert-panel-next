import React, { useState, useEffect } from "react";
import Link from "next/link";
// mapir
import Mapir from "mapir-react-component";
//react icons
import { HiLocationMarker } from "react-icons/hi";
// function
import mapOpener from "@/src/functions/mapOpener"

let api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIxMzA5MTA0Y2Q3NGY1OGRhNzk3NzdiOGI1YTY4YTcxYmNiOTRhNTQ4ZGI3OWUxOTg5OWUzMDFiZmFmZjg3OTMyMmY1NWYyNmRiZWI4NzdhIn0.eyJhdWQiOiIyNDk4MyIsImp0aSI6ImIxMzA5MTA0Y2Q3NGY1OGRhNzk3NzdiOGI1YTY4YTcxYmNiOTRhNTQ4ZGI3OWUxOTg5OWUzMDFiZmFmZjg3OTMyMmY1NWYyNmRiZWI4NzdhIiwiaWF0IjoxNzAwMzc3MDE2LCJuYmYiOjE3MDAzNzcwMTYsImV4cCI6MTcwMjg4MjYxNiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.ZSRPXQjTrdpkp6zCdOG3YzzjWEAAnfhHbaSqYvLUBMSUKeEq_zRQfS0tc6XUFAlwzGiMDkgrOXq5aTPBc2R8KobEs-zc8RmYWNcRLpKe2IuQkFle5cUmovBFal18ESbXDUnTtO2CXcbm8YwH_39EF2mXVbltmwFtbwgipKdHBl8AOxek_9ArfFo9uv0rLAXKiAUXoF2plplec3XGo92CjUx8CZjrtqgwttCo3RV4xcw2F8yyEgKygbk0Oo5UVS034Ob3Mur6LQ45Prr09KAhnVqkvDSqqNSs7ya6eRGbjS49StlfmpwXBi-9-TNwH6ZljgVVIOLmJ-AYTiziaJt9Fg';

const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        "x-api-key": api_key, //Mapir api key
        "Mapir-SDK": "reactjs"
      }
    };
  }
});

const CustomMap = ({ mapLocation }) => {
  const [center, setCenter] = useState()

  useEffect(() => {
    setCenter(mapLocation)
  }, [mapLocation])

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden fcc mt-5">
      <Mapir
        containerStyle={{ 'width': '100%', 'height': '100%' }}
        center={center}
        Map={Map}
        dragPan={false}
        dragRotate={false}
        scrollZoom={false}
        zoom={[15]}
      ></Mapir>
      <HiLocationMarker size={40} className="absolute text-red-500 z-20" id="center-marker" />
      {
        center && (
          <Link href={mapOpener(center[0], center[1])} className="bg-transparent w-full h-full absolute top-0 right-0 z-20"></Link>
        )
      }
    </div>
  );
};

export default CustomMap;