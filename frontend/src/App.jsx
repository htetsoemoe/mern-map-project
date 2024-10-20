import React, { useEffect, useState } from 'react'
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { format } from 'timeago.js'
import axios from 'axios'

const App = () => {

  const ENV_MAPTILER_KEY = import.meta.env.VITE_MAPTILER
  const MY_MAPTILER_KEY = `https://api.maptiler.com/maps/streets/style.json?key=${ENV_MAPTILER_KEY}`

  const [currentPlace, setCurrentPlace] = useState(null)
  const [pins, setPins] = useState([])
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

  const handleShopClicked = (id, lat, lng) => {
    setCurrentPlace(id)
    setViewPort({
      ...viewPort,
      latitude: lat,
      longitude: lng,
    })
  }

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("http://localhost:3500/api/v1/pins")
        setPins(allPins.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPins()
  }, [])

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
        {pins.map((pin) => (
          <div key={pin._id}>
            <Marker
              longitude={pin.lng}
              latitude={pin.lat}
            >
              <img
                src="store.png" alt="marker" style={{ width: 30, height: 30 }}
                onClick={() => handleShopClicked(pin._id, pin.lat, pin.lng)}
              />
            </Marker>
            {/* When user click on marker */}
            {pin._id === currentPlace && (
              <Popup
                key={pin._id}
                longitude={pin.lng}
                latitude={pin.lat}
                onClose={() => setCurrentPlace(null)}
                closeButton={true}
                closeOnClick={false}
                anchor='left'
              >
                <div style={{ backgroundColor: 'cyan', padding: 10, borderRadius: 10 }}>
                  <h3>{pin.title}</h3>
                  <p style={{ fontWeight: 'bold' }}>{pin.description}</p>
                  {Array(pin.rating).fill(<img src='star.png' alt='star' style={{ width: 20, height: 20 }} />)}
                  <p style={{ fontWeight: 'bold' }}>Created by {pin.username}</p>
                  <p style={{ fontWeight: 'bold' }}>{format(pin.updatedAt)}</p>
                </div>
              </Popup>
            )}
          </div>
        ))}
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
