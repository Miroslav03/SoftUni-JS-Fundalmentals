function extractFile(text) {
    let extention = ``
    let name = ``
    let finalName = ``
    let array = text.split(`\\`)
    array = array.splice(-1)

    let elements = array[0].split(`.`)

    if (elements.length > 2) {
        extention = elements.pop()
        for (let i = 0; i < elements.length; i++) {
            finalName = finalName + `.` + elements[i]
        }
        finalName = finalName.substring(1)
        console.log(`File name: ${finalName}`);
        console.log(`File extension: ${extention}`);

    } else {
        finalName = elements.shift()
        extention = elements.pop()
        console.log(`File name: ${finalName}`);
        console.log(`File extension: ${extention}`);
    }

} extractFile('C:\\Internal\\training-internal\\Template.kurs')