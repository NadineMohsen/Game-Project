var word = '';
var answers = ['javascript', 'this', 'css', 'html'];
var button = document.querySelector('#button1');

button.addEventListener('click', function startGame() {
  var choice = Math.floor(Math.random() * answers.length);
  console.log(answers[choice]);
});
