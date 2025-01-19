import { PostList } from './components/PostList.jsx'

const posts = [
  {
    title: 'Full-Stack React Projects',
    content: "Let's become full-stack Projects",
    author : 'Daniel Bugl'
  },
  { title : 'Hello React!'},
]
export function App() {
  return <PostList posts={posts} />
}