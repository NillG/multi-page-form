$(document).ready(function () {
    showTab(currentTab);
});
let currentTab = 0;// Current tab is set to be the first tab (0)
let currentTabWidth = 20;
let step = 1;

function showTab(n) {
    // This function will display the specified tab of the form ...
    const x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "block";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // if (n === 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    fixStepIndicator(n);
}

// function validateForm() {
//     // This function deals with validation of the form fields
//     var x, y, i, valid = true;
//     x = document.getElementsByClassName("tab");
//     y = x[currentTab].getElementsByTagName("input");
//     // A loop that checks every input field in the current tab:
//     for (i = 0; i < y.length; i++) {
//         if (y[i].required) {
//             if(y[i].classList.contains('form-check-input')){
//
//             }
//             // If a field is empty...
//             if (y[i].value === '') {
//                 // add an "invalid" class to the field:
//                 if (!y[i].classList.contains('invalid')) {
//                     y[i].className += " invalid"
//                 }
//                 // and set the current valid status to false:
//                 valid = false;
//             } else {
//                 y[i].classList.remove('invalid')
//             }
//         }
//
//     }
//
//     return valid; // return the valid status
// }

function fixStepIndicator(n) {
    const x = document.getElementsByClassName("progress");
    step = currentTab + 1;
    if (n === 1) {
        currentTabWidth += 0.2 * 100;
        x[0].style.width = currentTabWidth + '%';
    } else if (n === -1) {
        currentTabWidth -= 0.2 * 100;
        x[0].style.width = currentTabWidth + '%';
    } else {
        return false;
    }
    document.getElementsByClassName('step-number')[0].innerHTML = 'step ' + step +' out of 5';
}

function enableRow(target) {
    const row = target.parentNode.parentNode.parentNode;
    const tags = row.getElementsByTagName('input');
    Object.values(tags).forEach(function (item, index) {
        if (index !== 0) {
            item.disabled = !target.checked;
        }
    });
}