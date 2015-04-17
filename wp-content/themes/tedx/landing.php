<?php
/* Template Name: Landing */
    $post = get_post(10);
    $form = get_post(2);

$content = apply_filters('the_content', $form->post_content);
?>

<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEDx</title>
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">

    <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/modernizr.js"></script>
  </head>
  <body class="landing">
    <header class="header">
      <a href="#" alt="">
        <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="">
      </a>
      <ul>
        <li><a class="icon-instagram" href="#"></a></li>
        <li><a class="icon-twitter" href="#"></a></li>
        <li><a class="icon-facebook" href="#"></a></li>
      </ul>
    </header>
    <div class="superglobale">
      <div class="content">
        <h1><?php echo $post->post_title; ?></h1>
        <h2><?php echo $post->post_content; ?></h2>
        <div class="basic-cta">
          <a href="#popup-speakers" class="icon-mic cbox-html"><p><span>Devenez</span> speakers</p></a>
          <a href="#popup-partners" class="icon-light-up cbox-html"><p><span>Devenez</span> partenaire</p></a>
        </div>
      </div>
    </div>
    <footer>
      <p>© 2015 TEDx Education</p>
    </footer>


    <!-- Modal here -->
    <div class="popup-wrapper" id="popup-speakers">
        <div class="basic-cta"> <a href="#popup-speakers" class="icon-mic cbox-html active cboxElement"><p><span>Devenez</span> speakers</p></a> <a href="#popup-partners" class="icon-light-up cbox-html cboxElement"><p><span>Devenez</span> partenaire</p></a> </div>
        <p class="pop-text">Vous avez une idée ou un projet à partager ?<br>Alors candidatez pour peut-être venir en parler sur la scène de TEDx Education !<br>Vous avez jusqu’au 30 juin 2015 pour soumettre votre candidature au comité de programmation. </p>
        <?php echo $content; ?>
    </div>
    <!-- /Modal here -->

    <div class="popup-wrapper" id="popup-partners">
      <div class="basic-cta">
        <a href="#popup-speakers" class="icon-mic cbox-html"><p><span>Devenez</span> speakers</p></a>
        <a href="#popup-partners" class="icon-light-up cb-html active"><p><span>Devenez</span> partenaire</p></a>
      </div>
      <p class="pop-text">Devenir partenaire de TEDxParis c’est engager un dialogue avec une audience exclusive, passionnée et ouverte d’esprit.</p>
      <p class="pop-text">TEDxParis est un évènement qui rencontre toujours plus de succès, un des plus prestigieux TEDx mondial. L’édition 2014 aura lieu au Théâtre du Châtelet, devant plus de 1600 personnes. Un lieu mythique pour une visibilité privilégiée, où nous ne manquerons de valoriser votre marque et vos valeurs.</p>
      <p class="pop-text">Avec TEDxParis, nous offrons la possibilité aux entreprises de s’associer à une vision selon laquelle le partage des grandes idées peut rendre notre monde meilleur.</p>
      <p class="pop-text">Nous espérons vivre cette riche expérience avec vous !</p>
      <p class="pop-text">Pour plus d’informations, contactez Charles : <a href="mailto:charles@brightness.fr">charles@brightness.fr</a></p>
    </div>
    <!--[if lt IE 10]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <script src="<?php echo get_template_directory_uri(); ?>/js/vendor.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>


    <?php wp_footer(); ?>
</body>
</html>

