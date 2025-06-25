function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  window.addEventListener('click', function (e) {
    const menu = document.getElementById('dropdownMenu');
    const toggle = document.querySelector('.dropdown-toggle');
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });


  
  document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".main-image");
  const thumbnails = document.querySelectorAll(".thumb");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".main-image");
  const thumbnails = document.querySelectorAll(".thumb");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
  });
});
