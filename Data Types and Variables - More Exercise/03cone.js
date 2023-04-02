function cone(r,h){

    let volume = (1/3)*Math.PI*r*r*h
    let s = Math.sqrt(r*r + h*h)
    let totalArea = Math.PI*r*s + Math.PI*r*r


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);

}cone(3,
    5
    )