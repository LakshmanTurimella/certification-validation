const validCertifications = [
    { email: 'aarav.kumar@example.com', certificationName: 'Java Developer', domain: 'Java', internshipStatus: 'Completed', completionTime: 6 },
    { email: 'diya.sharma@example.com', certificationName: 'Python Developer', domain: 'Python', internshipStatus: 'In Progress', completionTime: 4 },
    { email: 'ishaan.verma@example.com', certificationName: 'Web Development', domain: 'JavaScript', internshipStatus: 'Not Started', completionTime: 3 },
    { email: 'aanya.gupta@example.com', certificationName: 'Data Science', domain: 'Python', internshipStatus: 'Completed', completionTime: 8 },
    { email: 'arjun.rao@example.com', certificationName: 'Java Developer', domain: 'Java', internshipStatus: 'Completed', completionTime: 6 },
    { email: 'rhea.patel@example.com', certificationName: 'Python Developer', domain: 'Python', internshipStatus: 'In Progress', completionTime: 4 },
    { email: 'kabir.singh@example.com', certificationName: 'Web Development', domain: 'JavaScript', internshipStatus: 'Not Started', completionTime: 3 },
    { email: 'priya.joshi@example.com', certificationName: 'Data Science', domain: 'Python', internshipStatus: 'Completed', completionTime: 8 },
    { email: 'vivaan.mehta@example.com', certificationName: 'Java Developer', domain: 'Java', internshipStatus: 'Completed', completionTime: 6 },
    { email: 'saanvi.bhatia@example.com', certificationName: 'Python Developer', domain: 'Python', internshipStatus: 'In Progress', completionTime: 4 },
    { email: 'shaurya.verma@example.com', certificationName: 'Web Development', domain: 'JavaScript', internshipStatus: 'Not Started', completionTime: 3 },
    { email: 'meera.reddy@example.com', certificationName: 'Data Science', domain: 'Python', internshipStatus: 'Completed', completionTime: 8 },
    { email: 'rohit.gupta@example.com', certificationName: 'Java Developer', domain: 'Java', internshipStatus: 'Completed', completionTime: 6 },
    { email: 'siddharth.patel@example.com', certificationName: 'Python Developer', domain: 'Python', internshipStatus: 'In Progress', completionTime: 4 },
    { email: 'tanvi.shah@example.com', certificationName: 'Web Development', domain: 'JavaScript', internshipStatus: 'Not Started', completionTime: 3 },
    { email: 'karan.nair@example.com', certificationName: 'Data Science', domain: 'Python', internshipStatus: 'Completed', completionTime: 8 },
    { email: 'naina.malik@example.com', certificationName: 'Java Developer', domain: 'Java', internshipStatus: 'Completed', completionTime: 6 },
    { email: 'harsh.sharma@example.com', certificationName: 'Python Developer', domain: 'Python', internshipStatus: 'In Progress', completionTime: 4 },
    { email: 'ananya.bhatt@example.com', certificationName: 'Web Development', domain: 'JavaScript', internshipStatus: 'Not Started', completionTime: 3 },
    { email: 'amit.yadav@example.com', certificationName: 'Data Science', domain: 'Python', internshipStatus: 'Completed', completionTime: 8 }
];

// Initialize a counter to generate unique IDs
let scannerIdCounter = 1001;
let internIdCounter = 2001;

document.getElementById('certificationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById('email').value;
    const certificationName = document.getElementById('certificationName').value;
    const domain = document.getElementById('domain').value;

    // Check if the entered certification details match any in the predefined list
    const validCertification = validCertifications.find(cert => {
        return cert.email.toLowerCase() === email.toLowerCase() &&
               cert.certificationName.toLowerCase() === certificationName.toLowerCase() &&
               cert.domain.toLowerCase() === domain.toLowerCase();
    });

    // Output the result
    let resultMessage = '';
    if (validCertification) {
        const scannerId = `SCAN${scannerIdCounter++}`;
        const internId = `INTERN${internIdCounter++}`;

        resultMessage = `
            <strong>Email:</strong> ${email} <br>
            <strong>Certification Name:</strong> ${certificationName} <br>
            <strong>Domain:</strong> ${domain} <br>
            <strong>Internship Status:</strong> ${validCertification.internshipStatus} <br>
            <strong>Completion Time:</strong> ${validCertification.completionTime} months <br>
            <strong>Intern ID:</strong> ${internId} <br>
            <strong>Scanner ID:</strong> ${scannerId} <br>
            <br>
            <span class="success">Certification is valid!</span>
        `;
    } else {
        resultMessage = `
            <strong>Email:</strong> ${email} <br>
            <strong>Certification Name:</strong> ${certificationName} <br>
            <strong>Domain:</strong> ${domain} <br>
            <br>
            <span class="error">Invalid Certification Details!</span>
        `;
    }

    // Display the result
    document.getElementById('submittedInfo').innerHTML = resultMessage;
    document.getElementById('output').style.display = 'block';
});
