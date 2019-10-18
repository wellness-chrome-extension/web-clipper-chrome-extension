document.addEventListener('DOMContentLoaded', function() {
    let title1 = document.getElementById('title');
    chrome.storage.sync.get(null, function(result) {
      let newArr = [];

      for (let key in result){
        newArr.push([key, result[key]]);
      }

      let sortedArr = newArr.sort((a, b) => b[0] - a[0]);

      if (document.getElementById('output1')){
        document.getElementById('output1').innerHTML = sortedArr[0][1][0];
        document.getElementById('output2').innerHTML = sortedArr[1][1][0];
        document.getElementById('output3').innerHTML = sortedArr[2][1][0];
        document.getElementById('output4').innerHTML = sortedArr[3][1][0];
        document.getElementById('output5').innerHTML = sortedArr[4][1][0];
        document.getElementById('output6').innerHTML = sortedArr[5][1][0];
      }
    })
    // onClick's logic below:
    if (title1){
      title1.addEventListener('click', function() {
        document.getElementById("title").style.fontWeight = 'bold';
      });
      
    }
});



chrome.storage.onChanged.addListener(function(changes, namespace) {
    let newArr = []
    for (let key in changes){
      newArr.push([key, changes[key].newValue])
    }
    let sortedArr = newArr.sort((a, b) => b[0] - a[0]);

    console.log('New value is %s %s %s !!', sortedArr[0][0], sortedArr[0][1][0], sortedArr[0][1][1])
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
    if(sortedArr[0][1][0]){
      chrome.browserAction.setBadgeText({ text: sortedArr[0][1][0] })
    }

  });



