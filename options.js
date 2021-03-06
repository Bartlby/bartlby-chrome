// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("bartlby_url");
  var url = select.value;
  localStorage["bartlby_url"] = url;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved. -->" + url;
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["bartlby_url"];
  if (!favorite) {
    return;
  }
  var select = document.getElementById("bartlby_url");
  select.value=favorite;
}



document.addEventListener('DOMContentLoaded', function() {
	console.log("DOM loaded");
    restore_options();
    document.querySelector('#save').addEventListener('click', save_options);
});

