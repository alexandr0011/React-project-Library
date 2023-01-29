import { CommentRating } from './comment-rating/comment-rating';
import styles from './comment.module.scss';
import defaultAvatar from '../../resources/img/default_reviewer_avatar.png';

export function Comment({ reviews }) {
  const comments = reviews.map((comment) => (
    <div key={comment.id} className={styles.comment_item}>
      <div className={styles.comment_item_header}>
        <div>
          <img src={comment.img ? comment.img : defaultAvatar} alt='review avatar' />
        </div>
        <div>
          <div>{comment.name}</div>
          <div>{comment.date}</div>
        </div>
      </div>
      <CommentRating rating={comment.rating} />
      {comment.message ? <div className={styles.comment_message}>{comment.message}</div> : null}
    </div>
  ));
  
  return <div className={styles.wrapper}>{comments}</div>;
} 