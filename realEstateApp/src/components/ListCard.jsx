import Card from './Card';
import style from './ListCard.module.css';
import { Spinner } from '@chakra-ui/react';

function ListCard({ posts, loading, err }) {
  return (
    <div className={style.listCard}>
      {posts.map((item, i) => (
        <Card key={i} item={item} />
      ))}
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        ''
      )}
      {err ? <h1>{err.message}</h1> : null}
    </div>
  );
}

export default ListCard;
