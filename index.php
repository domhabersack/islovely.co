<?php
if (array_key_exists('_escaped_fragment_', $_GET)):
  $escaped_fragment = $_GET['_escaped_fragment_'];
  $without_leading_slash = substr($escaped_fragment, 1);
  $with_dashes = str_replace('/', '-', $without_leading_slash);
  $filename = strlen($with_dashes) === 0 ? 'index' : $with_dashes;
  $page = 'snapshots/' . $filename . '.html';
  include $page;
else:
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">

    <title>islovely (loading…)</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:400,700,400italic|Source+Code+Pro">

    <script>
    window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0];r.rel="stylesheet",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
    grunticon(['grunticon/icons.data.svg.min.css', 'grunticon/icons.data.png.min.css', 'grunticon/icons.fallback.min.css']);</script>
    <noscript><link href="grunticon/icons.fallback.min.css" rel="stylesheet"></noscript>
  </head>

  <body>
    <script type="text/x-handlebars" id="application">
      <header>
        <div>
          {{linkTo 'islovely' 'index' class="islovely logo"}}
        </div>

        <nav>
          <ol>
            <li>
              {{linkTo 'Home' 'index'}}
            </li>
            <li>
              {{linkTo 'Clients' 'clients'}}
            </li>
            <li>
              {{linkTo 'Services' 'page' 'services'}}
            </li>
            <li>
              {{linkTo 'Process' 'page' 'process'}}
            </li>
            <li>
              {{linkTo 'Request a proposal' 'page' 'request-a-proposal'}}
            </li>
            <li>
              {{linkTo 'Regarding recruitment' 'page' 'regarding-recruitment'}}
            </li>
            <li>
              {{linkTo 'About' 'page' 'about'}}
            </li>
            <li>
              {{linkTo 'Posts' 'posts'}}
            </li>
            <li>
              {{linkTo 'Contact' 'page' 'contact'}}
            </li>
          </ol>
        </nav>
      </header>

      <section>
        <div>
          {{outlet}}
        </div>
      </section>

      <footer>
        <div>
          <p>
            Copyright &copy; 2013<br>
            Dom Habersack, <a href="http://islovely.co/" title="Portfolio of Dom Habersack">islovely.co</a><br>
            {{linkTo 'Imprint' 'page' 'imprint'}}
          </p>

          <ul>
            <li>
              <a href="http://github.com/dhabersack" class="logo github" title="dhabersack on GitHub">dhabersack</a>
            </li>
            <li>
              <a href="http://twitter.com/dhabersack" class="logo twitter" title="@dhabersack on Twitter">@dhabersack</a>
            </li>
            <li>
              <a href="http://xing.com/profiles/Dominik_Habersack" class="logo xing" title="Dominik Habersack on XING">Dominik Habersack</a>
            </li>
          </ul>
        </div>
      </footer>
    </script>

    <script type="text/x-handlebars" data-template-name="client">
      <nav>
        {{linkTo '&larr; Clients' 'clients'}}
      </nav>

      <h1>{{title}}</h1>

      {{markdown body}}

      {{#if url}}
        <p>
          <a {{bindAttr href=url title=title}}>Visit site</a>
        </p>
      {{/if}}
    </script>

    <script type="text/x-handlebars" data-template-name="clients">
      <h1>Clients</h1>

      {{#each this}}
        <article>
          <h2>{{linkTo title 'client' this}}</h2>

          <p>
            {{description}}
          </p>
        </article>
      {{/each}}
      </ol>
    </script>

    <script type="text/x-handlebars" data-template-name="index">
      <h1>{{title}}</h1>

      {{markdown body}}
    </script>

    <script type="text/x-handlebars" data-template-name="page">
      <h1>{{title}}</h1>

      {{markdown body}}
    </script>

    <script type="text/x-handlebars" data-template-name="pages">
      <h1>Pages</h1>

      <ol id="pages">
        {{#each model}}
          <li>
            {{linkTo title 'page' this}}
          </li>
        {{/each}}
      </ol>
    </script>

    <script type="text/x-handlebars" data-template-name="post">
      <nav>
        {{linkTo '&larr; Posts' 'posts'}}
      </nav>

      <h1>{{title}}</h1>

      {{#if published}}
        <p id="published">
          Published on {{date published}}.
        </p>
      {{/if}}

      {{markdown body}}
    </script>

    <script type="text/x-handlebars" data-template-name="posts">
      <h1>Posts</h1>

      {{#each this}}
        <article>
          <h2>{{linkTo title 'post' this}}</h2>

          <p>
            {{description}}
          </p>
        </article>
      {{/each}}
      </ol>
    </script>

    <script src="bower_components/jquery/jquery.js"></script>
    <script src="bower_components/handlebars/handlebars.js"></script>
    <script src="bower_components/ember/ember.js"></script>
    <script src="bower_components/ember-data/ember-data.js"></script>
    <script src="bower_components/showdown/src/showdown.js"></script>
    <script src="bower_components/momentjs/moment.js"></script>
    <script src="islovely.js"></script>
  </body>
</html>
<?php endif; ?>
