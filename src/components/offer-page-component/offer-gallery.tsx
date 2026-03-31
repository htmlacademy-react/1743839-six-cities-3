function OfferGallery ({ts}): JSX.Element {
  const photos = ts.map((item) => (
    <Photo
      url = {item}
    />
  ));
  return (
    <div className="offer__gallery">
      {photos}
    </div>
  );
}

function Photo ({url}: string): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={url} alt="Photo studio" />
    </div>
  );
}

export default OfferGallery;
