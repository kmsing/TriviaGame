

var actualchoices=new Array()
document.cookie="ready=yes"
var totalquestions=5



//solutions to each question
var correctchoices=new Array()
correctchoices[1]='c' 
correctchoices[2]='b' 
correctchoices[3]='c'
correctchoices[4]='d'
correctchoices[5]='d'

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}


