
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