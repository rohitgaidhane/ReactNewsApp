import * as React from 'react';
import styles from './Categories.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight';
import { getAllUsers } from './SearchService';
import { selectCountry } from '../navbar/countrySlice';

const Categories = (): JSX.Element => {
  const [newsList, setNewsList] = React.useState([]);
  const [value, setValue] = React.useState('');
  const { country } = useAppSelector(selectCountry);
  const [selectedNews, setSelectedNews] = React.useState<any>();

  const [isListView, setIsListView] = React.useState(true);

  const categorys = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  React.useEffect(() => {
    getAllUsers(country, value).then((response: any) => {
      setNewsList(response.articles);
    })
  }, [value, country]);
  const gotoDeatailedView = (news: any) => {
    setSelectedNews(news);
    setIsListView(false);
  }
  return (
    <>
    <br />
    <br />
     <div className={styles.cat}>
      {categorys.map((todo: any, index: any) => {
        return (
          <React.Fragment key={index}>
            <button onClick={(event) => setValue(todo)} >{todo}</button>

          </React.Fragment>)
      })}
      </div>
      <br />
    <br />  <br />
    <br />
      <div >


        {isListView ? (<ul className={styles.grid}>
          {newsList.map((todo: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <li className={styles.card} onClick={() => gotoDeatailedView(todo)}>

                  <img width={'200'} src={`${todo.urlToImage}`} alt="image not available" />
                  <br />
                  {todo.title} <AiOutlineRight />

                </li>
              </React.Fragment>
            );
          })}
        </ul>) : (
          <>
            <div className={styles.bigCard}>
              <a className={styles.delete} onClick={() => setIsListView(true)}>&times;</a>
              <img width={'600'} src={`${selectedNews?.urlToImage}`} alt="image not available" />
              <br />
              {selectedNews?.title}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Categories;
