import React, {useEffect, useRef, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {Location} from '../../types/location.ts';
import {Nullable} from '../../types/nullable.ts';


type MapController = {
  mapRef: React.MutableRefObject<Nullable<HTMLElement>>;
  center: Location;
}

function useMap({mapRef, center}: MapController): Map | null {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (map) {
      map.setView({lat: center.latitude, lng: center.longitude}, center.zoom);
    }
  }, [map, center]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: center.latitude,
          lng: center.longitude,
        },
        zoom: center.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, center]);
  return map;
}

export default useMap;
