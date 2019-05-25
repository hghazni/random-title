/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
______                _                   _____ _ _   _
| ___ \              | |                 |_   _(_) | | |
| |_/ /__ _ _ __   __| | ___  _ __ ___     | |  _| |_| | ___
|    // _` | '_ \ / _` |/ _ \| '_ ` _ \    | | | | __| |/ _ \
| |\ \ (_| | | | | (_| | (_) | | | | | |   | | | | |_| |  __/
\_| \_\__,_|_| |_|\__,_|\___/|_| |_| |_|   \_/ |_|\__|_|\___|
By Harry Ghazni / COPYRIGHT 2019

 => https://wwww.hghazni.com
 => htttps://github.com/hghazni
 => htttps://github.com/hghazni/eat
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

// declare function
exports.rtitle = function(options,...message) {

  // Options
  var options = {
    element: 'rtitle' // set to id of 'rtitle' by default, you can always change
  };

  // get title value
  var titleArray = [...message];
  // get element to apend to
  var titleElement = document.getElementById(options.element);
  // randomise titles
  const randomTitle = titleArray[Math.floor(Math.random()*titleArray.length)];
  // output to element
  titleElement.innerHTML += `<h1>${randomTitle}</h1>`
}