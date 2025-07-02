document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.hamMenu');
    const offScreenMenu = document.querySelector('.offScreenMenu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // Get input references after DOM is loaded
    const firstInput = document.getElementById('firstNameInputId');
    const lastNameInput = document.getElementById('lastNameInputId');
    const emailInput = document.getElementById('emailId');
    const messageInput = document.getElementById('messageId');
    const checkBox = document.getElementById('checkBoxId');
    const submitBtn = document.getElementById('submitButton');

    submitBtn.addEventListener('click', () => {
        if (
            firstInput.value === "" ||
            lastNameInput.value === "" ||
            emailInput.value === "" ||
            messageInput.value === "" ||
            !checkBox.checked
        ) {
            alert('All fields must be filled and checkbox must be checked');
        } else {
            alert(`We'll get in touch with you soon`);
            console.log(
                `This Form has a firstInput of ${firstInput.value}, a lastNameInput of ${lastNameInput.value}, an emailInput of ${emailInput.value}, a messageInput of ${messageInput.value}, a checkBox of ${checkBox.checked}`
            );

            // Clear input values
            firstInput.value = "";
            lastNameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            checkBox.checked = false;
        }
    });
});
