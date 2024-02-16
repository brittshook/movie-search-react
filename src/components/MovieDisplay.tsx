type Props = {
  movie: { Title: string; Rated: string; Plot: string; Poster: string } | null;
};

export const MovieDisplay = ({ movie }: Props) => {
  if (movie) {
    return (
      <div>
        <img src={movie.Poster} alt={movie.Title} />
        <div>
          <h2>{movie.Title}</h2>
          <div>{movie.Rated}</div>
        </div>
        <p>{movie.Plot}</p>
      </div>
    );
  }
};
