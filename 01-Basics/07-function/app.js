/*// 
Often used to protect your variable form other programs.
//*/

/*
function say(str){
  let msg;
  msg = str;
  console.log(msg);
}
*/

/*
say = function(str){
  let msg;
  msg = str;
  console.log(msg);
};
*/

// say('hello');

(function(str){
  let msg;
  msg = str;
  console.log(msg);
}('hello'));

console.log(msg);