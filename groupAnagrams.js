

// var groupAnagrams = function (strs) {
//     debugger;
//     var out = [];
//     for (var i = 0; i < strs.length; i++) {
//         var elem = strs[i];
//         var toPush = [];
//         for (j = i + 1; j < strs.length; j++) {
//             var elm2 = strs[j];
//             if (isAnargam(elem, elm2)) {
//                 toPush.push(elm2);
//                 strs.splice(j, 1);
//                 j--;
//             }
//         }
//         toPush.push(elem);
//         out.push(toPush);
//     }
//     function isAnargam(e1, e2) {
//         var is = false;
//         for (var k = 0; k < e2.length; k++) {
//             var temp = e2[k];
//             var index = e1.indexOf(temp);
//             if (index > -1) {
//                 e2 = e2.replace(temp, "");
//                 e1 = e1.replace(temp, "");
//                 k--;
//             }
//             else {
//                 break;
//             }
//         }
//         if (e2 == "" && e1 == "") {
//             is = true;
//         }
//         return is;
//     }
//     return out;

// };
// console.log(groupAnagrams(["ray", "cod", "abe", "ned", "arc", "jar", "owl", "pop", "paw", "sky", "yup", "fed", "jul", "woo", "ado", "why", "ben", "mys", "den", "dem", "fat", "you", "eon", "sui", "oct", "asp", "ago", "lea", "sow", "hus", "fee", "yup", "eve", "red", "flo", "ids", "tic", "pup", "hag", "ito", "zoo"]))



// //[["hag"],["pup"],["ids"],["ito"],["flo"],["red"],["hus"],["sow"],["asp"],["oct"],["sui"],["fee"],["eon"],["tic"],["sky"],["ago"],["paw"],["jul"],["pop"],["jar"],["den","ned"],["owl"],["eve"],["mys"],["abe"],["zoo"],["ado"],["ray"],["cod"],["lea"],["arc"],["dem"],["fat"],["yup","yup"],["woo"],["fed"],["why"],["ben"],["you"]]