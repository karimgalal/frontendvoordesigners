//Get all add buttons that are in the HTML File
var addButton = document.querySelectorAll(".add-button");

//Old for loop van Docent Koop uitleg
for (var i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function() {
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
        this.src = "img/remove.png";
    } else if (this.classList.contains("add-button")) {
        this.src = "img/add.png";
    }
    countAdded();
  });
}

//Get the first span in the HTML File
var notification = document.querySelectorAll('span')[0];

function countAdded() {
    var added = document.querySelectorAll(".add-button.active").length;

    //insert length to html
    document.querySelector("span").innerHTML = added;

    if (added >= 1) {
          notification.classList.remove('invisible')
      }

    if (added == 0) {
        notification.classList.add('invisible')
    }
  }