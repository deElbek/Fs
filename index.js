const fs = require("fs");
const buf = new Buffer(1024)
// Read
// fs.readFile("input.txt", function (err,data){
//     if(err){
//         return console.log(err);
//     }
//     console.log("Fs"+data.toString());
// })

// var data = fs.readFileSync("input.txt");
// console.log("Salom "+data.toString())

//Open
// fs.open('input.txt', "r+", function(err,fd){
//     if(err){
//        return console.log(err)
//     }
//     console.log("File open successfully")
// })

//Write
// fs.writeFile("input.txt", "Nima gapppppppP!", function(err){
//     if(err){
//         return console.log(err);
//     }
//     console.log("Data writted successfully!")
//     fs.readFile("input.txt", function(err,data){
//         if(err){
//             return console.log(err);
//         }
//         console.log("Read: "+data.toString())
//     })
// })

//appendFile
// fs.appendFile("input.txt", "Learn NodeJS", "utf-8",
//     function(err){
//         if(err) throw err;
//         console.log("Data is append to file successfully.")
//     }
// )

//Unlink (Delete)
fs.unlink("input.txt", function(err){
    if(err){
        return console.log(err)
    }
    console.log("File delete successfully!");
});