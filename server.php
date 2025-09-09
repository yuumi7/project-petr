<?php
echo "POST data: ";
print_r($_POST);
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);