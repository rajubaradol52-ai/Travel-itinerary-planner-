// Load saved data when the page opens
document.addEventListener("DOMContentLoaded", function () {
    loadPlans();
    loadBudget();
    loadExpenses();
});

// ==================== TRAVEL PLANS ====================

function addPlan() {
    const destination = document.getElementById("destination").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    const activity = document.getElementById("activity").value.trim();

    if (destination === "" || travelDate === "" || activity === "") {
        alert("Please fill in all fields.");
        return;
    }

    let plans = JSON.parse(localStorage.getItem("travelPlans")) || [];

    plans.push({
        destination: destination,
        travelDate: travelDate,
        activity: activity
    });

    localStorage.setItem("travelPlans", JSON.stringify(plans));

    displayPlans(plans);

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
                🗑️ Delete
            </button>
        `;

        plansContainer.appendChild(planDiv);
    });
}

function deletePlan(index) {
    let plans = JSON.parse(localStorage.getItem("travelPlans")) || [];

    plans.splice(index, 1);

    localStorage.setItem("travelPlans", JSON.stringify(plans));

    displayPlans(plans);
}

function loadPlans() {
    const plans = JSON.parse(localStorage.getItem("travelPlans")) || [];
    displayPlans(plans);
}


// ==================== BUDGET ====================

function showBudget() {
    const budgetInput = document.getElementById("budget");
    const budget = budgetInput.value;
    const result = document.getElementById("budgetResult");

    if (budget === "" || Number(budget) <= 0) {
        result.textContent = "Please enter a valid budget.";
        return;
    }

    localStorage.setItem("tripBudget", budget);

    result.textContent = "Your trip budget is ₹" + Number(budget).toLocaleString("en-IN");

    updateExpenseSummary();
}

function loadBudget() {
    const savedBudget = localStorage.getItem("tripBudget");
    const result = document.getElementById("budgetResult");
    const budgetInput = document.getElementById("budget");

    if (savedBudget !== null) {
        budgetInput.value = savedBudget;

        result.textContent =
            "Your trip budget is ₹" +
            Number(savedBudget).toLocaleString("en-IN");
    }
}


// ==================== EXPENSE TRACKER ====================

function addExpense() {
    const expenseName =
        document.getElementById("expenseName").value.trim();

    const expenseAmount =
        document.getElementById("expenseAmount").value;

    if (expenseName === "" || expenseAmount === "" || Number(expenseAmount) <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    let expenses =
        JSON.parse(localStorage.getItem("travelExpenses")) || [];

    expenses.push({
        name: expenseName,
        amount: Number(expenseAmount)
    });

    localStorage.setItem(
        "travelExpenses",
        JSON.stringify(expenses)
    );

    displayExpenses(expenses);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    updateExpenseSummary();
}

function displayExpenses(expenses) {
    const expensesContainer =
        document.getElementById("expenses");

    expensesContainer.innerHTML = "";

    if (expenses.length === 0) {
        expensesContainer.innerHTML =
            '<p class="empty">No expenses added yet.</p>';
        return;
    }

    expenses.forEach(function (expense, index) {

        const expenseDiv = document.createElement("div");
        expenseDiv.className = "expense-item";

        expenseDiv.innerHTML = `
            <div>
                <strong>${expense.name}</strong>
                <p>₹${expense.amount.toLocaleString("en-IN")}</p>
            </div>

            <button class="expense-delete"
                    onclick="deleteExpense(${index})">
                🗑️ Delete
            </button>
        `;

        expensesContainer.appendChild(expenseDiv);
    });
}

function deleteExpense(index) {
    let expenses =
        JSON.parse(localStorage.getItem("travelExpenses")) || [];

    expenses.splice(index, 1);

    localStorage.setItem(
        "travelExpenses",
        JSON.stringify(expenses)
    );

    displayExpenses(expenses);

    updateExpenseSummary();
}

function loadExpenses() {
    const expenses =
        JSON.parse(localStorage.getItem("travelExpenses")) || [];

    displayExpenses(expenses);

    updateExpenseSummary();
}


// ==================== SUMMARY ====================

function updateExpenseSummary() {

    const expenses =
        JSON.parse(localStorage.getItem("travelExpenses")) || [];

    const budget =
        Number(localStorage.getItem("tripBudget")) || 0;

    let totalExpenses = 0;

    expenses.forEach(function (expense) {
        totalExpenses += Number(expense.amount);
    });

    const remainingBudget =
        budget - totalExpenses;

    document.getElementById("totalExpenses").textContent =
        "₹" + totalExpenses.toLocaleString("en-IN");

    const remainingElement =
        document.getElementById("remainingBudget");

    remainingElement.textContent =
        "₹" + remainingBudget.toLocaleString("en-IN");

    // Change message when budget is exceeded
    if (remainingBudget < 0) {
        remainingElement.style.color = "#dc2626";
    } else {
        remainingElement.style.color = "#1e3a8a";
    }
}
