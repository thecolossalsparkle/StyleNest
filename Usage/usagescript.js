function submitSurvey() {
    const condition = document.getElementById('condition').value;
    const usageStatus = document.getElementById('usageStatus').value;
    const durationValue = document.getElementById('durationValue').value;
    const durationUnit = document.getElementById('durationUnit').value;

    if (durationValue === "") {
        alert("Please enter a valid duration.");
        return;
    }

    const result = `
        Condition of Apparel: ${condition}\n
        Usage Status: ${usageStatus}\n
        Duration Owned: ${durationValue} ${durationUnit}
    `;

    alert("Survey Submitted!\n" + result);
}
