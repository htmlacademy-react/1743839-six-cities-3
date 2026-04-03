const months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Comment(
  {comment, url, date, rating, name}:{comment: string; url: string; date: string; rating: number; name: string}
) {
  const star = (`${Math.round(rating) * 20}%`);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: star
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}

type CommentProps = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

type ObjProps = {
  id: string;
  reviews: CommentProps[];
}

type ArrayProps = ObjProps[];

function OfferComments ({id, array}: {id: string; array: ArrayProps}) {
  let objCommentsOffer: ObjProps = {};
  objCommentsOffer = array.find((item) => item.id === id);
  const reviewsCommentsOffer = objCommentsOffer.reviews;
  const reviewsComment = reviewsCommentsOffer.map((item: CommentProps) => (
    <Comment
      key = {item.id}
      comment = {item.comment}
      url = {item.user.avatarUrl}
      date = {`${months[new Date(item.date).getMonth()] } ${ new Date(item.date).getFullYear()}`}
      rating = {item.rating}
      name = {item.user.name}
    />
  ));

  return (
    <ul className="reviews__list">
      {reviewsComment}
    </ul>
  );
}

export default OfferComments;
