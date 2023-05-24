import Head from 'next/head';
import styles from '../../styles/main.module.css';
import PostCard from '../../components/postCard';
import Nav from '../../components/nav';

export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>E-Learning</title>
            </Head>
            <div className={styles.main}>
                <Nav />
            </div>

            <div className={styles.container}>
                <h1 style={{textAlign:'center', marginTop:'20px', marginBottom:'50px', fontSize:'50px'}}>E-Learning</h1>

            <main>
                <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                        ) : (
                            <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                                ))}
                        </ul>
                    )}
                </div>
            </main>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {

    let response = await fetch(`https://www.iager-itp.ro//api/posts`);
    let data = await response.json();

    return {
        props: {
            posts: data['message'],
        },
    };
}



