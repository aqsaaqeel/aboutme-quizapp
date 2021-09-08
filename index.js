var readlineSync = require ('readline-sync');
var i = 0,score = 0;
console.log("How much do you know me?");
console.log("WARNING!!!\n MAKE SURE YOU ANSWER EVERYTHING IN ONE WORD AND LOWERCASE\n--------\n");
var name = readlineSync.question("Enter your name : ");
console.log("Welcome "+name)
var questions =[{
  question : "What is Aqsa's favorite colour?\n -------\n",
  answer : 'green',
},
{
  question : "How old is Aqsa ?\n -------\n",
  answer : "21",
},
{
  question : "Which year did Aqsa get in a car accident ?\n -------\n",
  answer : "2021",
},
{
  question : "Does Aqsa has a birthmark?\n -------\n",
  answer : "yes",
},
{
  question : "Which instrument Aqsa knows how to play ?\n -------\n",
  answer : "ukulele",
}]
for(i = 0; i < questions.length; i++)
{
  var ques = readlineSync.question(questions[i].question);
  if (ques == questions[i].answer)
  {
    console.log("YOU ARE RIGHT");
    score++;
  }
  else 
  {
    console.log("Wrong");
  }
}
console.log("Your Total score is "+score);
if(score>3)
{
  console.log("You and Aqsa are besties!");
}
else{
  console.log("Such a low score! Shame on you!");
}



