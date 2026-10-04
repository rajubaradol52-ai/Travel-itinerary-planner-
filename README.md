<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Itinerary Planner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>✈️ Travel Itinerary Planner</h1>
        <p>Plan your trip easily and organize your travel activities.</p>
    </header>

    <main>
        <section class="planner">
            <h2>Add Travel Plan</h2>

            <input type="text" id="destination"
                   placeholder="Enter destination">

            <input type="date" id="travelDate">

            <input type="text" id="activity"
                   placeholder="Enter activity">

            <button onclick="addPlan()">Add Plan</button>
        </section>

        <section class="itinerary">
            <h2>My Itinerary</h2>
            <div id="plans">
                <p class="empty">No travel plans added yet.</p>
            </div>
        </section>
    </main>

    <footer>
        <p>Travel Itinerary Planner | Team 9: Syntax Squad</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #333;
}

header {
    text-align: center;
    padding: 30px;
    background: #2563eb;
    color: white;
}

header h1 {
    margin-bottom: 10px;
}

main {
    width: 90%;
    max-width: 800px;
    margin: 30px auto;
}

.planner,
.itinerary {
    background: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

button {
    width: 100%;
    padding: 12px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background: #1d4ed8;
}

.plan {
    padding: 15px;
    margin-bottom: 12px;
    background: #eef4ff;
    border-left: 5px solid #2563eb;
    border-radius: 5px;
}

.plan h3 {
    margin-bottom: 8px;
}

.delete-btn {
    margin-top: 10px;
    width: auto;
    padding: 8px 15px;
    background: #dc2626;
}

.delete-btn:hover {
    background: #b91c1c;
}

.empty {
    color: #777;
}

footer {
    text-align: center;
    padding: 20px;
    background: #222;
    color: white;
}
function addPlan() {
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travelDate").value;
    const activity = document.getElementById("activity").value;

    if (destination === "" || travelDate === "" || activity === "") {
        alert("Please fill in all fields.");
        return;
    }

    const plansContainer = document.getElementById("plans");

    const emptyMessage = document.querySelector(".empty");
    if (emptyMessage) {
        emptyMessage.remove();
    }

    const plan = document.createElement("div");
    plan.className = "plan";

    plan.innerHTML = `
        <h3>📍 ${destination}</h3>
        <p><strong>Date:</strong> ${travelDate}</p>
        <p><strong>Activity:</strong> ${activity}</p>
        <button class="delete-btn" onclick="deletePlan(this)">
            Delete
        </button>
    `;

    plansContainer.appendChild(plan);

    document.getElementById("destination").value = "";
    document.getElementById("travelDate").value = "";
    document.getElementById("activity").value = "";
}

function deletePlan(button) {
    button.parentElement.remove();

    const plansContainer = document.getElementById("plans");

    if (plansContainer.children.length === 0) {
        plansContainer.innerHTML =
            '<p class="empty">No travel plans added yet.</p>';
    }
}function addPlan() {
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travelDate").value;
    const activity = document.getElementById("activity").value;

    if (destination === "" || travelDate === "" || activity === "") {
        alert("Please fill in all fields.");
        return;
    }

    const plansContainer = document.getElementById("plans");

    const emptyMessage = document.querySelector(".empty");
    if (emptyMessage) {
        emptyMessage.remove();
    }

    const plan = document.createElement("div");
    plan.className = "plan";

    plan.innerHTML = `
        <h3>📍 ${destination}</h3>
        <p><strong>Date:</strong> ${travelDate}</p>
        <p><strong>Activity:</strong> ${activity}</p>
        <button class="delete-btn" onclick="deletePlan(this)">
            Delete
        </button>
    `;

    plansContainer.appendChild(plan);

    document.getElementById("destination").value = "";
    document.getElementById("travelDate").value = "";
    document.getElementById("activity").value = "";
}

function deletePlan(button) {
    button.parentElement.remove();

    const plansContainer = document.getElementById("plans");

    if (plansContainer.children.length === 0) {
        plansContainer.innerHTML =
            '<p class="empty">No travel plans added yet.</p>';
    }
}
