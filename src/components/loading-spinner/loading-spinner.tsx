import {CirclesWithBar} from 'react-loader-spinner';
import {ReactNode} from 'react';
import './loading-spinner.css';

function LoadingSpinner() : ReactNode {
  return (
    <CirclesWithBar
      height='10vh'
      width='10vw'
      color="#206CFF"
      outerCircleColor="#206CFF"
      innerCircleColor="#206CFF"
      barColor="#206CFF"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass="loading-spinner"
      visible
    />
  );
}

export default LoadingSpinner;
