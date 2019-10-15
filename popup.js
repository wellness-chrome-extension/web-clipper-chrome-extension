


document.addEventListener('DOMContentLoaded', function() {
    let val
    let link1 = document.getElementById('link');
    chrome.storage.sync.get(['data'], function(result) {
      val = result.data;
      document.getElementById('output').innerHTML = val;
    })
    // onClick's logic below:
    if (link1){
      link1.addEventListener('click', function() {
        document.getElementById("link").style.fontWeight = 'bold';
      });
      
    }
});




chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log('New value is %s', changes['data'].newValue)
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
    chrome.browserAction.setBadgeText({ text: changes['data'].newValue })

  });



