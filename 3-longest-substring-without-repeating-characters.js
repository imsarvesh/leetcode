/* Given a string s, find the length of the longest substring without repeating characters. */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hash = new Set();

  let longest = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (hash.has(currentChar)) {
      current = 0;
      hash.clear();
    } else {
      current++;
      hash.add(currentChar);
    }
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
