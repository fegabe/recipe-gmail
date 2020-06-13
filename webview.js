const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    let inboxNode = document.getElementsByClassName('nU')[0].parentElement.getElementsByClassName("bsU");
    if (inboxNode.length > 0) {
      count = inboxNode[0].innerText;
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
