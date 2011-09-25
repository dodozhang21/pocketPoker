////shuffles list in-place
//function shuffle(list) {
//  var i, j, t;
//  for (i = 1; i < list.length; i++) {
//    j = Math.floor(Math.random()*(1+i));  // choose j in [0..i]
//    if (j != i) {
//      t = list[i];                        // swap list[i] and list[j]
//      list[i] = list[j];
//      list[j] = t;
//    }
//  }
//}