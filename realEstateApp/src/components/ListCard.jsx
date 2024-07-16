import Card from './Card';
import style from './ListCard.module.css';

function ListCard({ posts }) {
  return (
    <div className={style.listCard}>
      {posts.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
}

export default ListCard;
