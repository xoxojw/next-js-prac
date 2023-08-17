import Seo from "@/components/Seo";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

export interface MovieProps {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  console.log(results);
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: MovieProps) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.01) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;

// 항상 SSR을 하고 싶은가? - 선택의 문제
// 1) SSR : loading화면 없이 fetch해온 데이터가 유효할 때 화면이 보여지게 하는 것이 좋은지? getServerSideProps()
// 하지만 SSR은 fetch API가 느리면 유저에게 아무것도 보이지 않음
// 2) SSG :또는 static shell 같은 것을 갖고서 유저들에게 loading 화면을 보여준 후에 데이터를 받는게 좋은지? - 아무 설정X이면 SSG가 기본상태
export const getServerSideProps = async ({ }) => {
  // api키 넣어도 됨 - 백엔드(서버)에서만 실행되는 함수이므로
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      // 이 props를 _app.tsx의 { pageProps }에 넣어줌! -> Home 컴포넌트의 props처럼 들어오게 되는 것
      results,
    },
  };
};
