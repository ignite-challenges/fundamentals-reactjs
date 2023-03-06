import { useState } from 'React';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const publishedDateFormatted = format(
    publishedAt, 
    "d 'de' LLLL 'às' HH:mm'h'", 
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt,
    { locale: ptBR, addSuffix: true }
  );

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      comment => comment !== commentToDelete
    );

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') 
            return <p key={line.content}>{line.content}</p>
          return <p key={line.content}><a href={'#'}>{line.content}</a></p>
        })}
        <p>
          <a href="">#rocketseat</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário" 
          name="comment" 
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => 
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
          /> 
        )}
      </div>
    </article>
  )
}