import React, { useState } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const App = () => {

  const ENV_MAPTILER_KEY = import.meta.env.VITE_MAPTILER
  const MY_MAPTILER_KEY = `https://api.maptiler.com/maps/streets/style.json?key=${ENV_MAPTILER_KEY}`

  const [newPlace, setNewPlace] = useState(null)
  const [viewPort, setViewPort] = useState({
    latitude: 21.939634032513027,
    longitude: 96.09596069717787,
    zoom: 16
  })

  const handleAddPlaceOnDblClick = (e) => {
    const { lng, lat } = e.lngLat
    console.log(`lng: ${lng}, lat: ${lat}`)
    setNewPlace({
      latitude: lat,
      longitude: lng,
    })
  }

  return (
    <div>
      <Map
        mapLib={maplibregl}
        initialViewState={viewPort}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={MY_MAPTILER_KEY}
        onDblClick={handleAddPlaceOnDblClick}
      >
        <NavigationControl position="top-left" />
        {newPlace && (
          <Marker
            longitude={newPlace.longitude}
            latitude={newPlace.latitude}
          >
            <img src="store.png" alt="marker" style={{ width: 30, height: 30 }} />
          </Marker>
        )}
      </Map>
    </div>
  )
}

export default App
