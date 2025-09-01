<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $middleName = $_POST['middleName'];
    $lastName = $_POST['lastName'];
    $suffix = $_POST['suffix'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $batch = $_POST['batch'];
    $technology = $_POST['technology'];
    $idNumber = $_POST['idNumber'];

    // Validation regex
    $namePattern = "/^[A-Za-z]+$/";
    $suffixPattern = "/^[A-Za-z.]*$/"; // allow empty

    if (!preg_match($namePattern, $firstName) ||
        !preg_match($namePattern, $middleName) ||
        !preg_match($namePattern, $lastName) ||
        ($suffix !== "" && !preg_match($suffixPattern, $suffix))) {
        die("❌ Invalid input detected. Please go back and correct the form.");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Submission Result</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f2f5;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal {
      background: #fff;
      padding: 25px;
      border-radius: 10px;
      width: 400px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      text-align: center;
      animation: fadeIn 0.3s ease-in-out;
    }
    .modal h2 {
      margin-top: 0;
      color: #007bff;
    }
    .modal p {
      margin: 8px 0;
      font-size: 15px;
      text-align: left;
    }
    .btn-close {
      margin-top: 15px;
      padding: 10px 20px;
      background: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }
    .btn-close:hover {
      background: #0056b3;
    }
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(-20px);}
      to {opacity: 1; transform: translateY(0);}
    }
  </style>
</head>
<body>
  <div class="modal-overlay">
    <div class="modal">
      <h2>Submitted Information</h2>
      <p><strong>First Name:</strong> <?= htmlspecialchars($firstName) ?></p>
      <p><strong>Middle Name:</strong> <?= htmlspecialchars($middleName) ?></p>
      <p><strong>Last Name:</strong> <?= htmlspecialchars($lastName) ?></p>
      <p><strong>Suffix:</strong> <?= htmlspecialchars($suffix) ?></p>
      <p><strong>Contact:</strong> <?= htmlspecialchars($contact) ?></p>
      <p><strong>Email:</strong> <?= htmlspecialchars($email) ?></p>
      <p><strong>Batch:</strong> <?= htmlspecialchars($batch) ?></p>
      <p><strong>Technology:</strong> <?= htmlspecialchars($technology) ?></p>
      <p><strong>ID Number:</strong> <?= htmlspecialchars($idNumber) ?></p>
      <button class="btn-close" onclick="window.location.href='index.html'">OK</button>
    </div>
  </div>
</body>
</html>
