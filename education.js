// Array to hold the data for the education and experience
const data = [
    { year: "2020-2021", institution: "St. Johnsbury Academy", description: "Graduated with honors" },
    { year: "2021-2025", institution: "McDaniel College", description: "Majoring in Computer Science" },
    { year: "2024", institution: "Xometry Data Analytics Intern", description: "Used SQL to organize data, performed variance analysis, and forecast future vendor and financial performance" }
];

// Function to render the table dynamically
function renderTable() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.institution}</td>
            <td>${item.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to sort the table by Year or Institution
function sortTable(column) {
    data.sort((a, b) => {
        if (column === 'year') {
            return a.year.localeCompare(b.year);
        } else if (column === 'institution') {
            return a.institution.localeCompare(b.institution);
        }
        return 0;
    });
    renderTable(); // Re-render the table after sorting
}

// Event listeners for sorting
document.querySelector('th:nth-child(1)').addEventListener('click', () => sortTable('year'));  // Sort by Year
document.querySelector('th:nth-child(2)').addEventListener('click', () => sortTable('institution')); // Sort by Institution

// Thumbs up interaction
function handleThumbsUp() {
    const thumbsUpButton = document.querySelector('.thumbs-up');
    thumbsUpButton.textContent = '👍 Thanks for liking my resume!';
    thumbsUpButton.disabled = true; // Disable the button after it has been clicked
}

// Render the table initially
renderTable();

// Add the thumbs up interaction to the button
document.querySelector('.thumbs-up').addEventListener('click', handleThumbsUp);
