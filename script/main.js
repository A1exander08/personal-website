const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains itsAlex it will be returned and below of this code will not run
  if (document.cookie.includes("itsAlex")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy = itsAlex; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
