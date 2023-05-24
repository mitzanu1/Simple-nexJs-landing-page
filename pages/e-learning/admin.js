import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/main.module.css';
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.min.css"
import PostCard from '../../components/postCard';

export default function AddPost({ posts }) {
  
    const contentRef = useRef();
    const [error, setError] = useState('');
    const [auth, setAuth] = useState(false)
    const [nume, setNume] = useState('')
    const [parola, setParola ] = useState('')
    const [alert, setAlert] = useState('')
    
    const router = useRouter()

    const handlePost = async (e) => {
        e.preventDefault();

        setError('');

        let post = {
            content:contentRef.current.getContent(),
            published: false,
        };

        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        let data = await response.json();

        if (data.success) {        
            router.push('/e-learning')
        } else {
            return setError(data.message);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault()
         if(nume === 'alin' && parola==='123alin')  {
            setAuth(true)
         }else{
            setAlert('Credentiale incorecte')
         } 
    }

    return (
        <div>
           {!auth ? <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Autentificare</h3>
                    <div className="form-group mt-3">
                        <label>Nume</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Introdu nume"
                        value={nume}
                        onChange={e=>setNume(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Parola</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Introdu parola"
                        value={parola}
                        onChange={e=>setParola(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button onClick={(e)=>handleLogin(e)} type="submit" className="btn btn-primary">
                            Trimite
                        </button>
                        <p>{alert}</p>
                    </div>              
                    </div>
                </form>
              </div> : 
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
                    {error &&
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    }                             
                    <div className={styles.formItem}>
                        <label>Creaza postare</label>
                        <Editor
                            apiKey='8bt8ns7s4866qt2zz3ymrvur3yvale0mgs9iusv8ucvl5vuk'
                            onInit={(evt, editor) => contentRef.current = editor}
                            initialValue={null}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                                    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                                    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                            ],
                            toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit" className="btn btn-primary" >
                            Publica Postarea
                        </button>
                        <button onClick={()=>router.push('/e-learning')} type="button" className="btn btn-primary">
                            Inapoi
                        </button>
                    </div>
                </form>
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
            </div>}     
        </div>
    );
}

export async function getServerSideProps(ctx) {

    let response = await fetch(`https://www.iager-itp.ro/api/posts`);
    let data = await response.json();

    return {
        props: {
            posts: data['message'],
        },
    };
}