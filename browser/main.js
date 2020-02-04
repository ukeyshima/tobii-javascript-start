const fetchDataEveryFrame = () => {
    fetch('./api/v1/list')
        .then(response => response.json())
        .then(gazeData => script(gazeData))
        .catch(e => console.log(e))
    requestAnimationFrame(fetchDataEveryFrame)
}

fetchDataEveryFrame()
