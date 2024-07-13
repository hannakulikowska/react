import './SearchResultItem.scss';
import { Movie } from '../../../services/fetchMovies';

const SearchResultItem: React.FC<Movie> = ({ title, usReleaseDate }) => {
  return (
    <article className="search-result-item">
      <h3 className="search-result-item__name">{title}</h3>
      <p className="search-result-item__description">{usReleaseDate}</p>
    </article>
  );
};

export default SearchResultItem;
