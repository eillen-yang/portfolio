<?php

$client_id = '0qd1LUWfbHFTL6ucAfK8';
$client_secret = 'gHN4dsrq4c';

$query = urlencode($_POST['query']);
$display = $_POST['display'];
$url = 'https://openapi.naver.com/v1/search/shop.json?query=' . $query . '&display=' . $display; // json 결과
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, false); // POST 방식 전송
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = array();
$headers[] = 'X-Naver-Client-Id: ' . $client_id;
$headers[] = 'X-Naver-Client-Secret: ' . $client_secret;

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$response = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// echo 'status_code: ' . $status_code;

curl_close($ch);

if ($status_code == 200) {
  // echo $response;
  $decode = json_decode($response);
  $encode = json_encode($decode);
  echo $encode;
} else {
  echo 'Error 내용:' . $response;
}

exit;
