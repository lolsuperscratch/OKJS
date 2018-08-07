var okjs = {

   require = function (url) {
         
         var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var functionreturn = new Function(xhttp.responseText);
       functionreturn.call();
       return functionreturn
    }
    if (!this.readyState == 4 && this.status == 200) {
       console.error("error occured")
       return;
    }
};
xhttp.open("GET", url, true);
xhttp.send();
   },
   foreach = function (array,fn) {
      for (var thisone in array) {
          fn.call(thisone)
      }
   }
}

window.OKJS = okjs;
