//2nd Commit
function validateForm() {
    let isValid = true;
    
    const fields = {
        first_name: document.getElementById('first_name'),
        middle_name: document.getElementById('middle_name'),
        last_name: document.getElementById('last_name'),
        birthday: document.getElementById('birthday'),
        sex: document.getElementById('sex'),
        house_no: document.getElementById('house_no'),
        street: document.getElementById('street'),
        barangay: document.getElementById('barangay'),
        city: document.getElementById('city'),
        province: document.getElementById('province'),
        zip: document.getElementById('zip'),
        phone_number: document.getElementById('phone_number'),
        secondary_phone: document.getElementById('secondary_phone'),
        other_phone: document.getElementById('other_phone'),
        email: document.getElementById('email'),
        secondary_email: document.getElementById('secondary_email'),
        primary_contact: document.getElementById('primary_contact'),
        card_number: document.getElementById('card_number'),
        college: document.getElementById('college'),
        course: document.getElementById('course'),
        registration_date: document.getElementById('registration_date'),
        expiry_date: document.getElementById('expiry_date')
    };

  //2nd Commit
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{11}$/;
    const studentNumberPattern = /^[0-9]{9}$/;

  
    const errorMessages = {
        first_name: "First Name is required.",
        last_name: "Last Name is required.",
        birthday: "Birthday is required.",
        sex: "Please select a gender.",
        city: "City is required.",
        province: "Province is required.",
        zip: "Zip code is required.",
        phone_number: "Phone number must be 11 digits.",
        email: "Please enter a valid email address.",
        card_number: "Student number must be 9 digits.",
        registration_date: "Registration date is required.",
        expiry_date: "Expiry date is required.",
        primary_contact: "Please select a primary contact option.",
        college: "Please select a college.",
        course: "Please select a course."
    };

  
    function markField(field, valid, errorMessage) {
        const errorElement = field.nextElementSibling || createErrorElement(field);
        if (valid) {
            field.classList.remove("invalid");
            errorElement.style.display = 'none';
        } else {
            field.classList.add("invalid");
            errorElement.style.display = 'block';
            errorElement.innerText = errorMessage;
            isValid = false;
        }
    }

    function createErrorElement(field) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
        return errorElement;
    }

    markField(fields.first_name, fields.first_name.value !== "", errorMessages.first_name);
    markField(fields.last_name, fields.last_name.value !== "", errorMessages.last_name);
    markField(fields.birthday, fields.birthday.value !== "", errorMessages.birthday);
    markField(fields.sex, fields.sex.value !== "", errorMessages.sex);
    markField(fields.city, fields.city.value !== "", errorMessages.city);
    markField(fields.province, fields.province.value !== "", errorMessages.province);
    markField(fields.zip, fields.zip.value !== "", errorMessages.zip);
    markField(fields.phone_number, phonePattern.test(fields.phone_number.value), errorMessages.phone_number);
    markField(fields.email, emailPattern.test(fields.email.value), errorMessages.email);
    markField(fields.card_number, studentNumberPattern.test(fields.card_number.value), errorMessages.card_number);
    markField(fields.registration_date, fields.registration_date.value !== "", errorMessages.registration_date);
    markField(fields.expiry_date, fields.expiry_date.value !== "", errorMessages.expiry_date);
    markField(fields.primary_contact, fields.primary_contact.value !== "", errorMessages.primary_contact);
    markField(fields.college, fields.college.value !== "", errorMessages.college);
    markField(fields.course, fields.course.value !== "", errorMessages.course);

    return isValid;
}


async function submitForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    if (!validateForm()) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    // Collect the form data
    const formData = new FormData(document.querySelector('form'));
 
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    try {
        // Ensure the endpoint URL is fully specified
        const response = await fetch('http://10.10.139.82:8000/api/patrons', {
            method: 'POST',
            body: JSON.stringify(formObject),  // Form data converted to JSON
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // Optional: Tell the server you expect a JSON response
            }
        });

        if (response.ok) {
            const result = await response.json();
            if (result.errors) {
                // Display API validation errors
                displayErrors(result.errors);
            } else {
                alert("Registration Success!");
                document.querySelector('form').reset(); // Reset form after successful submission
            }
        } else {
            console.error('Server error during registration');
            alert('An error occurred while submitting the form. Please try again.');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Error during registration. Please check your connection or try again later.');
    }
}

// Display errors from API response
function displayErrors(errors) {
    Object.keys(errors).forEach(field => {
        const errorElement = document.querySelector(`#${field}`).nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.innerText = errors[field];
            errorElement.style.display = 'block';
        }
    });
}

// Form validation remains unchanged
function validateForm() {
    let isValid = true;
    
    const fields = {
        first_name: document.getElementById('first_name'),
        middle_name: document.getElementById('middle_name'),
        last_name: document.getElementById('last_name'),
        birthday: document.getElementById('birthday'),
        sex: document.getElementById('sex'),
        house_no: document.getElementById('house_no'),
        street: document.getElementById('street'),
        barangay: document.getElementById('barangay'),
        city: document.getElementById('city'),
        province: document.getElementById('province'),
        zip: document.getElementById('zip'),
        phone_number: document.getElementById('phone_number'),
        secondary_phone: document.getElementById('secondary_phone'),
        other_phone: document.getElementById('other_phone'),
        email: document.getElementById('email'),
        secondary_email: document.getElementById('secondary_email'),
        primary_contact: document.getElementById('primary_contact'),
        card_number: document.getElementById('card_number'),
        college: document.getElementById('college'),
        course: document.getElementById('course'),
        registration_date: document.getElementById('registration_date'),
        expiry_date: document.getElementById('expiry_date')
    };

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{11}$/;
    const studentNumberPattern = /^[0-9]{9}$/;

    const errorMessages = {
        first_name: "First Name is required.",
        last_name: "Last Name is required.",
        birthday: "Birthday is required.",
        sex: "Please select a gender.",
        city: "City is required.",
        province: "Province is required.",
        zip: "Zip code is required.",
        phone_number: "Phone number must be 11 digits.",
        email: "Please enter a valid email address.",
        card_number: "Student number must be 9 digits.",
        registration_date: "Registration date is required.",
        expiry_date: "Expiry date is required.",
        primary_contact: "Please select a primary contact option.",
        college: "Please select a college.",
        course: "Please select a course."
    };

    function markField(field, valid, errorMessage) {
        const errorElement = field.nextElementSibling || createErrorElement(field);
        if (valid) {
            field.classList.remove("invalid");
            errorElement.style.display = 'none';
        } else {
            field.classList.add("invalid");
            errorElement.style.display = 'block';
            errorElement.innerText = errorMessage;
            isValid = false;
        }
    }

    function createErrorElement(field) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
        return errorElement;
    }

    markField(fields.first_name, fields.first_name.value !== "", errorMessages.first_name);
    markField(fields.last_name, fields.last_name.value !== "", errorMessages.last_name);
    markField(fields.birthday, fields.birthday.value !== "", errorMessages.birthday);
    markField(fields.sex, fields.sex.value !== "", errorMessages.sex);
    markField(fields.city, fields.city.value !== "", errorMessages.city);
    markField(fields.province, fields.province.value !== "", errorMessages.province);
    markField(fields.zip, fields.zip.value !== "", errorMessages.zip);
    markField(fields.phone_number, phonePattern.test(fields.phone_number.value), errorMessages.phone_number);
    markField(fields.email, emailPattern.test(fields.email.value), errorMessages.email);
    markField(fields.card_number, studentNumberPattern.test(fields.card_number.value), errorMessages.card_number);
    markField(fields.registration_date, fields.registration_date.value !== "", errorMessages.registration_date);
    markField(fields.expiry_date, fields.expiry_date.value !== "", errorMessages.expiry_date);
    markField(fields.primary_contact, fields.primary_contact.value !== "", errorMessages.primary_contact);
    markField(fields.college, fields.college.value !== "", errorMessages.college);
    markField(fields.course, fields.course.value !== "", errorMessages.course);

    return isValid;
}

function displayErrors(errors) {    
    Object.keys(errors).forEach(field => {
        const errorElement = document.querySelector(`#${field}`).nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.innerText = errors[field];
            errorElement.style.display = 'block';
        }
    });
}

