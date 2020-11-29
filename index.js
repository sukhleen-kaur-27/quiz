// function log(data)
// {
//   console.log(data);
// }

// log(chalk.blue('Hello','World!','Foo','bar','biz','baz'));
// console.log(chalk.red("Hi I'm going to be in red color\n"));
// console.log(chalk.redBright("Hi I'm going to be in redBright color\n"));
// console.log(chalk.green("Hi I'm going to be in green color\n"));
// console.log(chalk.greenBright("Hi I'm going to be in greenBright color\n"));
// console.log(chalk.magenta("Hi I'm going to be in magenta color\n"));
// console.log(chalk.magentaBright("Hi I'm going to be in magentaBright color\n"));
// console.log(chalk.gray("Hi I'm going to be in gray color\n"));
// console.log(chalk.cyan("Hi I'm going to be in cyan color\n"));
// console.log(chalk.cyanBright("Hi I'm going to be in cyanBright color\n"));
// console.log(chalk.blue("Hi I'm going to be in blue color\n"));
// console.log(chalk.blueBright("Hi I'm going to be in blueBright color\n"))
// console.log(chalk.yellow("Hi I'm going to be in yellow color\n"));
// console.log(chalk.yellowBright("Hi I'm going to be in yellowBright color\n"));
// console.log(chalk.whiteBright("Hi I'm going to be in whiteBright color\n"));
// console.log(chalk.white("Hi I'm going to be in white color\n"));
var chalk=require("chalk");
var user= require("readline-sync");
var option=[
  ["Streetfood", "Italian", "Indian", "Chinese"],
  ["24", "23", "21", "25"],
  ["OneDirection", "BTS", "SuperM", "Maroon5"],
  [ "Bali, Indonesia", "Paris, France", "Aurora Lights, Alaska", "Las Vegas, Nevada"],
  ["YES","NO"]
];

score=0;
var num=0;

function log(data)
{
  console.log(data);
}
function play(question, answer)
{
  var user1= require("readline-sync");
  console.log("\n");
  console.log(chalk.red(question,"\n")),
  useranswer=user1.keyInSelect(option[num]);
  num2=option[num];
  console.log(chalk.yellowBright(num2[useranswer]));
  console.log(chalk.blueBright("Answer is ",answer));
  num++;
  if(num2[useranswer]==answer)
  {
    score++;
    switch(score){
    case 1 :
    log(chalk.red("OKAY!!! You got it right!!!!"));
    break;
    case 2:
    log(chalk.red("You got it correct again!!!!"));
    break;
    case 3:
    log(chalk.red("You are doing great!!!!"));
    break;
    default:
    log(chalk.red("You're doing awesome!!!!"));
    }
  } 
  else{
    log(chalk.white("Better luck next time!"));
  }
  console.log(chalk.magenta("Your score is ",chalk.cyan(score),"\n"));
}
var questions=[
  {
    question:"What is sukhleen's favourite food ?:\n",
    answer:"Streetfood"
  },
  {
    question:"What is sukhleen's age?:\n",
    answer:"21"
  },
  {
    question:"What is sukhleen favourite band?:\n",
    answer:"BTS"
  },
  {
    question:"Where would sukhleen like to go for travelling?:\n",
    answer:"Aurora Lights, Alaska"
  },
  {
    question:"Does sukhleen like to sing?Y/N:\n",
    answer:"YES"
  }
];
var user=require("readline-sync");
var username=user.question(chalk.red("What's your name? "))
console.log(chalk`Welcome {green.bold ${username}}!!!!`);
value1=user.keyInYN(chalk.blue("Do you know SUKHLEEN KAUR?"));
if(value1)
{
  log(chalk.yellow("Wow so you know her!!!!!"));
  log(chalk.yellow("Let's see if you can answer some questiosn about her or not!"));
  log(chalk.blueBright("--------------------"));
for(var i=0;i<questions.length;i++)
{
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
  log(chalk.blueBright("--------------------"));
}
}
else{
  log(chalk.green("Oh then let's not start this quiz cause you probably won't know anything about her!"));
}
console.log(chalk.whiteBright("\nYour Final Score Is ",score,"!!!!\n"));


// if(score>highscore)
// {
//   highscore=score;
//   console.log(chalk.red("Your score is the highest score"));  
// }




// var superhero1={
//   name: "super1",
//   costumecolor: "cos1"
// }
// var superhero2={
//   name: "super2",
//   costumecolor: "cos2"
// }
// var superhero3={
//   name: "super3",
//   costumecolor: "cos3"
// }
// var arr=[superhero1,superhero2,superhero3]

// for(var i=0;i<arr.length;i++)
// {
//     log("Name of "+(i+1)+" superhero is "+arr[i].name);
//     log("Costume color of superhero "+(i+1)+" is "+arr[i].costumecolor);
//     log("\n");
// }

// var obj1={
//  val1: "something",
//  val2: "something2"
// }

// console.log(obj1.val2);

  // var readlineSync = require('readline-sync'),
  //   MAX = 60, MIN = 0, value = 30, key;
  // console.log('\n\n' + (new Array(20)).join(' ') +
  //   '[Z] <- -> [X]  FIX: [SPACE]\n');
  // while (true) {
  //   console.log('\x1B[1A\x1B[K|' +
  //     (new Array(value + 1)).join('-') + 'O' +
  //     (new Array(MAX - value + 1)).join('-') + '| ' + value);
  //   key = readlineSync.keyIn('',
  //     {hideEchoBack: true, mask: '', limit: 'zx '});
  //   if (key === 'z') { if (value > MIN) { value--; } }
  //   else if (key === 'x') { if (value < MAX) { value++; } }
  //   else { break; }
  // }
  // console.log('\nA value the user requested: ' + value);

// user= require("readline-sync");
// var1=["yo", "bo", "go", "no", "ho"];
// num1=user.keyInSelect(var1,"what is the type of food that you want to eat right now?");
// console.log("You wanted to eat something like "+var1[num1]);


// var user=require("readline-sync");
// animals=["dog", "cat", "tiger", "lion", "cheetah"];
// index=user.keyInSelect(animals,"Select any animal ");
// console.log("OK "+animals[index]+" goes to your room ");

// // var num= require("readline-sync");
// if(num.keyInYN("do you want to make this change?"))
// {
//   console.log("Module is loading...");
// }
// else{
//   console.log("Module will not be loaded...");
// }

// var readlineSync=require("readline-sync");
// var username= readlineSync.question("What is your name?");
// console.log("Hi "+username+"!!!");
// var food=readlineSync.question("What is your favourite food?",{
//   hideEchoBack: true
// })
// console.log("Hi "+username+"!!!\n"+"Your favourite food is "+food);

// prompt("Enter your name")

// console.log("Sukhleen is here working on some projects!!!!")
// Exercise 1:
// console.log("sukhleen kaur")


suk