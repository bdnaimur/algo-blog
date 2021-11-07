import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Articles from '../components/Articles';

export default function Home({articles}) {
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Algo Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 my-6">
        {articles.map(article=><Articles key={article.id} article={article}/>)}
      </div>
      </main>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}

