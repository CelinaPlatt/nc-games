
  export const trimDescription = (description) => {
    let charCount = 0;
    const descArr = description.split(' ');
    const trimmedArr = [];
    for (let word of descArr) {
      if (charCount < 100) {
        charCount = charCount + word.length;
        trimmedArr.push(word);
      }
    }
    let trimmedStr = trimmedArr.join(' ');

    return trimmedStr;
  };

  export const addUserAvatar = (users,comments) => {

    for(let comment of comments) {
      const author= comment.author;
      for (let user of users){
        const username = user.username;
        if(author === username) {
          comment.avatar_url = user.avatar_url;
        }
      }
    }
   
    return comments;

  }

  export const addUserAvatarToReviews = (users,obj,prop) => {

    for(let element of obj) {
      const author= element[prop];
     
      for (let user of users){
        const username = user.username;
        if(author === username) {
         
         element.avatar_url = user.avatar_url;
        }
      }
      console.log(element.avatar_url,"<url")
    }


    return obj;

  }