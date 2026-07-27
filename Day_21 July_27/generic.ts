/* 
function funGen(para1: number, para2: string): void {
  console.log(para1, para2);
}

funGen(1, "Hi");
*/

function funGen<p, q>(para1: p, para2: q): void {
  console.log(para1, para2);
}

funGen<number, string>(1, "Hi");
