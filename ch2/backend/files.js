// node:fs : 파일 시스템과 상호작용할 수 있는 node.js의 기본 모듈
// writeFileSync : 동기적으로 파일을 쓰는 함수
// readFileSync : 동기적으로 파일을 읽는 함수
import { writeFileSync, readFileSync }from 'node:fs';


const users = [ {name : 'Adam Ondra', email : 'adam.ondra@climb.ing'}]

const usersJson = JSON.stringify(users);

writeFileSync('backend/users.json', usersJson);

const readUsersJson = readFileSync('backend/users.json');
const readUsers = JSON.parse(readUsersJson);

console.log(readUsers)

