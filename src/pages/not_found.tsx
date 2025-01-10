import {Link} from 'react-router-dom';
import {Fragment} from 'react';

function NotFound() {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to="/">Go back</Link>
    </Fragment>
  );
}

export default NotFound;
