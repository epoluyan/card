import './App.css';
import Card from './components/Card';
import Image from './components/Image';

const test = [
  {
    id: '1',
    title: 'Статья №1',
    text: 'Карлос Рэй Норрис родился 10 марта 1940 года в городке Райан (штат Оклахома)[3]. Отец Норриса — автомеханик, запойный пьяница[4]. Дед Чака был чистокровным ирландцем, а мать происходила из племени индейцев чероки[5][6]. Мать Чака Норриса преподавала в воскресной школе[7].',
    link: {
      address: 'https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D1%80%D0%B8%D1%81,_%D0%A7%D0%B0%D0%BA',
      name: 'Перейти в статью',
    },
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg',
      text: 'Чак Норрис',
    }
  },
  {
    id: '2',
    title: 'Статья №2',
    text: ' российский и американский киноактёр, кинорежиссёр, сценарист, продюсер, писатель, культурист, общественный деятель',
    link: {
      address: '#',
      name: 'Перейти в статью',
    },
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/8/87/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_2013.jpg',
      text: 'Александр Невский',
    }
  }
];

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {test.map((item) => {
            return <Card key={item.id} title={item.title} text={item.text} link={item.link}>
              {item?.image && <Image {...item.image} />}
            </Card>;
          })}
      </div>
    </div>
  );
}

export default App;
