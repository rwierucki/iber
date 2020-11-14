(function () {

    const arictleElem = document.querySelector(".article");
    const pElements = arictleElem.querySelectorAll("p");
    const indexToInsert = [2, 4, 5, 6, 7, 9];
    const popup = document.querySelector(".popup");
    const popupButton = document.querySelector(".popup button");
    const paragrafArray = [];
    const spanElem = document.createElement("span");
    const shortParagrafElem = document.createElement("p");
    let popupActive = false;
    let popupShown = false;
    let totalCharCounter = 0;
    let paragrafLength = Number.POSITIVE_INFINITY;
    let paragrafContent = '';


    /* 5 */
    const checkScrollStatus = () => {
        if (!popupActive && window.scrollY > 1500) {
            popupActive = true;
            popupShow();
        }
        else if (window.scrollY <= 1500) {
            popupActive = false;
        }
    }
    const popupShow = () => {
        if (!popupShown) {
            popup.classList.add("show");
            popupShown = true;
            console.log("Popup wyświetlony");
        }
    }
    const popupHide = () => {
        popup.classList.remove("show");
        popupShown = false;
    }
    const trimString = (string) => {
        return string.textContent.replace(/\s/g, '');
    }


    /* 6 */
    const countChar = (item) => {
        totalCharCounter += trimString(item).length;
    }
    const addToArray = (array, item) => {
        array.push(item);
    }


    /* 4, 6, 8 */
    pElements.forEach((p,index) => {
        if (indexToInsert.indexOf(index+1) !== -1) {
            const divElem = document.createElement("div");
            divElem.classList.add("div");
            arictleElem.insertBefore(divElem, p.nextSibling);
        }
        countChar(p);
        addToArray(paragrafArray, p);
    });


    /* 5 */
    window.addEventListener("scroll", checkScrollStatus);
    popupButton.addEventListener("click", popupHide);


    /* 6, 7 */
    if (totalCharCounter < 3000) {
        spanElem.classList.add("red");
    }
    spanElem.textContent = `Liczba znaków: ${totalCharCounter}`;
    arictleElem.appendChild(spanElem);


    /* 8 */
    paragrafArray.forEach((paragraf) => {
        if (paragraf.textContent.length < paragrafLength) {
            paragrafLength = paragraf.textContent.length;
            paragrafContent = paragraf.textContent;
        }
    });
    shortParagrafElem.textContent = paragrafContent;
    shortParagrafElem.classList.add("short");
    arictleElem.appendChild(shortParagrafElem);
})();