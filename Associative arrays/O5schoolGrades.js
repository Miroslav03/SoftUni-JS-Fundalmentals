function schoolGrades(input) {

    let schoolGrades = new Map()

    for (const el of input) {

        let currentStudent = el.split(` `)
        let [name,...grades] = currentStudent
        grades = grades.map(Number)

        if (schoolGrades.has(name)) {
            let value = schoolGrades.get(name)
            schoolGrades.set(name, grades.concat(value))  
        } else {
            schoolGrades.set(name, grades)
        }  
    }

    let sortedSchoolGrades = new Map([...schoolGrades.entries()].sort((a, b) => a[0].localeCompare(b[0])))
        
        for (let [key, value] of sortedSchoolGrades) { 
            let finalScore = 0 
            for (let i = 0; i < value.length; i++) {
                let element = value[i]
                finalScore +=element
                
            }
            let average = finalScore/value.length
                console.log(`${key}: ${(average).toFixed(2)}`)
            
        }
    
} schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']


)