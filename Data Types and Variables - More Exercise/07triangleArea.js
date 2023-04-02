function triangleArea(n1,n2,n3){

    let p = (n1+n2+n3)/2

    let area = Math.sqrt(p*(p-n1)*(p-n2)*(p-n3))

    console.log(area);

}triangleArea(2,
    3.5,
    4
    )