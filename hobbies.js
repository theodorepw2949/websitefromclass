document.addEventListener('DOMContentLoaded', () => {
    // Hobby item hover effect and click-to-expand functionality
    document.querySelectorAll('.hobby-item').forEach(item => {
        // Hover effect
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f4f4f4';  // Change background color on hover
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';  // Revert to original background
        });

        // Click-to-expand functionality
        item.addEventListener('click', () => {
            const infoDiv = item.querySelector('.hobby-info');
            infoDiv.classList.toggle('hidden');  // Toggle visibility of additional information
        });
    });


    // Function to set progress bar width based on proficiency
    function setProgressBar(id, percentage) {
        const progress = document.querySelector(`#${id} .progress`);
        if (progress) {
            progress.style.width = `${percentage}%`;
        }
    }

    // Set the progress bars after the DOM has loaded
    setProgressBar('coding-progress', 95);
    setProgressBar('office-progress', 85);
    setProgressBar('windows-progress', 90);

    // Filter functionality for hobbies
    document.querySelectorAll('.filter-controls button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            document.querySelectorAll('.hobby-item').forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = '';  // Show the hobby item
                } else {
                    item.style.display = 'none';  // Hide the hobby item
                }
            });
        });
    });
});