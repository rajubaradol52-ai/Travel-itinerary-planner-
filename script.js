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
}
function showBudget() {
    const budget = document.getElementById("budget").value;
    const result = document.getElementById("budgetResult");

    if (budget === "") {
        result.textContent = "Please enter your budget.";
        return;
    }

    result.textContent = "Your trip budget is ₹" + budget;
}
