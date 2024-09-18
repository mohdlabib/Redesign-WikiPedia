  let list = document.querySelectorAll("[data-toggle=dropdown]");

  for (let i = 0, s = list.length; i < s; i++) {
      let elm = list[i];

      elm.addEventListener("click", function (e) {
          e.preventDefault();

          for (let j = 0, z = list.length; j < z; j++) {
              if (list[j] !== this) {
                  let otherDropdown = document.querySelector(list[j].getAttribute("data-target"));
                  if (otherDropdown.classList.contains('d-block')) {
                      otherDropdown.classList.remove("slideIn");
                      otherDropdown.classList.add("slideOut");
                      setTimeout(() => {
                          otherDropdown.classList.remove('d-block', 'slideOut');
                      }, 300);
                  }

                  let icon = list[j].querySelector(".dropdown-icon");
                  icon.classList.remove("open");
              }
          }

          let obj = document.querySelector(this.getAttribute("data-target"));
          let icon = this.querySelector(".dropdown-icon");

          if (obj.classList.contains("d-block")) {
              obj.classList.remove("slideIn");
              obj.classList.add("slideOut");
              setTimeout(() => {
                  obj.classList.remove('d-block', 'slideOut');
              }, 300);

              icon.classList.remove("open");
          } else {
              obj.classList.remove("slideOut");
              obj.classList.add("d-block", "slideIn");
              icon.classList.add("open");
          }
      });
  }
