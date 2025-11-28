// Select all price cells
const priceList = document.querySelectorAll(".prices");

let total = 0;

// Loop through each price and add to total
priceList.forEach(price => {
    const value = parseFloat(price.textContent.trim());
    if (!isNaN(value)) {
        total += value;
    }
});

// Create a new row and cell for total price
const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Make the cell span all columns (optional)
totalCell.colSpan = 3;  
totalCell.textContent = `Total Price: ${total}`;

totalRow.appendChild(totalCell);

// Add the row to the table
table.appendChild(totalRow);
