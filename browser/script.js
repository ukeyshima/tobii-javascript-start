const cursor = document.getElementsByClassName("cursor")[0]

const script = (gazeData) => {
    // console.log(gazeData)    
    cursor.style.left = gazeData.x + "px"
    cursor.style.top = gazeData.y + "px"
    cursor.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}