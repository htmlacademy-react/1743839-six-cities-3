function Photo ({url}: {url: string}): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={url} alt="Photo studio" />
    </div>
  );
}

function OfferGallery ({ts}: {ts: string[]}): JSX.Element {
  const photos = ts.map((item) => (
    <Photo
      key = {item}
      url = {item}
    />
  ));
  return (
    <div className="offer__gallery">
      {photos}
    </div>
  );
}

export default OfferGallery;
