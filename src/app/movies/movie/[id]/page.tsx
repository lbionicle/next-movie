"use client";

import { Movie } from "@/app/lib/definitions";
import { movies } from "@/app/lib/placeholder-data";
import Breadcrumbs from "@/app/ui/common/breadcrumbs";
import Footer from "@/app/ui/common/footer";
import Header from "@/app/ui/common/header";
import MovieInfo from "@/app/ui/movies/movie/movieInfo";
import MovieContent from "@/app/ui/movies/movie/movieContent";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Reviews from "@/app/ui/movies/movie/reviews";
import ReviewsSkeleton, {
  MovieInfoSkeleton,
  BreadcrumbsSkeleton,
  MovieContentSkeleton,
} from "@/app/ui/common/skeleton";

export default function MoviePage() {
  const [data, setData] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      const movieId = Number(params.id);
      if (!isNaN(movieId)) {
        const selectedMovie =
          movies.find((item) => item.id === movieId) || null;
        setData(selectedMovie);
      } else {
        setData(null);
      }
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [params.id]);

  return (
    <>
      <Header />
      {isLoading ? (
        <BreadcrumbsSkeleton />
      ) : data ? (
        <Breadcrumbs name={data.name} />
      ) : (
        notFound()
      )}
      {isLoading ? (
        <MovieInfoSkeleton />
      ) : data ? (
        <MovieInfo {...data} />
      ) : null}
      {isLoading ? (
        <MovieContentSkeleton />
      ) : data ? (
        <MovieContent
          frames={data.sources.frames}
          trailer={data.sources.trailer}
          video={data.sources.video}
        />
      ) : null}
      {isLoading ? (
        <ReviewsSkeleton />
      ) : data ? (
        <Reviews reviews={data.reviews} />
      ) : null}
      <Footer />
    </>
  );
}
