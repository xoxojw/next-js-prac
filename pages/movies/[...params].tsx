import Seo from "@/components/Seo";
import { GetStaticPropsContext } from "next";
// import { useRouter } from "next/router";
import React from "react";

interface DetailProps {
  params: [string, string];
}

const Detail = ({ params }: DetailProps) => {
  // router.query를 보면 파일명에서 설정해준 movieId가 key값으로 들어가있음
  const [title, id] = params || [];
  return (
      <div>
        <Seo title={title} />
        <h4>{title}</h4>
      </div>
  );
};

export default Detail;

interface ParamsProps {
  params: {
    params: GetStaticPropsContext
  }
};

// 1. URL에 들어있는 영화제목을 사용하여 SEO 최적화
// 2. 유저가 접속하기 전에 <title></title> 제목을 변경해서 보여주고 싶을 때
export const getStaticProps = async ({params: { params }}: ParamsProps) => {
  return {
      props: { params },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: 'blocking', // 다른 경로로의 접근은 서버 사이드에서 대기
  };
};