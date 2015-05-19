<?php



/* TWITTER API CALL */
require_once('TwitterAPIExchange.php');


/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "2782154017-KfIvS7Q3CnqNDuiAkWsPrVe30IhYVSy4rKrH8am",
    'oauth_access_token_secret' => "G98NZPKQGaTRU1MSu67wg0xiDByE4GsVY7ZDl0oMzAZux",
    'consumer_key' => "aiFRiPw8D5CwRTgGieDUlyBuE",
    'consumer_secret' => "JfbJLR4JNE0xZkcHeQkLG5sGYucT5hEB7Jla327xRDqLo26CKS"
);
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?username=scoledgefr';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
/*echo $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();*/




/** INSTAGRAM API CALL */

function fetchData($url){
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_TIMEOUT, 20);
  $result = curl_exec($ch);
  curl_close($ch);
  return $result;
}

$result = fetchData("https://api.instagram.com/v1/users/self/feed?access_token=2122502468.1fb234f.af1670cd239445f9bbd8757360edd837");
$result = json_decode($result);
?>

<h1>Hello world</h1>

