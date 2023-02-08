const Search = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" />
      <button type="submit">Enter</button>
    </form>
  );
};

export default Search;