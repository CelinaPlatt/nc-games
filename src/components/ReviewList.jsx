import '../styles/ReviewList.css';
import { FaRegHeart, FaCommentAlt } from 'react-icons/fa';
// import { useParams } from 'react-router';

const ReviewList = ({ avatar, username }) => {
  // const { category } = useParams();



  return (
    <section className="reviewList">
      <div className="reviewCard">
        <img src="/images/pexels-cottonbro-4691565.jpg" alt="gameTitle" />
        <section className="reviewCard__details">
          <section className="reviewCard__text">
            <img className="reviewCard__avatar" src={avatar} alt={username} />
            <p>Game Title</p>
          </section>
          <p>Review Body</p>
        </section>
        <section className="buttons">
          <button className="likesBttn">
            <FaCommentAlt /> commts
          </button>
          <button className="likesBttn">
            <FaRegHeart /> votes
          </button>
        </section>
      </div>
    </section>
  );
};

export default ReviewList;
