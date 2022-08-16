const list = [
    {
      title: 'React',
      url: 'https://react.js.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]


const List = () => {
  return (
    <div>
         <ul>
      {list.map(function(item) {
        return <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
          <span> {item.author}</span>
          <span> {item.num_comments}</span>
          <span>{item.points}</span>
        
        </li>
      })}
    </ul>
    </div>
  )
}

export default List