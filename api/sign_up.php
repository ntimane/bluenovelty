<?php

// ini_set('display_errors','On');
// ini_set('error_reporting', E_ALL);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Max-Age: 1000');
if(array_key_exists('HTTP_ACCESS_CONTROL_REQUEST_HEADERS', $_SERVER)) {
    header('Access-Control-Allow-Headers: '
           . $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
} else {
    header('Access-Control-Allow-Headers: *');
}
header('Content-type: application/json');

include('main.php');
//http://localhost:4200/api/sign_up.php?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOm51bGwsImF1ZCI6bnVsbCwiaWF0IjpudWxsLCJuYmYiOm51bGwsImRhdGEiOnsiQ2xpZW50TmFtZSI6Ik1ldiBcLyBNbnIgU1wvTUggU1BBTkdFTkJFUkciLCJQb2xpY3lDb2RlIjoiVFAxMjUwNDMiLCJQb2xpY3lfSUQiOiIxMjUwNDMifX0.XjMwhzuTR8UE-rQFIjI1JudwImlWAqjNGBwkbUgn45I
if ( $_SERVER['REQUEST_METHOD'] == 'POST' ){
    
    $mainClass = new main();
    $connection = new mysqli('localhost', 'root', '', 'bluenovelty');
    $results = array(
        "Status" => false,
        "Message" => "No Action Taken"
    );
    if ($connection->error) {
        $results["Status"] = false;
        $results["Message"] = "Connection failed: " . $connection->error;
        print_r(json_encode($results));
    }
    //save file
    $target_dir = "./uploads/";
    $file = $_FILES['profile_img']['name'];
    file_put_contents("./postResults.txt",print_r($file,true));
    $temp_name = $_FILES['profile_img']['tmp_name'];
    $path_filename_ext = $target_dir . $file;
    // Check if file already exists
    if (file_exists($path_filename_ext)) {
        $results["Status"] = false;
        $results["Message"] = "Sorry, file already exists.";
        print_r(json_encode($results));
    } else {
        if(move_uploaded_file($temp_name, $path_filename_ext)){

        }else {
            $results["Status"] = false;
            $results["Message"] = "Sorry, couldn't upload file.";
            print_r(json_encode($results));
        }
    }
    //save user data
    $signUpdata = array();
    $signUpdata["name"] = $_POST["name"];
    $signUpdata["surname"] = $_POST["surname"];
    $signUpdata["company_name"] = $_POST["company_name"];
    $signUpdata["email"] = $_POST["email"];
    $signUpdata["dob"] = $_POST["dob"];
    $signUpdata["gender"] = $_POST["gender"];
    $signUpdata["content_type"] = $_POST["content_type"];
    $signUpdata["which_photography"] = $_POST["which_photography"];
    $signUpdata["which_photography1"] = $_POST["which_photography1"];
    $signUpdata["profile_img"] = $path_filename_ext;
    $signUpdata["password"] = $_POST["password"];
    $signUpdata["user_type"] = $_POST["user_type"];
    //insert new user
    $sql = "INSERT INTO `users`";
    $sql .= "(`name`, `surname`, `company_name`, `email`, `dob`, `gender`, `content_type`, `which_photography`, `which_photography1`, `profile_img`, `password`, `user_type`)";
    $sql .= "VALUES ('".$_POST["name"]."', '".$_POST["surname"]."', '".$_POST["company_name"]."', '";
    $sql .= $_POST["email"]."', '".$_POST["dob"]."', '".$_POST["gender"]."', '".$_POST["content_type"]."', '";
    $sql .= $_POST["which_photography"]."', '".$_POST["which_photography1"]."', '".$path_filename_ext."', '".$_POST["password"]."', '".$_POST["user_type"]."');";
    //set success return variables
    $myJwt = $mainClass->setJWTData($signUpdata);
    $results["Status"] = $connection->query($sql);
    $results["Message"] = "User successfully added";
    $results["Data"] = $signUpdata;
    $results["jwt"] = $myJwt;
    
    
    // var_dump($_SERVER);
    // echo '<br>JWT:<br>';
    // var_dump($myJwt);
    // $getJwtArray = array("jwt" => $myJwt);
    // var_dump($getJwtArray);
    // $data = $mainClass->getJWTData((object) $getJwtArray);
    // echo '<br>JWT results:<br>';
    // var_dump($data);

    print_r(json_encode($results));
}else{
    echo 'in else.';
}


?>