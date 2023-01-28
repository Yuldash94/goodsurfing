import React from 'react'
import { YMaps, Map, Placemark, Clusterer} from '@pbe/react-yandex-maps'
import './Maps.css'

function Maps({point, API_key}) {
  
  return (
    <YMaps query={{ lang: 'en_RU', apikey: API_key }}>  
          <Map className='yandex_map'  
          defaultState={{
          center: [55.78, 49.12],
          zoom: 2,
          controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              
            }}
          >
            {point.map(item => {
              let coord = item.GeoObject.Point.pos.split(' ').reverse()
              return (
                    <Placemark
                    key={item.GeoObject.Point.pos}
                    geometry={coord}
                    properties={{
                      iconContent: item.GeoObject.name,
                      hintContent: item.GeoObject.description,
                      balloonContentBody: `${item.GeoObject.name}  ${item.GeoObject.description}`
                    }}
                    options={{
                      preset: 'islands#blackStretchyIcon',
                      draggable: true,
                    }}
                  />)}
              )}
          </Clusterer>
        </Map>
      </YMaps>  
  )
}

export default Maps