const animateButton = (e) => {
  e.preventDefault();

  e.target.classList.remove('animate');  
  e.target.classList.add('animate');

  document.body.classList.add('fade-in');

  setTimeout(function(){
    e.target.classList.remove('animate');
    window.location.href = 'home.html'
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
