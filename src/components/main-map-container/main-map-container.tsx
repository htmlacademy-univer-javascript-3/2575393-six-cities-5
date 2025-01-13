import Map from '../map/map.tsx';
import {useAppSelector} from '../../hooks/services/redux.ts';
import {Points} from '../../types/point.ts';
import {City} from '../../types/city.ts';
import {getHoverCardId} from '../../store/data-process/data-process.selectors.ts';

type MainMapContainerProps = {
  points: Points;
  activeCity: City;
}

function MainMapContainer({points, activeCity}: MainMapContainerProps) : JSX.Element {
  const hoverCardId = useAppSelector(getHoverCardId);

  return (
    <div className="cities__right-section">
      <Map city={activeCity} points={points} variant={'main'} selectedPointId={hoverCardId}/>
    </div>
  );
}

export default MainMapContainer;
