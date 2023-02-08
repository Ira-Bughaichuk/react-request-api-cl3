const StarList = ({ starList, onClick }) => {
  return (
    <ul>
      {starList.map(item => (
        <li
          key={item.name}
          onClick={() => {
            onClick(item);
          }}
        >
          <p>Name:{item.name}</p>
          <p>Gender:{item.gender}</p>
        </li>
      ))}
    </ul>
  );
};

export default StarList;