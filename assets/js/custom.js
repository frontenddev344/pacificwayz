const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


$('.morelesss-button').click(function() {
    var $this = $(this);
    $this.closest('.golf-text').find('.moretextt').slideToggle(); // Toggle the specific text associated with this button
    if ($this.text() == "Read More") {
      $this.text("Read Less");
    } else {
      $this.text("Read More");
    }
  });