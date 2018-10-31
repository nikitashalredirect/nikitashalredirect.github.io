;(function(l, projectPages) {

  var repo = projectPages ? '/' + l.pathname.split('/')[1] : ''

   /* redirect all 404 trafic to index.html */
   function redirect() {
     l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + repo + '/?' +
              (l.pathname ? 'p=' + l.pathname.replace(/&/g, '~and~').replace(repo, '') : '') +
              (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
              (l.hash))
     window.location = "tg://resolve?domain=" + l.pathname.slice(1);
   }


}(window.location, window.projectPages || false ))
