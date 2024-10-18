import React, { useState } from 'react'
import Map, { Marker } from 'react-map-gl/maplibre';

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
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        initialViewState={viewPort}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={MY_MAPTILER_KEY}
        onDblClick={handleAddPlaceOnDblClick}
      >
        {newPlace && (
          <Marker
            longitude={newPlace.longitude}
            latitude={newPlace.latitude}
            offsetLeft={-3.5 * viewPort.zoom}
            offsetTop={-7 * viewPort.zoom}
          // anchor='bottom'
          >
            <img src="pin.png" alt="marker" style={{ fontSize: 7 * viewPort.zoom }} />
          </Marker>
        )}
      </Map>
    </div>
  )
}

export default App
