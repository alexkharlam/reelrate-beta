import { motion } from "framer-motion";

import MoviesGrid from "@/components/moviesGrid/MoviesGrid";

function IndexPage({ popularMovies, topRatedMovies }) {
  return (
    <div>
      <main className="container">
        <MoviesGrid title={"Popular last week"} movies={popularMovies} />
        <MoviesGrid title={"Greatest of all time"} movies={topRatedMovies} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // TODO:  error handling fix/check
  try {
    const makeRequest = async function (type) {
      const API_KEY = "81786ac7be5a0c04380a9da815f32e48&";
      const response = await fetch(`
    https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`);

      const data = await response.json();

      if (!response.ok) throw new Error(data.response_message);
      return data;
    };

    const popularMovies = await makeRequest("popular");
    const topRatedMovies = await makeRequest("top_rated");

    return {
      props: { popularMovies, topRatedMovies },
    };
  } catch (err) {
    return { props: { error: err.message } };
  }
}

export default IndexPage;
