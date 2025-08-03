 function customeRender(recatElement,container){
    const domElement = document.createElement
    (recatElement.type)
    domElement.innerHTML = recatElement.children
    domElement.setAttribute('herf',recatElement.props.herf)

    domElement.setAttribute('target',recatElement.props.target)

    container.appendChild(domElement)
 }

const recatElement = {
    type : 'a',
    props : {
        herf: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}

const maainConatiner = document.getElementById('root')

customeRender(recatElement,maainConatiner)
