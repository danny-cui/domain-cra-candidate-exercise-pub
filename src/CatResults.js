const CatResults = ({ facts }) => {
  return facts.length > 0 && (
    <ul>
      {facts.map((fact) => (
        <li>{fact}</li>
      ))}
    </ul>
  );
};

export default CatResults;