const checkFavorite = (data) => {
  let bool = false;
  for (let i = 0; i < data.array.length; i++) {
    if (data.id == data.array[i]) {
      bool = true;
    }
  }
  return bool;
};
export default checkFavorite;
