const fs = require('fs');

// fs writefile
fs.writeFile("hello.txt" , "hello how are you", function(err){
    if(err) console.error(err);
    else console.log("done");
});

// fs appendfile
// fs.appendFile("hell.txt" , " yes Iam fine", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

// fs rename
// fs.rename("hii.txt","./copy/copy.txt" , function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })