# maxyspark-download
npm module for download file

###Installation

####`npm install maxyspark-download`

###Uses 

```
const maxDonwload = require('maxyspark-download');
var filename = "prog.gif";
var url = "http://skillprogramming.com/images/pictuers/how_many_of_you_get_the_same_feeling.gif";`
function endFunc() {
    console.log("download completed : "+filename);
}
maxDonwload.download(url,filename,endFunc());
```
