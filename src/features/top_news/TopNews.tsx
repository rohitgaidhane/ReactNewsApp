import * as React from 'react';
import styles from './TopNews.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight';
import { getAllUsers } from './TopNewService';
import { selectCountry } from '../navbar/countrySlice';

const TopNews = (): JSX.Element => {
  const [newsList, setNewsList] = React.useState([]);
  const [selectedNews, setSelectedNews] = React.useState<any>();

  const [isListView, setIsListView] = React.useState(true);

  const { country } = useAppSelector(selectCountry);

  React.useEffect(() => {
    getAllUsers(country).then((response: any) => {
      setNewsList(response.articles);
    })
  }, [country]);
  const gotoDeatailedView = (news: any) => {
    setSelectedNews(news);
    setIsListView(false);
  }

  return (
    <div className={styles.container}>
    {isListView ?  (<ul className={styles.grid}>
        {newsList.map((todo: any,index:any) => {
          return (
            <React.Fragment key={index}>
              <li className={styles.card} onClick={() => gotoDeatailedView(todo)}>
               
                <img width={'200'} src={`${todo.urlToImage}`} alt="image not available"/>
                <br />
                {todo.title} <AiOutlineRight />
                
              </li>
            </React.Fragment>
          );
        })}
      </ul>):(
        <>
        <div className={styles.bigCard}>
          <a className={styles.delete} onClick={() => setIsListView(true)}>&times;</a>
         <img width={'600'} src={`${selectedNews?.urlToImage}`} alt="image not available"/>
                <br />
                {selectedNews?.title}
                </div>
        </>
      )}
    </div>
  );
};

export default TopNews;
