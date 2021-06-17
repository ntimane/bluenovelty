<?php
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
    
    $sql = "SELECT * FROM `users` WHERE email='".$_POST["username"]."' AND password='".$_POST["password"]."';";
    $query_results = $connection->query($sql);
    if($query_results->num_rows === 0){
        $results["Status"] = false;
        $results["Message"] = "Invalid User Credentails";
        print_r(json_encode($results));
    }else{
        //save user data
        $signUpdata = array();
        file_put_contents("./postResults.txt",print_r($signUpdata,true));
        while($row = $query_results->fetch_assoc()){
            $signUpdata["name"] = $row["name"];
            $signUpdata["surname"] = $row["surname"];
            $signUpdata["company_name"] = $row["company_name"];
            $signUpdata["email"] = $row["email"];
            $signUpdata["dob"] = $row["dob"];
            $signUpdata["gender"] = $row["gender"];
            $signUpdata["content_type"] = $row["content_type"];
            $signUpdata["which_photography"] = $row["which_photography"];
            $signUpdata["which_photography1"] = $row["which_photography1"];
            $signUpdata["profile_img"] = $row["profile_img"];
            $signUpdata["password"] = $row["password"];
            $signUpdata["user_type"] = $row["user_type"];
        }
        
        $myJwt = $mainClass->setJWTData($signUpdata);
        $results["Status"] = true;
        $results["Message"] = "User successfully logged in";
        $results["Data"] = $signUpdata;
        $results["jwt"] = $myJwt;

        print_r(json_encode($results));
    }
}

?>