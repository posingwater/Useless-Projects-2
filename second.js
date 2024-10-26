document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(this);
    const responses = {};
    let allAnswered = true;

    // Collect responses and check if all questions are answered
    formData.forEach((value, key) => {
        if (!value) {
            allAnswered = false;
        }
        responses[key] = value;
    });

    // Check if all questions were answered
    for (let i = 1; i <= 3; i++) {
        if (!responses[`question${i}`]) {
            allAnswered = false;
            break;
        }
    }

    if (!allAnswered) {
        alert('Please answer all questions before submitting.');
        return;
    }

   });
