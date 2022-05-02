let str = `
010-1234-5678
thes1866@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g)
)