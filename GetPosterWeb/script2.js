const userList = document.getElementById("userList");
const nameInput = document.getElementById("nameInput");
const addUserBtn = document.getElementById("addUserBtn");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET: Fetch users and display
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();

        userList.innerHTML = ""; // clear before showing
        users.forEach(user => {
            const div = document.createElement("div");
            div.textContent = user.name;
            userList.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// POST: Add new user
async function addUser(name) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        });

        const newUser = await response.json();
        console.log("User added:", newUser);
        fetchUsers(); // refresh the list
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

// Event listener for button
addUserBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        addUser(name);
        nameInput.value = "";
    }
});

// Initial fetch
fetchUsers();
