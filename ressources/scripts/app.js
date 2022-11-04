var listApp = [
    ['youtube', 'https://www.youtube.com/'],
    ['google', 'https://www.google.com/'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#'],
    ['test', '#']
    ]

var listPage = new Array()

var compteurPage = -1

const apps = document.getElementById(`apps`);

for (let i = 0; i < listApp.length; i++) {
    if (i%9 == 0) {
        compteurPage = compteurPage + 1
        listPage[compteurPage] = new Array()
    }
    var div = document.createElement('a')
    div.setAttribute('class', 'app')
    div.setAttribute('id', listApp[i][0])
    div.setAttribute('href', listApp[i][1])
    listPage[compteurPage].push(div)
}

function printPage(numPage) {
    for (let i = 0; i < listPage[numPage].length;i++) {
        apps.appendChild(listPage[numPage][i])
    }
}

function removePage() {
    var a = apps.lastElementChild
    while (a) {
        apps.removeChild(a)
        a = apps.lastElementChild
    }
}