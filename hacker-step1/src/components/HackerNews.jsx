const HackerNews =(props) =>{
  const {newsList} = props;
    return(
    <div>
      {/* [{}{},,,] map으로 꺼낸다 */}
      {newsList && Object.keys(newsList).map(key=> (
        <li>
          {newsList[key].id}/<br />
          {newsList[key].title}/<br />
          user:🧟‍♀️{newsList[key].user}/<br />
          comments_count: 👨‍🎤{newsList[key].comments_count}<br />
          time_ago:🎈{newsList[key].time_ago}
        </li>
      ))
      }
    </div>
  );
}

export default HackerNews;