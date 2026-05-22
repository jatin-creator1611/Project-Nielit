const navlinks = document.querySelectorAll("#.nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility 
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menucloseButton.addEventListener("click", () => menuOpenButton.click
  ());
  // Close menu when the nav links is clicked
navlinks.forEach(link =>{
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints 
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }


});


  function openOrderLink() {
            document.getElementById('orderForm').style.display = 'block';
            // You can replace the line below with the actual link you want to open in a new tab/window
            // window.open('YOUR_ORDER_LINK_HERE', '_blank');
        }

        const menuDropdown = document.getElementById('menu');
        const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
        const orderedItemsList = document.getElementById('orderedItems');

        menuDropdown.addEventListener('change', updateOrder);
        extrasCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateOrder);
        });

        function updateOrder() {
            orderedItemsList.innerHTML = ''; // Clear the current list
            const selectedMenuItem = menuDropdown.value;
            if (selectedMenuItem) {
                const listItem = document.createElement('li');
                listItem.textContent = getItemName(selectedMenuItem);
                orderedItemsList.appendChild(listItem);
            }

            extrasCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const listItem = document.createElement('li');
                    listItem.textContent = getItemName(checkbox.value);
                    orderedItemsList.appendChild(listItem);
                }
            });
        }

        function getItemName(value) {
            switch (value) {
                case 'creamy':
                    return 'Creamy (Price will be shown on order confirmation)';
                case 'choco':
                    return 'Choco (Price will be shown on order confirmation)';
                case 'fries':
                    return 'Fries (Price will be shown on order confirmation)';
                case 'crispy':
                    return 'Crispy(Price will be shown on order confirmation)';
                case 'cheese':
                    return 'Cheese - Rs 50';
                case 'olives':
                    return 'Olives - Rs 30';
                case 'extra_patty':
                    return 'Extra Patty - Rs 80';
                default:
                    return '';
            }
        }