import { useState } from 'react';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser'

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    const publishPost = async (postId) => {
        setPublishing(true);
        try {
            await fetch('/api/posts', {
                method: 'PUT',
                body: postId,
            });
            setPublishing(false);
            return router.push(router.asPath);
        } catch (error) {
            return setPublishing(false);
        }
    };

    const deletePost = async (postId) => {
        setDeleting(true);
        try {
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });
            setDeleting(false);
            return router.push(router.asPath);
        } catch (error) {
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{post.title}</h3>
                {Parser(post.content)}
                <br />
                {/* {!post.published ? (
                    <button type="button" onClick={() => publishPost(post._id)}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null} */}
               {router.pathname === '/e-learning/admin' && <button type="button" onClick={() => deletePost(post['_id'])} className='btn btn-primary'>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>}
            </li>
        </>
    );
}