document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');

    // onClick's logic below:
    link.addEventListener('click', function() {
        document.getElementById("link").style.fontWeight = 'bold';
    });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log('new data type is %s. New value is %s', changes['type'].newValue, changes['data'].newValue)
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    //document.getElementById('output').innerHTML = 'hey'

    }
  });

// let val = 'hi'
// document.addEventListener('oncontextmenu', function () {
//     document.getElementById('output').innerHTML = val
// });

    // await chrome.storage.sync.get(['data'], function(result) {
    //     val = result.data;
    // })
