<?php
include 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['username'], $data['password'], $data['address'])) {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

$username = $data['username'];
$password = $data['password'];
$address = $data['address'];

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Username already exists"]);
} else {
    $insert = $conn->prepare("INSERT INTO users (username, password, address) VALUES (?, ?, ?)");
    $insert->bind_param("sss", $username, $hashedPassword, $address);

    if ($insert->execute()) {
        echo json_encode(["status" => "success", "message" => "Signup successful"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Signup failed"]);
    }
}

$stmt->close();
$conn->close();
?>
