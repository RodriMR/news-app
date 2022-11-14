import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles?.length === 0 && <p>No tenemos articulos</p>}
        {articles?.length > 0 &&
          articles.map((article, index) => (
            <article key={index}>
              <h2>{article.title}</h2>
              <Image
                width={750}
                height={325}
                layout="responsive"
                src={article.urlToImage}
                alt={`Image for the article ${article.title}`}
              />
              <p>{article.description}</p>
            </article>
          ))}
      </div>
    </PageLayout>
  );
}

//X cantidad de requests -> se ejecuta 1 vez en build time(o para refrescar la pagina)
export async function getStaticProps() {
  const response = await fetch(`
  https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57ddfaac59644728a19cdc685f37b436`);
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

//X cantidad de requests-> se ejecuta X cantidad de veces
//Para datos que sean MUY live
//tiene demasiados datos dinamicos
// export async function getServerSideProps() {
//   const response = await fetch(`
//   https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57ddfaac59644728a19cdc685f37b436`);
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }
