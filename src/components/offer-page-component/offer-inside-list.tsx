function InsideItem ({inside} : {inside: string}): JSX.Element {
  return (
    <li className="offer__inside-item">
      {inside}
    </li>
  );
}

function OfferInsideList ({ti} : {ti: string[]}): JSX.Element {
  const insides = ti.map((item: string) => (
    <InsideItem
      key = {item}
      inside = {item}
    />
  ));
  return (
    <ul className="offer__inside-list">
      {insides}
    </ul>
  );
}


export default OfferInsideList;
