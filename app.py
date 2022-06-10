#Import section
console.log('It\'s Connected')

# Variable Declaration
bigText = document.getElementById('maintext')
button = document.getElementById('outlined')
angle = 90
rotateValue = bigText.style.transform
rotateSum = rotateValue + 'scale(2)'

# console logging
console.log(angle)


def scaling(*args):
    console.log('Scaling commencing at angle')
    bigText.setAttribute('style','transform: scale(2)')
    bigText.setAttribute('style','transition: 3s')
