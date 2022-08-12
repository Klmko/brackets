module.exports = function check(str, bracketsConfig) {

  let strbeforreplace = '';
  while (strbeforreplace !== str) {
    strbeforreplace = str;
    bracketsConfig.forEach(element => {
      str = str.replace(element.join(''), '');
    });
  }
  return !str;

}
