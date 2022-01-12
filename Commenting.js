class Comments {
  constructor(rootPost) {
    this.node = new Map();
    this.node.set(rootPost, { "childs": [], "parent": null, "value": "" });
  }

  addComment(parentId, CommentID, commentData) {
    this.node.get(parentId).childs.push(CommentID);
    this.node.set(CommentID, { "childs": [], "parent": parentId, "value": commentData });
  }

  deleteComment(CommentID) {
    var parentnode = this.node.get(this.node.get(CommentID).parent);
    parentnode.childs.splice(parentnode.childs.indexOf(CommentID), 1);
    this.node.delete(parentnode);
  }

  getComments(parentId) {

    var html = "<ul>";
    var comments = this.node.get(parentId).childs;
    comments.forEach(element => {
      html += `<li>${this.node.get(element).value}<button onclick="deleteComment('${element}')">Delete!</button></li>`;
      html += "<ul>"
      html += `<li><input type="text" id="${element}" placeholder="Comment please..."/></li>`;
      html += `<li><button onclick="addNewComment('${element}')">Reply to this comment</button></li>`;
      html += "</ul>"
      html += this.getComments(element);
    });
    html += "</ul>";
    return html;

  }
}

var comment = new Comments("root");
var addNewComment = function (commentID) {
  var txtbox = document.getElementById(commentID);
  var value = txtbox.value;
  if (!value) {
    alert("Opps!!! You forget to add comments.");
    txtbox.focus();
    return;
  }
  comment.addComment(commentID, Math.random().toString(), value);
  txtbox.value = "";
  getComments();
}
var deleteComment = function (commentID) {
  comment.deleteComment(commentID);
  getComments();
}
var getComments = function getComments() {
  var whatIsCurrentHtml = comment.getComments("root");
  document.getElementById("comments").innerHTML = whatIsCurrentHtml;
}