import * as React from 'react'
import List from './List';
import Search from './Search';



const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState('React') 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
 
  return (
    <div>
       <h1>My Hacker Stories</h1>
    <Search onSearch={handleSearch} />
    <hr />

    <List list={searchStories} />
   
  </div>
  );
}
      export default App;

      
      

      
