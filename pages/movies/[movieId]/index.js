import Movie from "@/components/movie/Movie";
import { useHttpSingleSearch } from "@/utils/hooks/use-http-single-search";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function MoviePage({ data, error }) {
  if (error) return <p>Can't found anything...</p>;

  return (
    <>
      <Movie rowMovieData={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  //context parameter, where we have req and res objects:
  const id = context.params.movieId;
  const API_KEY = "81786ac7be5a0c04380a9da815f32e48&";
  //fetch data from api
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  if (!response.ok) return { props: { error: data.status_message } };

  return {
    props: { data },
  };
}
export default MoviePage;
