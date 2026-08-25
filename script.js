function calculateResult() {

    let name = document.getElementById("studentName").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    if (mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100) {

        alert("Marks must be between 0 and 100");
        return;
    }

    let total = mark1 + mark2 + mark3;

    let average = total / 3;

    let status;

    if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>

        <p><strong>Student:</strong> ${name}</p>

        <p><strong>Total:</strong> ${total}/300</p>

        <p><strong>Average:</strong> ${average.toFixed(2)}</p>

        <p><strong>Status:</strong> ${status}</p>
    `;
}