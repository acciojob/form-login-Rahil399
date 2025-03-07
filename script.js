function getFormvalue(event) {
    if (event) event.preventDefault(); // Prevent form refresh

    let firstName = document.querySelector("input[name='fname']").value.trim();
    let lastName = document.querySelector("input[name='lname']").value.trim();

    if (firstName || lastName) {
        alert(`${firstName} ${lastName}`);
    } else {
        alert("Please enter your name.");
    }
}

// Attach event listener to the form instead of using inline onsubmit
document.getElementById("form1").addEventListener("submit", getFormvalue);
