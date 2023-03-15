function companyUsers(array){
    let companies = new Map

    for (const el of array) {
        let [company,user] = el.split(` -> `)

        if(!companies.has(company)){
            companies.set(company,new Set)
            companies.get(company).add(user)
        }else{
            companies.get(company).add(user)
        }
    }

    let sortedCompany = new Map([...companies.entries()].sort((a,b) => a[0].localeCompare(b[0])))


    for (const [company,value] of sortedCompany) {
        console.log(company);
        for (const el of value) {
            console.log(`-- ${el}`);
        }
    }
}companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'Lenovo -> PX23456',
    'Lenovo -> CX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]    
    )
