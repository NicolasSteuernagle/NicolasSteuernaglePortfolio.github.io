var position = 0, test, userProgress, question, userAnswer, possibleAnswers, choiceA, choiceB, choiceC, correct = 0;
var myQuestions = [
  {
      question: "What Video Game is Shown in the Image?",
      a: "Halo",
      b: "Destiny",
      c: "Call of Duty",
      answer: "A"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Banjo-Kazooie",
      b: "Super Smash Bros.",
      c: "The Legend of Zelda",
      answer: "C"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Disney Universe",
      b: "Kingdom Hearts",
      c: "Disney Infinity",
      answer: "B"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Destiny",
      b: "Mass Effect",
      c: "Dead Space",
      answer: "A"
    }
  ]; 
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(position >= myQuestions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+myQuestions.length+" questions correct</h2>";
    get("userProgress").innerHTML = "Test completed";
    position = 0;
    correct = 0;
    return false;
  }
  get("userProgress").innerHTML = "Question "+(position+1)+" of "+myQuestions.length;
  
  question = myQuestions[position].question;
  choiceA = myQuestions[position].a;
  choiceB = myQuestions[position].b;
  choiceC = myQuestions[position].c;
  
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+choiceA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+choiceB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+choiceC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  possibleAnswers = document.getElementsByName("possibleAnswers");
  for(var i=0; i<possibleAnswers.length; i++){
    if(possibleAnswers[i].checked){
      userAnswer = possibleAnswers[i].value;
    }
  }
  if(userAnswer == myQuestions[position].answer){
    correct++;
  }
  position++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);