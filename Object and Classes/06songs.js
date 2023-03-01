function songs(array) {
    let newArr = []
    class Song{
        constructor(typeList,name,time){
            this.typeList=typeList
            this.name=name
            this.time=time
        }
    }
    for (let i = 1; i <= array[0]; i++) {
        let [typeList, name,time] = array[i].split(`_`)
        let song = new Song(typeList,name,time)
        let type = array[array.length - 1]   
        if(typeList == type){
            newArr.push(name)
        }else if(type ==`all`){
            newArr.push(name)
        }
    }
    console.log(newArr.join(`\n`));
} songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'all']
    
)