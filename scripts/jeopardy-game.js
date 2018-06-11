// Implement the Jeopardy game. See the other JS file for the actual board contents.

var states = new Array(3);
states[0] = "value";
states[1] = "prompt";
states[2] = "solution";

function switch_state(elemId) {
    if (typeof switch_state.elemStates == 'undefined') {
        switch_state.elemStates = {};
    }

    if (typeof switch_state.elemStates[elemId] == 'undefined') {
        switch_state.elemStates[elemId] = 0;
    } else if (switch_state.elemStates[elemId] > 2) {
        // Question already used
        return;
    }

    var elemStr = elemId + "-" + states[switch_state.elemStates[elemId]];
    document.getElementById(elemStr).style.display = "none";
    switch_state.elemStates[elemId]++;
    if (switch_state.elemStates[elemId] <= 2) {
        elemStr = elemId + "-" + states[switch_state.elemStates[elemId]];
        document.getElementById(elemStr).style.display = "block";
    }
}
