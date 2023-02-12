function formatGrade(grade){
    let gradeInWords=``

    if(grade<3.00){
        gradeInWords=`Fail`
    }else if(grade<3.50){
        gradeInWords=`Poor`
    }else if(grade<4.50){
        gradeInWords=`Good`
    }else if(grade<5.50){
        gradeInWords=`Very good`
    }else if(grade>=5.50){
        gradeInWords=`Excellent`
    }
    if(grade<3.00){
        return (`${gradeInWords} (2)`)
    }else{
        return(`${gradeInWords} (${grade.toFixed(2)})`)
    }
}console.log(formatGrade(2.99))