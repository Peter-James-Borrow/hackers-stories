

const Item = (props) => {

  return (
<li>
    <a href={props.item.url}>{props.item.title}</a>
    <span> {props.item.author}</span>
    <span> {props.item.num_comments}</span>
    <span>{props.item.points}</span>
</li>
)}
export default Item
 
  