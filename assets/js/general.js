var count = 0;

function initLoad() {

  setInterval(startSlide, 3000);
}

// Simple funtion to loop through slides
function startSlide() {
  var x = document.getElementById('showcase');

  // Reset count if greater than 2.
  if (count > 2) {
    count = 0;
  }

  count += 1;

  // Make sure to remove all slides before including new
  x.classList.remove(x.classList[1]);
  x.classList.add('slide_' + count);
}
