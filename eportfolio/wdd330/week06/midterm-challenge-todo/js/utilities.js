// Various DOM utilities

export function setOnClick(id, cb) {
  var elem = document.getElementById(id);
  if (elem && typeof(cb) === 'function')
    elem.addEventListener('mouseup', cb);
}


export function setClassOnClick(elemClass, cb) {
  if (typeof(cb) === 'function') {
    var elemList = document.getElementsByClassName(elemClass);
    for (var i = 0; i < elemList.length; i++) {
      elemList[i].addEventListener('mouseup', cb);
    }
  }
}


export function setClassOnInput(elemClass, cb) {
  if (typeof(cb) === 'function') {
    var elemList = document.getElementsByClassName(elemClass);
    for (var i = 0; i < elemList.length; i++) {
      elemList[i].addEventListener('input', cb);
    }
  }
}
