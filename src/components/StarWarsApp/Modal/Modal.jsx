const Modal = ({ keyStar }) => {
  return (
    <ul>
      <li >
        <p>{keyStar.name}</p>
        <p>{keyStar.gender}</p>
        <p>{keyStar.birth_year}</p>
        <p>{keyStar.hair_color} </p>
        <p>{keyStar.skin_color}</p>
      </li>
    </ul>
  );
};

export default Modal;