import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

// export function Post(props) {

//estados
// const comments = [
//     1,
//     2,
//     3
// ]

export function Post({ author, publishedAt, content }) {

    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt)
    const [comments, setComments] = useState([
        1,
        2,
        
    ])

    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()
        // console.log("Oi")
        // comments.push(3)

     
        // setComments([1,2,3])
        setComments([...comments, comments.length + 1])

        // console.log(comments)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comments => {
                        return <Comment />
                    })
                }
            </div>

        </article>
    )
}