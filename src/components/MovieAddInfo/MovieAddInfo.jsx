import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Header, List } from './MovieAddInfo.styled';

const MovieAddInfo = () => {
  return (
    <div>
      <Header>Additional information</Header>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieAddInfo;
