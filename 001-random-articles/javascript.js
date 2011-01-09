var ARCHIVE_ID = '3.16c1d86d12d503727de8000808';
var NUMBER_OF_ARTICLES = 2;

var utils = request.getAttribute('sitevision.utils');
var linkRenderer = utils.getLinkRenderer();
var scriptUtil = utils.getScriptUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');

var archive = jcrSession.getNodeByIdentifier(ARCHIVE_ID).getNodes();

var articles = scriptUtil.getInstance('java.util.ArrayList');

for (var index = 0; archive.hasNext(); index++)
{
  var current = archive.next();

  if (index < NUMBER_OF_ARTICLES)
  {
    articles.add(current);
  }
  else
  {
    random = Math.floor(Math.random() * (index + 1));

    if (random < NUMBER_OF_ARTICLES)
    {
      articles.set(random, current);
    }
  }
}

java.util.Collections.shuffle(articles);