function gramophone(bandName,albumName,song){

    let formula=(albumName.length * bandName.length) * song.length / 2

    console.log(`The plate was rotated ${Math.ceil(formula/2.5)} times.`);


}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')