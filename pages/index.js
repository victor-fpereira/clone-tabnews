var __html = require("./index.html");
var template = { __html: __html };

React.module.exports = React.createClass({
  render: function () {
    return <div innnerHTML={template} />;
  },
});
