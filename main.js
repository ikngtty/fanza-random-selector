(function () {
  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  }
  const items = document.getElementsByClassName("mySearchList_item");
  const index = getRandomInt(items.length);
  items[index].firstChild.click();
})();
