
const conferenceForm = document.getElementById('conferenceForm');

        // Error spans
        const nameError = document.getElementById('nameError');
        const locationError = document.getElementById('locationError');
        const startTimeError = document.getElementById('startTimeError');
        const endTimeError = document.getElementById('endTimeError');

        document.addEventListener("DOMContentLoaded", function() {
            const createButton = document.querySelector('.create-btn');
            const underButton = document.querySelector('#under-button');
        
            createButton.addEventListener('click', function() {
                underButton.style.display = 'block';  // Display the box under the button
                setTimeout(function() {
                    underButton.style.display = 'none';  // Hide the box after animation
                }, 1000);  // Hide it after the animation completes (1 second)
            });
        });
        
        conferenceForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent form submission
            
            let isValid = true;

            // Get form values
            const conferenceName = document.getElementById('conference_name').value.trim();
            const location = document.getElementById('location').value.trim();
            const startTime = document.getElementById('start_time').value;
            const endTime = document.getElementById('end_time').value;

            // Reset error messages
            nameError.classList.add('hidden');
            locationError.classList.add('hidden');
            startTimeError.classList.add('hidden');
            endTimeError.classList.add('hidden');

            // Validate inputs
            if (conferenceName === "") {
                nameError.classList.remove('hidden');
                isValid = false;
            }

            if (location === "") {
                locationError.classList.remove('hidden');
                isValid = false;
            }

            if (!startTime || !endTime || new Date(startTime) >= new Date(endTime)) {
                startTimeError.classList.remove('hidden');
                endTimeError.classList.remove('hidden');
                isValid = false;
            }

            if (!isValid) return;

            // Check for time overlap with an API call
            try {
                const response = await fetch('check_conference_overlap.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ start_time: startTime, end_time: endTime })
                });

                const data = await response.json();

                if (data.overlap) {
                    alert('The selected time overlaps with another conference.');
                } else {
                    alert('Conference successfully joined!');
                    conferenceForm.submit(); // Submit the form if everything is valid
                }
            } catch (error) {
                console.error('Error checking overlap:', error);
                alert('An error occurred. Please try again.');
            }
        });