import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/lucasalvesb.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Alves</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="11 de Maio às 08:13"
          dateTime="2022-05-11 08:13:40"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Hey guys! </p>

        <p> I've just finished another task! </p>

        <p> Isn't that cool? </p>

        <p>
          <a href="">https://github.com/lucasalvesb</a>
        </p>

        <p>
          <a href="">#frontend</a>{' '}
          <a href="">#development</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <button type="submit">Publicar</button>
      </form>
    </article>
  )
}
