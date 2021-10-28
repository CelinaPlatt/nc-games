export const trimReviewBody = (reviewBody) => {
  let charCount = 0;
  const bodyArr = reviewBody.split(' ');
  const trimmedArr = [];
  for (let word of bodyArr) {
    if (charCount < 100) {
      charCount = charCount + word.length;
      trimmedArr.push(word);
    }
  }
  let trimmedStr = trimmedArr.join(' ');

  return trimmedStr;
};

export const addUserAvatar = (users, comments) => {
  for (let comment of comments) {
    const author = comment.author;
    for (let user of users) {
      const username = user.username;
      if (author === username) {
        comment.avatar_url = user.avatar_url;
      }
    }
  }

  return comments;
};

export const addUserAvatarToReviews = (users, reviews) => {
  for (let review of reviews) {
    const author = review.owner;

    for (let user of users) {
      const username = user.username;
      if (author === username) {
        review.avatar_url = user.avatar_url;
      }
    }
  }

  return reviews;
};