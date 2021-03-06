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
      </Head>
      <main>
        <div className="row">
          <div className="col-4">
            <TodoListContainer />
          </div>
          <div className="col-4">
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