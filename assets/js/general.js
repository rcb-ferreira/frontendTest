var count = 0;

function initLoad() {

  setInterval(startSlide, 5000);
}

// Simple funtion to loop through slides
function startSlide() {
  var x = document.getElementById('showcase');

  // Reset count if greater than 2.
  if (count > 2) {
    count = 0;
  }

  x.classList.remove(x.classList[1]);
  x.classList.add('slide_' + count);

  count += 1;
}
