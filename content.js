// Function to remove icons and specified divs
function removeIconsAndDivs() {
    var icons = document.querySelectorAll('svg'); // Select all svg elements
    icons.forEach(function(icon) {
        if (icon.parentNode) {
            icon.parentNode.removeChild(icon); // Remove the icon if it has a parent node
        }
    });

    var divsToRemove = document.querySelectorAll('.flex-shrink-0.flex.flex-col.relative.items-end'); // Select both divs with the specified class
    divsToRemove.forEach(function(div) {
        if (div.parentNode) {
            div.parentNode.removeChild(div); // Remove the div if it has a parent node
        }
    });

    var spansToRemove = document.querySelectorAll('span');
    spansToRemove.forEach(function(span) {
        if (span.textContent.trim() === "Default (GPT-3.5)") {
            if (span.parentNode) {
                span.parentNode.removeChild(span);
            }
        }
    });
}

// Function to continuously monitor and remove icons and divs
function monitorDOMChanges() {
    // Check if the desired elements are present in the DOM
    var icons = document.querySelectorAll('svg');
    var divs = document.querySelectorAll('.flex-shrink-0.flex.flex-col.relative.items-end');

    if (icons.length > 0 && divs.length > 0) {
        // If both icons and divs are present, remove them
        removeIconsAndDivs();
    }

    // Schedule the next check
    requestAnimationFrame(monitorDOMChanges);
}

// Start monitoring DOM changes
monitorDOMChanges();

console.log("Content script loaded");

  
  console.log("Content script loaded");
