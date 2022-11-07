const header = document.getElementById('header');

const time = document.createElement('div');
time.setAttribute('id','time')

function setGoogle() {

    let form = document.createElement('form')
    form.setAttribute('class','google')
    form.setAttribute('methode','GET')
    form.setAttribute('action','http://www.google.fr/search')

    let div = document.createElement('div')

    let a = document.createElement('a')
    a.setAttribute('href','http://www.google.fr')

    let inputText = document.createElement("input")
    inputText.setAttribute('id','googleText')
    inputText.setAttribute('class','googleButton')
    inputText.setAttribute('type','text')
    inputText.setAttribute('name','q')
    inputText.setAttribute('maxlength','255')
    inputText.setAttribute('value','')
    inputText.setAttribute('placeholder','Recherche Google')


    let inputHidden = document.createElement("input")
    inputHidden.setAttribute('type','hidden')
    inputHidden.setAttribute('name','hl')
    inputHidden.setAttribute('value','fr')

    let inputSubmit = document.createElement("input")
    inputSubmit.setAttribute('id','googleSubmit')
    inputSubmit.setAttribute('class','googleButton')
    inputSubmit.setAttribute('type','submit')
    inputSubmit.setAttribute('name','btnG')
    inputSubmit.setAttribute('value','Rechercher')

    div.appendChild(a)
    div.append(inputText)
    div.append(inputHidden)
    div.append(inputSubmit)

    form.appendChild(div)

    header.appendChild(form)
}

header.appendChild(time)
header.appendChild(document.createElement('div'))
setGoogle()


