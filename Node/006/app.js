const path = require("path");
// import path from 'path';
// ^ 최신문법, package.json에 'type':'module'을 추가하고 .js에서는 구분자 \를 /로 변경하면 실행됨! -> 메ㅔ2.ㅓㄴ

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해주셔야 합니다.

console.log(path);
console.dir(path);

// let filename = 'C:\Users\paullab\Desktop\FE3\GitHub'
// console.log(`디렉토리 : ${path.dirname(filename)}`)
// console.log(`파일이름 : ${path.basename(filename)}`);
// console.log(`확장자 : ${path.extname(filename)}`);

console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, "source")); // 사용하세요.
console.log(path.join(__dirname, "app.js"));
// console.log(__dirname+'/node'); // 사용하지 마세요.
