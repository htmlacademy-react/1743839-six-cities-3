function OfferInsideList ({ti}): JSX.Element {
  const insides = ti.map((item) => (
    <InsideItem
      inside = {item}
    />
  ));
  return (
    <ul className="offer__inside-list">
      {insides}
    </ul>
  );
}

function InsideItem ({inside}: string): JSX.Element {
  return (
    <li className="offer__inside-item">
      {inside}
    </li>
  );
}

export default OfferInsideList;
