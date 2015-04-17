<?php


$form = get_post(2);

$content = apply_filters('the_content', $form->post_content);

echo $content;
