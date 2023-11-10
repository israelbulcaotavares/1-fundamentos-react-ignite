import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

import styles from './App.module.css' 
import './global.css'


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Israel Tavares"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto quis porro nobis velit doloremque culpa aperiam est quidem. Totam sit sint perferendis alias maiores ab nisi inventore sunt doloribus." />

          <Post
            author="Raphael Tavares"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto quis porro nobis velit doloremque culpa aperiam est quidem. Totam sit sint perferendis alias maiores ab nisi inventore sunt doloribus." />

        </main>
      </div>
    </div>
  )
}

