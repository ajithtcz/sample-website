var counters = document.querySelectorAll('.count');
  var speed = 600;
  counters.forEach((counter) => {
    var updateCount = function() {
     var target = +(counter.getAttribute('data-target'));
      var count = parseInt(counter.innerText);
      var increment = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });