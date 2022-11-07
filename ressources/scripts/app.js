var listApp = [
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['ye', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/'],
    ['PiHole', 'http://192.168.1.43/admin/index.php'],
    ['Nextcloud', 'http://192.168.1.43/nextcloud/']
    ]

var listPage = new Array()

var compteurPage = -1

var numPage = 0

const apps = document.getElementById(`apps`);

const boutons = document.getElementsByClassName('boutons')[0]

var nbApp = 9

var x = window.matchMedia("(max-width: 1350px)")


for (let i = 0; i < listApp.length; i++) {
    if (i%nbApp === 0) {
        compteurPage = compteurPage + 1
        listPage[compteurPage] = new Array()
    }
    var div = document.createElement('a')
    div.setAttribute('class', 'app')
    div.setAttribute('id', listApp[i][0])
    div.setAttribute('href', listApp[i][1])
    div.appendChild(document.createTextNode(listApp[i][0].toUpperCase()))
    listPage[compteurPage].push(div)
}

function creeBoutonUp() {
    var boutonUp = document.createElement('div')
    boutonUp.setAttribute('class','bouton')
    boutonUp.setAttribute('id','forward')
    boutonUp.appendChild(document.createTextNode('Suivant'))
    boutons.appendChild(boutonUp)
}

function creeBoutonDown() {
    var boutonDown = document.createElement('div')
    boutonDown.setAttribute('class','bouton')
    boutonDown.setAttribute('id','backward')
    boutonDown.appendChild(document.createTextNode('Précedent'))
    boutons.appendChild(boutonDown)
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


function pageUp() {
    if (numPage === 0) {
        var left = document.getElementById('backward')
        left.style.removeProperty('width')
        left.style.padding = '1rem'
        left.style.removeProperty('font-size')
    }
    if (numPage < listPage.length-1) {
        numPage = numPage + 1
        removePage()
        printPage(numPage)
    }
    if (numPage === listPage.length-1) {
        var left = document.getElementById('forward')
        left.style.width = '0px'
        left.style.padding = '0px'
        left.style.fontSize = '0px'
    }
}

function pageDown() {
    if (numPage === listPage.length-1) {
        var left = document.getElementById('forward')
        left.style.removeProperty('width')
        left.style.padding = '1rem'
        left.style.removeProperty('font-size')
    }
    if (numPage !== 0) {
        numPage = numPage - 1
        removePage()
        printPage(numPage)
    }
    if (numPage === 0) {
        var left = document.getElementById('backward')
        left.style.width = '0px'
        left.style.padding = '0px'
        left.style.fontSize = '0px'
    }
}

creeBoutonUp()
creeBoutonDown()
printPage(numPage)

if (numPage === 0) {
    var left = document.getElementById('backward')
    left.style.width = '0px'
    left.style.padding = '0px'
    left.style.fontSize = '0px'
}

if (numPage === listPage.length-1) {
    var left = document.getElementById('forward')
    left.style.width = '0px'
    left.style.padding = '0px'
    left.style.fontSize = '0px'
}

var left = document.getElementById('backward')
left.addEventListener('click',pageDown)

var right = document.getElementById('forward')
right.addEventListener('click',pageUp)