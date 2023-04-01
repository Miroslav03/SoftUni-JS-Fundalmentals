function date(year,month,day) {
    
    let stringDate = new Date(year,month-1,day)

    const nextDate = new Date(stringDate);
    nextDate.setDate(stringDate.getDate() + 1);

    let finalDay  = nextDate.getDate()
    let finalMOnth  = nextDate.getMonth()+1
    let finalYear  = nextDate.getFullYear()
    

    console.log(`${finalYear}-${finalMOnth}-${finalDay}`);

}date(2022, 9,30)