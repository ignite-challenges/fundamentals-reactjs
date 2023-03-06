import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: "https://github.com/mpgxc.png",
      name: "Mateus Garcia",
      role: "Backend developer",
    },
    publishedAt: new Date('2023-02-10 10:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "https://github.com/mpgxc" }
    ]
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web developer",
    },
    publishedAt: new Date('2023-01-10 10:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "https://github.com/diego3g" }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/tiagoolivv.png",
      name: "Tiago Oliveira",
      role: "Mobile developer",
    },
    publishedAt: new Date('2023-02-15 15:30:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "https://github.com/tiagoolivv" }
    ]
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => 
            <Post 
              key={post.id}
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt} 
            />
          )}
        </main>
      </div>
    </div>
  )
}
