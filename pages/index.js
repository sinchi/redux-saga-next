import Head from 'next/head'
import Image from 'next/image'
import { connect } from 'react-redux'
import { currentUserSelector } from '../src/selectors'
import styles from '../styles/Home.module.css'
import { TodoListContainer } from '../src/components/todos'
import { PostListContainer } from '../src/components/posts'

const Home =  ({age, firstName, name}) => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/08a0a6bfb3.js" crossOrigin="anonymous"></script>
      </Head>
      <main>
        <div className="row">
          <div className="col-6">
            <TodoListContainer />
          </div>
          <div className="col-6">
            <PostListContainer />
          </div>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

const mapStateToProps = state => {
  const user = currentUserSelector(state);
  return user ? {
    ...user.toJS(),
    fetched: true
  }: {
    fetched: false
  }
}

export default connect(mapStateToProps)(Home)