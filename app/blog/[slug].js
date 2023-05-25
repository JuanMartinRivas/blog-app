import { dummyDB } from "@/dummyDB"

export async function getStaticPaths() {
    return {
        paths: dummyDB.map((post) => ({
            params: { slug: post.slug } 
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) 
    return {
        props: {
            blogPost: dummyDB.find((post) => post.slug === params.slug)
    }
}

export default function BlogPostPage({ blogPost }) {
    return (
        <div>
            <header>
                <title>{blogPost.title}</title>
            </header>
            <main className={'max-w-4xl mx-auto pt-16'}>
                <h1 className={'text-2xl font-bold text-center'}>{blogPost.title}</h1>
                <p className={'my-2'}>{blogPost.content}</p>
            </main>
        </div>
    )
}