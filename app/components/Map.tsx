"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const address1 = "RUA JOSE DOS REIS, N. 1971, INHAUMA";
  const getCoordinates = async (address: string) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address + ", Brasil")}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`;
    const geocodeResponse = await fetch(geocodeUrl);
    console.log(geocodeResponse);
    const geocodeData = await geocodeResponse.json();
    const aaa = geocodeData.results[0];
    return aaa;
  };

  return (
    <div className="GoogleMap">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
