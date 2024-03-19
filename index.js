function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair='*'){
    const Adjective = function(special){
        return `You are ${flair}${special}${flair}!`};
    return Adjective;
}