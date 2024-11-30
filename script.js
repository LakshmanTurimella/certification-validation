// Sample data for certification validation
const certifications = [
    { email: "ajay.kumar@example.com", certificationName: "AWS Certified Solutions Architect", domain: "AWS" },
    { email: "priya.singh@example.com", certificationName: "Python for Data Science", domain: "Python" },
    { email: "suresh.rao@example.com", certificationName: "Java SE 11 Developer", domain: "Java" },
    { email: "divya.sharma@example.com", certificationName: "JavaScript Mastery", domain: "JavaScript" },
    { email: "raj.murthy@example.com", certificationName: "React Developer Certification", domain: "React" },
    { email: "krishna.patel@example.com", certificationName: "AWS Certified DevOps Engineer", domain: "AWS" },
    { email: "neha.joshi@example.com", certificationName: "Oracle Certified Professional Java", domain: "Java" },
    { email: "mohan.agarwal@example.com", certificationName: "Advanced Python Programming", domain: "Python" },
    { email: "shiva.iyer@example.com", certificationName: "React.js Essentials", domain: "React" },
    { email: "nisha.mishra@example.com", certificationName: "Mastering JavaScript", domain: "JavaScript" },
    { email: "manoj.kumar@example.com", certificationName: "AWS Certified Developer", domain: "AWS" },
    { email: "ravi.singh@example.com", certificationName: "Java Full Stack Developer", domain: "Java" },
    { email: "sangeeta.das@example.com", certificationName: "React Native Developer", domain: "React" },
    { email: "lokesh.ram@example.com", certificationName: "Python for Automation", domain: "Python" },
    { email: "anil.pawar@example.com", certificationName: "JavaScript for Beginners", domain: "JavaScript" },
    { email: "pooja.rathore@example.com", certificationName: "Java Web Developer", domain: "Java" },
    { email: "devika.shukla@example.com", certificationName: "AWS Certified SysOps Administrator", domain: "AWS" },
    { email: "sunil.kumar@example.com", certificationName: "React.js Advanced", domain: "React" },
    { email: "tarun.soni@example.com", certificationName: "Java 8 Developer", domain: "Java" }
];

// Validation function to check if certification exists
function validateCertification(email, certificationName, domain) {
    const result = certifications.find(cert => cert.email === email && cert.certificationName === certificationName && cert.domain === domain);
    return result;
}

// Handle form submission
document.getElementById("certificationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const certificationName = document.getElementById("certificationName").value;
    const domain = document.getElementById("domain").value;
    
    const validationResult = validateCertification(email, certificationName, domain);
    
    const output = document.getElementById("output");
    const submittedInfo = document.getElementById("submittedInfo");
    
    if (validationResult) {
        // Success Case
        submittedInfo.innerHTML = `
            <div class="success">Certification Verified Successfully!</div>
            <p><strong>Email:</strong> ${validationResult.email}</p>
            <p><strong>Certification Name:</strong> ${validationResult.certificationName}</p>
            <p><strong>Domain:</strong> ${validationResult.domain}</p>
            <p><strong>Intern ID:</strong> INT${Math.floor(Math.random() * 1000) + 1}</p>
            <p><strong>Scanner ID:</strong> SCN${Math.floor(Math.random() * 1000) + 1}</p>
        `;
        output.classList.add("fade-in");
        output.style.display = "block";
    } else {
        // Error Case
        submittedInfo.innerHTML = `
            <div class="error">Error: Certification not found. Please try again!</div>
        `;
        output.style.display = "block";
    }
});
