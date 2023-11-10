import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/israelbulcaotavares.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:13h' dateTime='2023-09-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>

                <p> Fala galera! 👋</p>

                <p> Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento de.....
                    👉 jane.design/doctorcare</p>

                <p> #novoprojeto #nlw #rocketseat</p>

            </div>

        </article>
    )
}