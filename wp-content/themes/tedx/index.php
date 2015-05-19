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



/* FACEBOOK API CALL */
require __DIR__ . '/facebook-php-sdk-v4/autoload.php';


use Facebook\FacebookSession;
use Facebook\FacebookRequest;
use Facebook\GraphUser;
use Facebook\FacebookRequestException;

FacebookSession::setDefaultApplication('847250295363160','2e2cab6280675a800189840884298cc5');

// Use one of the helper classes to get a FacebookSession object.
//   FacebookRedirectLoginHelper
//   FacebookCanvasLoginHelper
//   FacebookJavaScriptLoginHelper
// or create a FacebookSession with a valid access token:
$session = new FacebookSession('847250295363160|iBtUYnwSYafZrI7j6CmpdLGCUUg');

// Get the GraphUser object for the current user:

try {
    $me = (new FacebookRequest(
        $session, 'GET', '/1550969358467114/feed'
    ))->execute()->getGraphObject(GraphUser::className());
    $data = $me->getProperty('data');

    $results_array = $data->asArray();


    foreach($results_array as $fb){
        if($fb->object_id){
            $request = new FacebookRequest(
                $session,
                'GET',
                '/'.$fb->object_id
            );
            $response = $request->execute();
            $graphObject = $response->getGraphObject();

        }
    }


} catch (FacebookRequestException $e) {
    print_r($e);
    // The Graph API returned an error
} catch (\Exception $e) {
    print_r($e);
    // Some other error occurred
}










?>

<h1>Hello world</h1>

