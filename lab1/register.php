<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <form action="register.php" name="container" class="container" method="post" id="registrationForm" onsubmit="return validateForm()">
        <h1>Sign Up</h1>
        <h3>Student Info</h3>
        <div>
            <input type="text" name="first_name" id="first_name" placeholder="First Name" >
        </div>
        <div>
            <input type="text" name="middle_name" id="middle_name" placeholder="Middle Name">
        </div>
        <div>
            <input type="text" name="last_name" id="last_name" placeholder="Last Name" >
        </div>
        <div>
            <input type="date" name="birthday" id="birthday" placeholder="Birthday" >
        </div>
        
        <!-- Sex Field -->
        <label for="sex">Sex</label>
        <select name="sex" id="sex" >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
            <option value="not_specified">Not Specified</option>
        </select>

        <div>
            <input type="text" name="house_no" id="house_no" placeholder="House Number">
        </div>
        <div>
            <input type="text" name="street" id="street" placeholder="Street">
        </div>
        <div>
            <input type="text" name="barangay" id="barangay" placeholder="Barangay">
        </div>
        <div>
            <input type="text" name="city" id="city" placeholder="City" >
        </div>
        <div>
            <input type="text" name="province" id="province" placeholder="Province" >
        </div>
        <div>
            <input type="text" name="zip" id="zip" placeholder="Zip Code" >
        </div>
        <div>
            <input type="tel" name="phone_number" id="phone_number" placeholder="Phone Number" >
        </div>
        <div>
            <input type="tel" name="secondary_phone" id="secondary_phone" placeholder="Secondary Phone">
        </div>
        <div>
            <input type="tel" name="other_phone" id="other_phone" placeholder="Other Phone">
        </div>
        <div>
            <input type="email" name="email" id="email" placeholder="Email" >
        </div>
        <div>
            <input type="email" name="secondary_email" id="secondary_email" placeholder="Secondary Email">
        </div>
        
        <!-- Primary Contact Field -->
        <label for="primary_contact">Primary Contact</label>
        <select name="primary_contact" id="primary_contact" required>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
        </select>

        <div>
            <input type="text" name="card_number" id="card_number" placeholder="Student Number" >
        </div>
        
        <!-- College Field -->
        <label for="college">College</label>
        <select name="college" id="college" >
            <option value="CEIT">CEIT</option>
            <option value="CEMDS">CEMDS</option>
            <option value="CON">CON</option>
            <option value="CAS">CAS</option>
        </select>

        <!-- Course Field -->
        <label for="course">Course</label>
        <select name="course" id="course" >
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="Civil Engr">Civil Engineer</option>
            <option value="Mechanical Engr">Mechanical Engineer</option>
        </select>

        <div>
            <label for="registration_date">Registration Date</label>
            <input type="date" name="registration_date" id="registration_date" placeholder="Registration Date" >
        </div>
        <div>
            <label for="expiry_date">Expiry Date</label>
            <input type="date" name="expiry_date" id="expiry_date" placeholder="Expiry Date" >
        </div>
        <button type="submit" id="registerbtn" class="registerbtn">Register</button>
        <p>Already a member? <a href="login.php">Login here</a></p>
    </form>
</main>

<script src="script.js" defer></script>
<script>
    // Ensure submitForm is available by adding event listener after DOM is loaded
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('registrationForm');
        form.addEventListener('submit', submitForm);
    });
</script>
</body>
</html>