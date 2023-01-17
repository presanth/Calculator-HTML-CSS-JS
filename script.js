function display(data){
    ques.value+=data
}

function dataClear(){
    ques.value=" "
    ans.value=" "
}

function evaluat(){
    ans.value= eval(ques.value)
}

function back(){
    data=ques.value;
    ques.value=data.slice(0,-1)
}