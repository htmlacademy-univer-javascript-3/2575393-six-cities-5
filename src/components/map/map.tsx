import {City} from '../../types/city.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/components/use-map.ts';
import leaflet, {Icon, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapVariants} from '../../types/variants.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {Points} from '../../types/point.ts';
import {Nullable} from '../../types/nullable.ts';

type MapProps = {
  city: City;
  points: Points;
  selectedPointId: Nullable<string>;
  variant: MapVariants;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPointId, variant}: MapProps): JSX.Element {
  const sectionClassName = variant === 'main' ? 'cities__map' : 'offer__map';
  const mapRef = useRef(null);
  const map = useMap({mapRef, center: city.location});
  const markers = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          });

        marker
          .setIcon(
            selectedPointId && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      markers.addTo(map);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, markers, selectedPointId]);
  return <section className={sectionClassName} ref={mapRef}></section>;
}

export default Map;
