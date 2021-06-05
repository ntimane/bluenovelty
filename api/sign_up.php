<?php
function getJWTData($jwtParent, $toArray = true) {
    global $key;
    if (is_object($jwtParent)) {
        if (isset($jwtParent->jwt)) {
            try {
                $jwtData = JWT::decode($jwtParent->jwt, $key, array('HS256'));
            } catch(Exception $e) {
                $jwtData = null;
            }
            if (is_object($jwtData)) {
                if (isset($jwtData->data)) {
                    if ($toArray) {
                        return (array) $jwtData->data;    
                    } else {
                        return $jwtData;    
                    }
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function setJWTData($data) {
    global $key;
    if ($data) {
        $token = array( 
		   "iss" => $iss,
           "aud" => $aud,
		   "iat" => $iat,
		   "nbf" => $nbf,
		   "data" =>  $data);
        $jwt = JWT::encode($token, $key);
        return $jwt;
    } else {
        return null;
    }
}
//http://localhost:4200/api/sign_up.php?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOm51bGwsImF1ZCI6bnVsbCwiaWF0IjpudWxsLCJuYmYiOm51bGwsImRhdGEiOnsiQ2xpZW50TmFtZSI6Ik1ldiBcLyBNbnIgU1wvTUggU1BBTkdFTkJFUkciLCJQb2xpY3lDb2RlIjoiVFAxMjUwNDMiLCJQb2xpY3lfSUQiOiIxMjUwNDMifX0.XjMwhzuTR8UE-rQFIjI1JudwImlWAqjNGBwkbUgn45I
if ( $_SERVER['REQUEST_METHOD'] == 'GET' ){
    $data = getJWTData((object) $_GET);
    print_r($data);
}


?>