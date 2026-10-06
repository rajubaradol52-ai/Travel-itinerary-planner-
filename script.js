// Load saved data when the page opens
document.addEventListener("DOMContentLoaded", function () {
    loadPlans();
    loadBudget();
});

function addPlan() {
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travelDate").value;
    const activity = document.getElementById("activity").value;

    if (destination === "" || travelDate === "" || activity === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Get existing plans
    let plans = JSON.parse(localStorage.getItem("travelPlans")) || [];

    // Add new plan
    plans.push({
        destination: destination,
        travelDate: travelDate,
        activity: activity
    });

    // Save plans
    localStorage.setItem("travelPlans", JSON.stringify(plans));

    // Display plans
    displayPlans(plans);

    // Clear input fields
    document.getElementById("destination").value = "";
    document.getElementById("travelDate").value = "";
    document.getElementById("activity").value = "";
}

function displayPlans(plans) {
    const plansContainer = document.getElementById("plans");

    plansContainer.innerHTML = "";

    if (plans.length === 0) {
        plansContainer.innerHTML =
            '<p class="empty">No travel plans added yet.</p>';
        return;
    }

    plans.forEach(function (plan, index) {
        const planDiv = document.createElement("div");
        planDiv.className = "plan";

        planDiv.innerHTML = `
            <h3>📍 ${plan.destination}</h3>
            <p><strong>Date:</strong> ${plan.travelDate}</p>
            <p><strong>Activity:</strong> ${plan.activity}</p>
            <button class="delete-btn" onclick="deletePlan(${index})">
                Delete
            </button>
        `;

        plansContainer.appendChild(planDiv);
    });
}

function deletePlan(index) {
    let plans = JSON.parse(localStorage.getItem("travelPlans")) || [];

    // Remove selected plan
    plans.splice(index, 1);

    // Save updated plans
    localStorage.setItem("travelPlans", JSON.stringify(plans));

    // Display updated plans
    displayPlans(plans);
}

function loadPlans() {
    const plans = JSON.parse(localStorage.getItem("travelPlans")) || [];
    displayPlans(plans);
}

function showBudget() {
    const budget = document.getElementById("budget").value;
    const result = document.getElementById("budgetResult");

    if (budget === "") {
        result.textContent = "Please enter your budget.";
        return;
    }

    // Save budget
    localStorage.setItem("tripBudget", budget);

    result.textContent = "Your trip budget is ₹" + budget;
}

function loadBudget() {
    const savedBudget = localStorage.getItem("tripBudget");
    const result = document.getElementById("budgetResult");
    const budgetInput = document.getElementById("budget");

    if (savedBudget !== null) {
        budgetInput.value = savedBudget;
        result.textContent = "Your trip budget is ₹" + savedBudget;
    }
}
