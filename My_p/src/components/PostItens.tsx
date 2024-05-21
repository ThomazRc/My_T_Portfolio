import {use, Suspense} from "react"

const fetchPosts = async () => {
    const res = await fetch("https://google.com");
    return res.json();
}

export const PostItem = () => {

    const posts = use(fetchPosts());

    return <>
    <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </>
}

const Posts = () => {
    return (
        <Suspense fallback="Carregando">
            <PostItem />
        </Suspense>
    )

}