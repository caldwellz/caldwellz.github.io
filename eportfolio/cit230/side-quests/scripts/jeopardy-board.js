// Fill in the Jeopardy board
// ** This is the stuff to modify as needed
var TOTAL_CATEGORIES = 5;
var TOTAL_ITEMS = 20;
var categories = new Array(TOTAL_CATEGORIES);
categories[0]  = "Lorem Ipsum Category 1";
categories[1]  = "Lorem Ipsum Category 2";
categories[2]  = "Lorem Ipsum Category 3";
categories[3]  = "Lorem Ipsum Category 4";
categories[4]  = "Lorem Ipsum Category 5";
var points = new Array(TOTAL_ITEMS / TOTAL_CATEGORIES);
points[0]      = "100";
points[1]      = "200";
points[2]      = "300";
points[3]      = "400";
var prompts = new Array(TOTAL_ITEMS);
prompts[0]     = "Lorem Ipsum Prompt 1";
prompts[1]     = "Lorem Ipsum Prompt 2";
prompts[2]     = "Lorem Ipsum Prompt 3";
prompts[3]     = "Lorem Ipsum Prompt 4";
prompts[4]     = "Lorem Ipsum Prompt 5";
prompts[5]     = "Lorem Ipsum Prompt 6";
prompts[6]     = "Super Long Awkward Lorem Ipsum Prompt 7 for testing what happens with a long prompt...";
prompts[7]     = "Lorem Ipsum Prompt 8";
prompts[8]     = "Lorem Ipsum Prompt 9";
prompts[9]     = "Lorem Ipsum Prompt 10";
prompts[10]    = "Lorem Ipsum Prompt 11";
prompts[11]    = "Lorem Ipsum Prompt 12";
prompts[12]    = "Lorem Ipsum Prompt 13";
prompts[13]    = "Lorem Ipsum Prompt 14";
prompts[14]    = "Lorem Ipsum Prompt 15";
prompts[15]    = "Lorem Ipsum Prompt 16";
prompts[16]    = "Lorem Ipsum Prompt 17";
prompts[17]    = "Lorem Ipsum Prompt 18";
prompts[18]    = "Lorem Ipsum Prompt 19";
prompts[19]    = "Lorem Ipsum Prompt 20";
var solutions = new Array(TOTAL_ITEMS);
solutions[0]   = "Lorem Ipsum Answer 1";
solutions[1]   = "Lorem Ipsum Answer 2";
solutions[2]   = "Lorem Ipsum Answer 3";
solutions[3]   = "Lorem Ipsum Answer 4";
solutions[4]   = "Lorem Ipsum Answer 5";
solutions[5]   = "Lorem Ipsum Answer 6";
solutions[6]   = "Lorem Ipsum Answer 7";
solutions[7]   = "Lorem Ipsum Answer 8";
solutions[8]   = "Lorem Ipsum Answer 9";
solutions[9]   = "Lorem Ipsum Answer 10";
solutions[10]  = "Lorem Ipsum Answer 11";
solutions[11]  = "Lorem Ipsum Answer 12";
solutions[12]  = "Lorem Ipsum Answer 13";
solutions[13]  = "Lorem Ipsum Answer 14";
solutions[14]  = "Lorem Ipsum Answer 15";
solutions[15]  = "Lorem Ipsum Answer 16";
solutions[16]  = "Lorem Ipsum Answer 17";
solutions[17]  = "Lorem Ipsum Answer 18";
solutions[18]  = "Lorem Ipsum Answer 19";
solutions[19]  = "Lorem Ipsum Answer 20";
// ** End of board-specific stuff
// Shouldn't need to change anything below here


var i;
for (i = 0; i < TOTAL_CATEGORIES; i++) {
    var idStr = "category" + (i+1).toString();
    var element = document.getElementById(idStr);
    element.innerHTML = categories[i];
}
for (i = 0; i < TOTAL_ITEMS; i++) {
    var idStr = "q" + (i+1).toString() + "-prompt";
    var element = document.getElementById(idStr);
    element.innerHTML = prompts[i];
    element.style.display = "none";
}
for (i = 0; i < TOTAL_ITEMS; i++) {
    var idStr = "q" + (i+1).toString() + "-solution";
    var element = document.getElementById(idStr);
    element.innerHTML = solutions[i];
    element.style.display = "none";
}
var pn = 0;
for (i = 0; i < TOTAL_ITEMS; i++) {
    var idStr = "q" + (i+1).toString() + "-value";
    var element = document.getElementById(idStr);
    if ((i % TOTAL_CATEGORIES === 0) && (i > 0)) {
        pn++;
    }
    element.innerHTML = points[pn];
}
