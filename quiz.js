var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
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
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);