var marks = prompt("please enter the marks ");

var a = parseFloat(marks);

var grade = (a>=80)?'A':
            (80<a<=60)?'B':
            (60<a<=40)?'C':
            (40<a<=20)?'D':
            (20<a<=0)?'E':
            'give proper input'
console.log("grade is"+ grade);
            