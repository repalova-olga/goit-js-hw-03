function slugify(title) {
  const slugArr = title.split(" ");
  const slugStr = slugArr.join("-");
  return slugStr.toLowerCase();
}
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
