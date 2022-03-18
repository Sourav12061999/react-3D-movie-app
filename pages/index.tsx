import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MovieSlider from "../components/Moviecard/movieSlider";
import { GetStaticProps, GetStaticPropsContext } from "next";
interface RecentData {
  id: number;
  heading: string;
  about: string;
  image: string;
  rating: number;
  rate_count: number;
}
interface Props {
  popularData: Array<RecentData>;
  recentData: Array<RecentData>;
}
const Home = (props: Props) => {
  console.log(props.popularData);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{/* <MovieSlider /> */}</main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const popularRes = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=84bd2ca964c1790070846809a1b4300b"
  );
  let popularData = await popularRes.json();
  popularData = popularData.results.map((el: any) => {
    return {
      id: el.id,
      heading: el.original_title,
      about: el.overview,
      image: el.poster_path,
      rating: el.vote_average,
      rate_count: el.vote_count,
    };
  });

  const recentRes = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=84bd2ca964c1790070846809a1b4300b&language=en-US&page=1`
  );
  let recentData = await recentRes.json();
  recentData = recentData.results.map((el: any) => {
    return {
      id: el.id,
      heading: el.original_title,
      about: el.overview,
      image: el.poster_path,
      rating: el.vote_average,
      rate_count: el.vote_count,
    };
  });
  return {
    props: {
      popularData: {},
      recentData,
      test: "all ok",
    },
    revalidate: 43200,
  };
};
