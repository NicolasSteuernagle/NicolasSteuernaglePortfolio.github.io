var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "What Video Game is Shown in the Image?",
      a: "Halo",
      b: "Destiny",
      c: "Call of Duty",
      answer: "A",
      img: "https://th.bing.com/th/id/OIP.viXe3fmD-0amhRFmLSh8WwHaEo?pid=ImgDet&rs=1"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Banjo-Kazooie",
      b: "Super Smash Bros.",
      c: "The Legend of Zelda",
      answer: "C",
      img: "https://wallpapercave.com/wp/wp2017786.jpg"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Disney Universe",
      b: "Kingdom Hearts",
      c: "Disney Infinity",
      answer: "B",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcxqvpx-dcdbe866-e363-4efc-b836-1d3d3c86e300.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGN4cXZweC1kY2RiZTg2Ni1lMzYzLTRlZmMtYjgzNi0xZDNkM2M4NmUzMDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.42SC_EKuJWwYM5IybRA0MVtPuAZ5Dzz2YUUf5kIdhKM"
    },
  {
      question: "What Video Game is Shown in the Image?",
      a: "Destiny",
      b: "Mass Effect",
      c: "Dead Space",
      answer: "A",
      img: "https://th.bing.com/th/id/OIP.KVQXW1F6zchYqRVDGTx73QHaEK?pid=ImgDet&rs=1"
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
  img = questions[pos].img;
  
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<img src=\"" + img + "\" width = \"250\"  height = \"250\"><br>";

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