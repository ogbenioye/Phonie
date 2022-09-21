let networkCarrier = {
    mtn: ["0806", "0803", "0704", "0706", "0906", "0702", "0814", "0810", "0813", "0816", "0903", "0703", "0913"],
    airtel: ["0701", "0708", "0802", "0808", "0812", "0902", "0907", "0901", "0912"],
    nineMobile: ["0909", "0818", "0908", "0809", "0817"],
    glo: ["0905", "0805", "0705", "0815", "0807", "0811"]
}

var input = document.querySelector("#num_input")
input.addEventListener("input", receiveValue)

var imgElem = document.createElement("img")
document.getElementById("carrier-img").appendChild(imgElem)


function validateInput() {
    if (!checkCarrier(String(input.value))) {
        document.getElementById("errorMsg").innerText ="*not a valid NIGERIAN number*"
        return
    } else if (checkCarrier(String(input.value))) {
        document.getElementById("errorMsg").innerText =" "
        return
    }
}


function receiveValue() {
    
    if (String(input.value).length >= 4) {

        checkCarrier(String(input.value))
        validateInput()

    } else if (String(input.value).length < 4) {
        imgElem.src = ""
    }

    //display the image for some seconds and remove
}

function checkCarrier(num) {

    let feedBack = false

    for (let mtnNumbers of networkCarrier.mtn) {
        if (num.slice(0, 4) == mtnNumbers) {
            feedBack = imgElem.src = "./images/mtnlogo.jpg"
            return feedBack
        }
    }

    for (let airtelNumbers of networkCarrier.airtel) {
        if (num.slice(0, 4) == airtelNumbers) {
            feedBack = imgElem.src = "./images/airtellogo.jpg"
            return feedBack
        }
    }

    for (let nineMobileNumbers of networkCarrier.nineMobile) {
        if (num.slice(0, 4) == nineMobileNumbers) {
            feedBack = imgElem.src = "./images/9mobilelogo.jpg"
            return feedBack
        }
    }

    for (let gloNumbers of networkCarrier.glo) {
        if (num.slice(0, 4) == gloNumbers) {
            feedBack = imgElem.src = "./images/glologo.jpg"
            return feedBack
        }
    }

    return feedBack

    

    // if (input.slice(0,4) != networkCarrier.airtel || networkCarrier.mtn || networkCarrier.glo || networkCarrier.nineMobile) {
    //     document.getElementById("errorMsg").innerText ="*not a valid NIGERIAN number*"
    // }
    
    // if (input.slice(0,4) != networkCarrier.airtel || networkCarrier.mtn || networkCarrier.glo || networkCarrier.nineMobile){
    //     document.getElementById("errorMsg").innerText =" yes "
    // }
}