"use client";

import { Movie } from "@/app/lib/definitions";
import { movies } from "@/app/lib/placeholder-data";
import Breadcrumbs from "@/app/ui/common/breadcrumbs";
import Footer from "@/app/ui/common/footer";
import Header from "@/app/ui/common/header";
import LinearGradient from "@/app/ui/common/linearHeader";
import MovieInfo from "@/app/ui/movies/movie/movieInfo";
import MovieContent from "@/app/ui/movies/movie/movieContent";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Reviews from "@/app/ui/movies/movie/reviews";

export default function MoviePage() {
  const [data, setData] = useState<Movie | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      const movieId = Number(params.id);
      if (!isNaN(movieId)) {
        const selectedMovie = movies.find((item) => item.id === movieId);
        setData(selectedMovie);
      } else {
        setData(undefined);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [params.id]);

  if (!data) {
    return (
      <>
        <LinearGradient>
          <Header />
          <Breadcrumbs name="" />
          <p className="container">Загрузка данных...</p>
        </LinearGradient>
        <MovieContent frames={[]} trailer={""} video={""} />
        <Reviews reviews={[{ reviewer: "", rating: 1, comment: "string" }]} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <LinearGradient>
        <Header />
        <Breadcrumbs name={data.name} />
        <MovieInfo {...data} />
      </LinearGradient>
      <MovieContent
        frames={data.sources.frames}
        trailer={data.sources.trailer}
        video={data.sources.video}
      />
      <Reviews reviews={data.reviews} />
      <Footer />
    </>
  );
}
