const ListItem = ({ item, changeStatus }) => (
  <div className="list-item" onClick={changeStatus}>
    <span>{item.id}</span>
    <h5>{item.title}</h5>
    <h6>{item.status}</h6>
  </div>
);

export default ListItem;
