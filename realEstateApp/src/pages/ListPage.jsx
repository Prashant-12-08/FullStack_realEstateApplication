import { useState, useEffect, useRef } from 'react';
import style from './ListPage.module.css';
import { Spinner } from '@chakra-ui/react';

import Card from '../components/Card';
import Filter from '../components/Filter';
import Map from '../components/Map.jsx';
import { useLocation } from 'react-router-dom';
import { PostLocalHost } from '../lib/PostLocalHost.js';
import { useFetchState } from '../hooks/useFetchState.js';

//7073
const limit = 30;

const ListPage = () => {
  const location = useLocation();
  const [searchPosts, setSearchPost] = useState([]);
  const [dataFetchingState, setDataFetchingState] = useFetchState();
  const [pageNum, setPageNum] = useState(1);
  const inputEl = useRef(null);
  const [error, setError] = useState('');

  // handle scrolling event
  async function handleScrollEvent() {
    const contentHeight = inputEl.current.scrollHeight;
    const viewPortHeight = inputEl.current.clientHeight;

    const scrolled = inputEl.current.scrollTop;
    if (contentHeight - viewPortHeight - scrolled < 50) {
      console.log('load');
      setPageNum((prev) => prev + 1);
    }
  }

  // fetching the data fi intial mount
  useEffect(
    function () {
      async function fetchPost() {
        try {
          setDataFetchingState({ type: 'Loading' });
          const res = await fetch(
            `${PostLocalHost}${location.search}${
              location.search ? '&' : '?'
            }page=${pageNum}&limit=${limit}`,
            {
              method: 'GET',
              credentials: 'include',
            }
          );
          const data = await res.json();
          if (!res.ok) throw new Error(data.message);
          setDataFetchingState({ type: 'Ready' });
          setSearchPost((prev) => [...prev, ...data.data.allPost]);
        } catch (err) {
          setDataFetchingState({ type: 'Error' });
          setError(err.message);
        }
      }
      fetchPost();
    },
    [location, setDataFetchingState, pageNum]
  );

  useEffect(() => {
    const el = inputEl.current;
    el.addEventListener('scroll', handleScrollEvent);
    return function () {
      el.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div className={style.listPage}>
      <div className={style.listContainer}>
        <div className={style.wrapper} ref={inputEl}>
          <Filter handleSearchPost={setSearchPost} />
          {searchPosts.map((el, i) => {
            return <Card item={el} key={i} />;
          })}
          {!dataFetchingState.isLoading && searchPosts.length === 0 ? (
            <h1> No Result Found!</h1>
          ) : null}
          {dataFetchingState.isLoading ? (
            // <Spinner
            //   thickness="4px"
            //   speed="0.65s"
            //   emptyColor="gray.200"
            //   color="blue.500"
            //   size="xl"
            // />
            <h3>Loading...</h3>
          ) : null}
          {dataFetchingState.error ? <h1>{error}</h1> : null}
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map items={searchPosts} />
      </div>
    </div>
  );
};

export default ListPage;
