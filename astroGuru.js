
//  function name astroGuru that takes 4 arguments-job, location, spouse, noOfChildren
function astroGuru(job, location, spouse, noOfChildren){
    let str =`you will be a ${job} in ${location} and married to ${spouse} with ${noOfChildren} kids. `;
    return str;
}



/*
 outputs a string to the console that is of the form:
"You will be a `job` in `location`, and married to `spouse` with `no of children` kids."
*/
let result = astroGuru("Backand Developer", "Chicago","Jenny","2");
console.log(result);;


