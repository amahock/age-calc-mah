module.exports.age_calc = dob => { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// console.log(this.age_calc(new Date(1982, 11, 4)));

// module.exports.getAge = birth => {
//     var today = new Date();
//     var curr_date = today.getDate();
//     var curr_month = today.getMonth() + 1;
// //    console.log(today.getMonth());
//     var curr_year = today.getFullYear();
 
//     var pieces = birth.split('/');
//     var birth_date = pieces[0];
//     var birth_month = pieces[1];
//     var birth_year = pieces[2];
 
//     if (curr_month == birth_month) {
//      if (curr_date >= birth_date) {
//         return parseInt(curr_year-birth_year); 
//         }
//     else {
//         return parseInt(curr_year-birth_year-1);
//         }
//     }
        
//     if (curr_month > birth_month) 
//     return parseInt(curr_year-birth_year);
//     if (curr_month < birth_month) 
//     return parseInt(curr_year-birth_year-1);
//  }

//  var age = getAge('18/01/1930');
//  console.log(age);