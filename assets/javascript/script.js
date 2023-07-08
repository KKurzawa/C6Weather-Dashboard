// var APIKey = "d92153470384d5553e1bce2444b7e763";
// var city;

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL.data)
// console.log(queryURL.data);
var today = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').text(today);
var currentTime = dayjs().hour();

var searchBtn = document.querySelector('#btn');
var searchInput = document.querySelector('#input');
var cities = [];
 
// for (var i = 1; i <= 10; i++) {
//    key.push(i);
// }

function saveToLocalStorage(){
    // for (var i = 1; i <= 10; i++) {
    //     key.push(i);
    //  }
    
    localStorage.setItem("Cities", JSON.stringify(searchInput.value));
   
}

searchBtn.addEventListener('click', function (event){
    event.preventDefault();
    console.log(searchInput.value);
    // for (let i = 0; searchInput.value; i++){
    //     console.log([i]);
    // }
    var citiesText = searchInput.value.trim();

    // if (citiesText === "") {
    //     return;
    //   }
    cities.push(citiesText);
    // searchInput.value = "";
    saveToLocalStorage();
    
});
//everytime button is clicked index increases
function test() {
    console.log("Test");
};



// function storeTodos() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("cities", JSON.stringify(searchInput.value));
//   }
  
//   // Add submit event to form
//   todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var todoText = todoInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });


for (let i = 0; searchInput.length; i++){

}