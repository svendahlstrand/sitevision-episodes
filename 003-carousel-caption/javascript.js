var utils = request.getAttribute('sitevision.utils');
var portletContextUtil = utils.getPortletContextUtil();
var propertyUtil = utils.getPropertyUtil();
var nodeTypeUtil = utils.getNodeTypeUtil();
var imageRenderer = utils.getImageRenderer();

var currentPage = portletContextUtil.getCurrentPage();
var node = propertyUtil.getNode(currentPage, 'carousel');

if (nodeTypeUtil.isImage(node))
{
  var folder = node.getParent().getNodes();
  imageRenderer.forceUseAutoDescription();
}