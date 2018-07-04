export const ordinalize = (n) => {
  let s = ['th', 'st', 'nd', 'rd'];
  let v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const getMonthShortName = (m) => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m];
}

export const formatDate = (date) => {
  return `${getMonthShortName(date.getMonth())} ${ordinalize(date.getDate())}, ${date.getFullYear()}`;
}
