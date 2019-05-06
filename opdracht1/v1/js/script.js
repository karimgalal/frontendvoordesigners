//Get all add buttons that are in the HTML File
var addButton = document.querySelectorAll(".add-button");

//Old for loop
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

function countAdded() {
    var likes = document.querySelectorAll(".add-button.active").length;
  
    //insert lenght to html
    document.querySelector(".counter").innerHTML = likes;
  }

