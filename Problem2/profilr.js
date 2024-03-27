function openEditPopup() {
    // Set the values in the popup textareas
    document.getElementById('editUserName').value = document.getElementById('userName').innerText;
    document.getElementById('editUserEmail').value = document.getElementById('userEmail').innerText;
    document.getElementById('editUserRole').value = document.getElementById('userRole').innerText;

    // Display the popup
    document.getElementById('editPopup').style.display = 'block';
  }

  function saveProfile() {
    // Save the edited values to the main page
    document.getElementById('userName').innerText = document.getElementById('editUserName').value;
    document.getElementById('userEmail').innerText = document.getElementById('editUserEmail').value;
    document.getElementById('userRole').innerText = document.getElementById('editUserRole').value;

    // Save the values to local storage
    saveToLocalStorage('userName', document.getElementById('editUserName').value);
    saveToLocalStorage('userEmail', document.getElementById('editUserEmail').value);
    saveToLocalStorage('userRole', document.getElementById('editUserRole').value);
    saveToLocalStorage('imageSelect', document.getElementById('profilePicture').value);


    // Close the popup
    document.getElementById('editPopup').style.display = 'none';

  }
function openFileExplorer() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', handleFileSelect);
  input.click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector('.profile-picture').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
  // Function to save to local storage
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  // Function to load from local storage
  function loadFromLocalStorage(key) {
    return localStorage.getItem(key);
  }

  function handleFileSelect(event) {
const file = event.target.files[0];
const profilePicture = document.getElementById('profilePicture');
const profileImageText = document.getElementById('profileImageText');

if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
        profilePicture.src = e.target.result;
        profileImageText.style.display = 'none'; // Hide text when an image is selected
    };
    reader.readAsDataURL(file);
}
}

  // Load values from local storage on page load
  document.getElementById('userName').innerText = loadFromLocalStorage('userName') || 'Enter your Name';
  document.getElementById('userEmail').innerText = loadFromLocalStorage('userEmail') || 'Prekshith@example.com';
  document.getElementById('userRole').innerText = loadFromLocalStorage('userRole') || 'Student';
  document.getElementById('userName').innerText = loadFromLocalStorage('userName') || 'Enter your Name';


    // Function to fetch JSON data and display items
    async function fetchData() {
        try {
            const response = await fetch('/json-files/buy.json');
            const jsonData = await response.json();

            displayItems(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display JSON items in a list
    function displayItems(jsonData) {
        var itemList = document.getElementById("itemList");

        // Clear existing list items
        itemList.innerHTML = "";

        // Loop through JSON data and create list items
        jsonData.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item.name; // Adjust this based on your JSON structure

            itemList.appendChild(listItem);
        });
    }

    // Call the function to fetch and display items on page load
    fetchData();