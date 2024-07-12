async function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < ( arr.length - i -1 ); j++) {

            explanationText.innerText="Compare two values next to each other."
            explanationText.style.color=yellow;
            myNumber[j].style.backgroundColor=yellow;
            myNumber[j + 1].style.backgroundColor=yellow;
            await new Promise(r => setTimeout(r, pace));

            if(arr[j] > arr[j+1]) {

                explanationText.innerText="Value on the left is bigger. Swap them."
                explanationText.style.color=red;
                myNumber[j].style.backgroundColor=red;
                myNumber[j + 1].style.backgroundColor=red;
                await new Promise(r => setTimeout(r, pace));
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                myNumber[j].innerText=arr[j]
                myNumber[j + 1].innerText=arr[j + 1]
                myNumber[j].style.backgroundColor=green;
                myNumber[j + 1].style.backgroundColor=green;
                explanationText.innerText="Values are in right order."
                explanationText.style.color=green;
                await new Promise(r => setTimeout(r, pace));

            }

            myNumber[j].style.backgroundColor='white';
            myNumber[j + 1].style.backgroundColor=blue;
            explanationText.style.color=blue;

        }

        explanationText.innerText=`Now our last ${i+ 1} element(s) are sorted.`;
        await new Promise(r => setTimeout(r, pace));

    }
    for (let x=0; x < arr.length;  x++){
        myNumber[x].style.backgroundColor='white';
        }
    await new Promise(r => setTimeout(r, 200));

    for (let x=0; x < arr.length;  x++){
        myNumber[x].style.backgroundColor=blue;
        await new Promise(r => setTimeout(r, 100));
        }
    explanationText.innerText=`Array is sorted.`
}


async function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let min = i;
        let oldJ = -1;
        explanationText.innerText=`Value we compare to is ${arr[i]}.`
        explanationText.style.color=yellow;
        myNumber[i].style.backgroundColor=red;

        for (let j = i + 1; j < arr.length; j++) {

            myNumber[j].style.backgroundColor=yellow;
            await new Promise(r => setTimeout(r, pace));
            if (arr[min] > arr[j]) {
                min = j;
                if (oldJ !== -1){
                    myNumber[oldJ].style.backgroundColor='white';
                }

                explanationText.innerText=`${arr[j]} is smaller than ${arr[oldJ]}.`
                await new Promise(r => setTimeout(r, pace));
                oldJ = j;
                myNumber[j].style.backgroundColor=red;
                explanationText.innerText=`The smallest value is ${arr[j]} so far.`
                explanationText.style.color=red;
                await new Promise(r => setTimeout(r, pace));
                explanationText.style.color=yellow;

            } else {

                myNumber[j].style.backgroundColor='white';

            }
        }
        if (i !== min) {

            explanationText.innerText=`Swap ${arr[min]} with ${arr[i]}.`
            explanationText.style.color=green;
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
            myNumber[min].style.backgroundColor=green;
            myNumber[i].style.backgroundColor=green;
            myNumber[i].innerText = arr[i];
            myNumber[min].innerText = arr[min];
            await new Promise(r => setTimeout(r, pace));

        }

        myNumber[min].style.backgroundColor='white';
        myNumber[i].style.backgroundColor=blue;
        explanationText.innerText=`Blue part is sorted.`
        explanationText.style.color=blue;
        await new Promise(r => setTimeout(r, pace));

    }
    for (let x=0; x < arr.length;  x++){

        myNumber[x].style.backgroundColor='white';

        }
    await new Promise(r => setTimeout(r, 500));

    for (let x=0; x < arr.length;  x++){

        myNumber[x].style.backgroundColor=blue;
        await new Promise(r => setTimeout(r, 100));

        }

    explanationText.innerText=`Array is sorted.`
    explanationText.style.color=blue;
}


async function insertionSort(arr){

    let i, key, j;
    let pushed = false;

    for (i = 1; i < arr.length; i++) {

        key = arr[i];
        j = i - 1;
        let alreadyInPlace = true;
        myNumber[i].style.backgroundColor=yellow;

        if (j >= 0 && arr[j] > key){

            alreadyInPlace = false;
            explanationText.innerText = `${arr[i]} is smaller than number on the left.`
            explanationText.style.color=yellow;
            await new Promise(r => setTimeout(r, pace));
            explanationText.innerText = `Store ${arr[i]} as a temp variable.`
            extraNumber.innerText = arr[i];
            extraNumber.style.backgroundColor=yellow;
            extraNumber.classList.add('border-class');
            await new Promise(r => setTimeout(r, pace));
            explanationText.innerText = `Shift each number bigger than ${arr[i]} to the right.`

        }
        while (j >= 0 && arr[j] > key) {

            pushed = true;
            await new Promise(r => setTimeout(r, pace));
            arr[j + 1] = arr[j];
            myNumber[j+1].innerText = arr[j];
            myNumber[j].innerText = '';
            myNumber[j + 1].style.backgroundColor=yellow;
            myNumber[j].style.backgroundColor=yellow;
            j = j - 1;
            await new Promise(r => setTimeout(r, pace));

        }
        myNumber[j + 1].style.backgroundColor=green;
        arr[j + 1] = key;
        if (j === -1){

            explanationText.innerText = `There is no more elements to the left.`

        } else {

            explanationText.innerText = `Value to the left is smaller or same as ${key}.`

        }
        await new Promise(r => setTimeout(r, pace));
        if (alreadyInPlace === false) {

            explanationText.style.color=green;
            explanationText.innerText = `Push value ${key} into empty spot.`
            extraNumber.style.backgroundColor = green;

        }
        await new Promise(r => setTimeout(r, pace));
        myNumber[j + 1].innerText = key;
        myNumber[j + 1].style.backgroundColor=green;
        extraNumber.innerText = '';
        extraNumber.classList.remove('border-class');
        extraNumber.style.backgroundColor=fillerColor;
        explanationText.innerText = 'Now it is in the right place.';
        explanationText.style.color=green;
        await new Promise(r => setTimeout(r, pace));
        console.log(arr)
        for (let x=0; x < i+1; x++){

        myNumber[x].style.backgroundColor=blue;

        }
        explanationText.innerText = 'Blue part is sorted';
        explanationText.style.color = blue;
        await new Promise(r => setTimeout(r, pace));
    }
    for (let x=0; x < arr.length;  x++){

        myNumber[x].style.backgroundColor='white';

        }
    await new Promise(r => setTimeout(r, 500));

    for (let x=0; x < arr.length;  x++){

        myNumber[x].style.backgroundColor=blue;
        await new Promise(r => setTimeout(r, 100));

        }
    explanationText.innerText=`Array is sorted.`

}

async function shellSort(arr) {

    let n = arr.length;
    let gapInitial = Math.floor(n/2);
    explanationText.style.color=oppositeFillerColor;
    explanationText.innerText=`Initial gap is calculated by division of array length by 2.`;
    await new Promise(r => setTimeout(r, pace));
    explanationText2.innerText=`Our gap is ${gapInitial}.`
    explanationText2.style.color=purple;
    await new Promise(r => setTimeout(r, pace));

    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {

        explanationText2.innerText=`Current gap is ${gap}`

        for (let i = gap; i < n; i += 1)  {

            explanationText.innerText=`Comparing values separated by a gap.`;
            explanationText.style.color=yellow;
            myNumber[i].style.backgroundColor=yellow;
            let temp = arr[i];
            myNumber[i-gap].style.backgroundColor=yellow;
            await new Promise(r => setTimeout(r, pace));
            let j;
            let iterJ = 0;
            let changes = false;
            await new Promise(r => setTimeout(r, pace));
            extraNumber.innerText = temp;
            extraNumber.style.backgroundColor=yellow;
            extraNumber.classList.add('border-class')
            explanationText.innerText=`Value on the right is smaller. Hold value in temporary variable.`;

            for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {

                await new Promise(r => setTimeout(r, pace));
                iterJ++;
                changes = true;

                if ((j - gap) >= 0){

                myNumber[j-gap].style.backgroundColor=yellow;

                }

                extraNumber.style.backgroundColor=red;
                explanationText.style.color=red;
                myNumber[j].style.backgroundColor=red;
                myNumber[j-gap].style.backgroundColor=red;
                await new Promise(r => setTimeout(r, pace));
                explanationText.innerText=`Shift value to the right separated by gap.`;
                await new Promise(r => setTimeout(r, pace));
                myNumber[j].innerText = '';
                await new Promise(r => setTimeout(r, pace));
                arr[j] = arr[j-gap];
                myNumber[j].innerText = arr[j-gap]
                myNumber[j-gap].innerText = ''
                await new Promise(r => setTimeout(r, pace));

                if (j - gap >= 0){
                explanationText.innerText=`Checking if number on left is smaller separated by gap.`;
                }
            }

            if (((j - gap - gap) >= 0) && changes === true){

                explanationText.innerText=`Number on the left is smaller. Push temporary variable here.`;
                myNumber[j - gap].style.backgroundColor=yellow;
                await new Promise(r => setTimeout(r, pace));
                myNumber[j - gap].style.backgroundColor='white';

            }

            extraNumber.innerText = '';
            extraNumber.style.backgroundColor=fillerColor;
            extraNumber.classList.remove('border-class');
            if (changes === true) {

                for (let z = 0; z<=iterJ; z ++){

                    myNumber[i - (gap*z)].style.backgroundColor=green;

                }

                explanationText.innerText=`Compared numbers are in correct order.`;
                explanationText.style.color=green;
                myNumber[j].innerText = temp;
                await new Promise(r => setTimeout(r, pace));

            }

            for (let z = 0; z<=iterJ; z ++){

                myNumber[i - (gap*z)].style.backgroundColor='white';

            }

            myNumber[i - gap].style.backgroundColor='white';
            explanationText.style.color="white";
            arr[j] = temp;

        }
        if ( gap !== 1){

        explanationText.innerText=`We are changing the gap.`;
        explanationText.style.color=purple;

        } else {

            explanationText.innerText=``;
            explanationText.style.color="white";
            explanationText2.innerText=``;
            explanationText2.style.color="white";

        }

        await new Promise(r => setTimeout(r, pace));

    }

    for (let x=0; x < arr.length;  x++){

        myNumber[x].style.backgroundColor=blue;
        await new Promise(r => setTimeout(r, 100));

    }

    explanationText2.innerText=``;
    explanationText2.style.color="white";
    explanationText.innerText=`Array is sorted.`;
    explanationText.style.color=blue;

}


// All the global variables //

let arr = [];
let pace = 1700;
let prevButton = 'regular';
let prevButtonWhich = 'bubbleSort';
let prevButtonArr = 'arr10';
let sorts = [bubbleSort, selectionSort, insertionSort, shellSort]
let whichSort = 0;
let len = 10;
let darkMode = false;
let fillerColor = 'white';
let oppositeFillerColor = 'black';

//All DOM elements where we explain process + our arr //

let myNumber = document.getElementsByTagName('p');
let explanationText2 = document.getElementById('explanation2');
let explanationText = document.getElementById('explanation1');
let extraNumber = document.getElementById('explanationExtra');

//All buttons DOM//

let buttonSort = document.getElementById('startSorting');
let buttonNewArr = document.getElementById('newArray');
let buttonSlow = document.getElementById('slow');
let buttonRegular = document.getElementById('regular');
let buttonFast = document.getElementById('fast');
let buttonFastest = document.getElementById('fastest');
let buttonEpilepsy = document.getElementById('epilepsy');
let buttonBubble = document.getElementById('bubbleSort');
let buttonSelection = document.getElementById('selectionSort');
let buttonInsertion = document.getElementById('insertionSort');
let buttonShell = document.getElementById('shellSort');
let buttonArr10 = document.getElementById('arr10');
let buttonArr20 = document.getElementById('arr20');
let buttonArr30 = document.getElementById('arr30');
let buttonDarkMode = document.getElementById('buttonDarkMode');

//Main button to start the sort
buttonSort.addEventListener('click', function () {

    sorts[whichSort](arr);
    visButtons(prevButton);
    buttonSort.style.display='none';
    document.getElementById('menu').style.display ='none';

});

//Reset button
buttonNewArr.addEventListener('click', function () {

    location.reload();

})

buttonSlow.addEventListener('click', function () {

    pace = 3000;
    toggleMyButtons('slow');

});

buttonRegular.addEventListener('click', function () {

    pace = 1700;
    toggleMyButtons('regular')

});

buttonFast.addEventListener('click', function () {

    pace = 650;
    toggleMyButtons('fast');

});

buttonFastest.addEventListener('click', function () {

    pace = 150;
    toggleMyButtons('fastest');

});


buttonEpilepsy.addEventListener('click', function () {

    pace = 60;
    toggleMyButtons('epilepsy');

});

buttonBubble.addEventListener('click', function () {

    whichSort=0;
    toggleMyButtonsWhichSort('bubbleSort');

})

buttonSelection.addEventListener('click', function () {

    whichSort=1;
    toggleMyButtonsWhichSort('selectionSort');

})

buttonInsertion.addEventListener('click', function () {

    whichSort=2;
    toggleMyButtonsWhichSort('insertionSort');

})

buttonShell.addEventListener('click', function () {

    whichSort=3;
    toggleMyButtonsWhichSort('shellSort');

})

buttonArr10.addEventListener('click', function () {

   displayArr(10);
   toggleMyButtonsWhichArr('arr10');

})

buttonArr20.addEventListener('click', function () {

    displayArr(20);
    toggleMyButtonsWhichArr('arr20');

})

buttonArr30.addEventListener('click', function () {

    displayArr(30);
    toggleMyButtonsWhichArr('arr30');

})

buttonDarkMode.addEventListener('click', function () {

    if (darkMode === false){

        document.body.style.backgroundColor='#121212';
        let ourP = document.getElementsByTagName('p');
        let ourH4 = document.getElementsByTagName('h4');

        for (let i=0; i<ourP.length; i++){

            ourP[i].style.backgroundColor='white';

            }

        for (let i=0; i<ourH4.length; i++){

            ourH4[i].style.color='white';

            }

        buttonDarkMode.innerText='Light mode';
        buttonDarkMode.classList.remove('btn-dark');
        buttonDarkMode.classList.add('btn-light');
        fillerColor='#121212';
        oppositeFillerColor='white';
        darkMode = true;
        localStorage.setItem("darkmode", "true");

    } else {

        document.body.style.backgroundColor='white';
        let ourP = document.getElementsByTagName('p');
        let ourH4 = document.getElementsByTagName('h4');
        for (let i=0; i<ourP.length; i++){

            ourP[i].style.backgroundColor='white';

        }

        for (let i=0; i<ourH4.length; i++){

            ourH4[i].style.color='black';

        }

        buttonDarkMode.innerText='Dark mode';
        buttonDarkMode.classList.remove('btn-light');
        buttonDarkMode.classList.add('btn-dark');
        fillerColor='white';
        oppositeFillerColor='black';
        localStorage.setItem("darkmode", "false");
        darkMode = false;
    }

})

function visButtons(id) {

    let ourButtonsSpeed = ['slow', 'regular', 'fast', 'fastest', 'epilepsy']

    for (let i=0; i<ourButtonsSpeed.length; i++){

        document.getElementById(ourButtonsSpeed[i]).style.display = 'none';

    }
}

function toggleMyButtons (id){

    if (id !== prevButton) {

        document.getElementById(id).classList.add('btn-primary');
        document.getElementById(id).classList.remove('btn-outline-primary');

    }
    if (prevButton !== false && id !== prevButton) {

        document.getElementById(prevButton).classList.add('btn-outline-primary');
        document.getElementById(prevButton).classList.remove('btn-primary');

    }

    prevButton = id;
}

function toggleMyButtonsWhichSort (id){

    if (id !== prevButtonWhich) {

        document.getElementById(id).classList.add('btn-primary');
        document.getElementById(id).classList.remove('btn-outline-primary');

    }

    if (prevButtonWhich !== false && id !== prevButtonWhich) {

        document.getElementById(prevButtonWhich).classList.add('btn-outline-primary');
        document.getElementById(prevButtonWhich).classList.remove('btn-primary');

    }

    prevButtonWhich = id;
}


function toggleMyButtonsWhichArr (id){

    if (id !== prevButtonArr) {

        document.getElementById(id).classList.add('btn-primary');
        document.getElementById(id).classList.remove('btn-outline-primary');

    }

    if (prevButtonArr !== false && id !== prevButtonArr) {

        document.getElementById(prevButtonArr).classList.add('btn-outline-primary');
        document.getElementById(prevButtonArr).classList.remove('btn-primary');

    }

    prevButtonArr = id;
}
function displayArr(len) {

    let myArr = document.getElementById('myArr');
    let myArr2 = document.getElementById('myArr2');
    let myArr3 = document.getElementById('myArr3');
    myArr.innerText= ''
    myArr2.innerText=''
    myArr3.innerText=''
    arr = [];

    for (let i = 0; i < len; i++){

        arr.push(Math.floor(Math.random() * (100 - 11) + 11));
        let myNumber = document.createElement('p');
        myNumber.innerText=arr[i];

        if (i < 10){

            myArr.append(myNumber);

        } else if (i >= 10 && i < 20){

            myArr2.append(myNumber);

        } else {

            myArr3.append(myNumber);

        }

    }
    if (darkMode === true) {

        let ourP = document.getElementsByTagName('p');
        for (let i = 0; i < ourP.length; i++) {

            ourP[i].style.backgroundColor = 'white';

        }
    }
}

//Main function to create array //
displayArr(len);
let N = arr.length;

//Handling dark mode //

if (localStorage.getItem("darkmode") === 'true'){

    fillerColor = '#121212';
    oppositeFillerColor='white'
    document.body.style.backgroundColor='#121212';
    let ourP = document.getElementsByTagName('p');
    let ourH4 = document.getElementsByTagName('h4');
    for (let i=0; i<ourP.length; i++){

        ourP[i].style.backgroundColor='white';

        }
    for (let i=0; i<ourH4.length; i++){

        ourH4[i].style.color='white';

    }
    buttonDarkMode.innerText='Light mode';
    buttonDarkMode.classList.remove('btn-dark');
    buttonDarkMode.classList.add('btn-light');
    darkMode = true;
}


let red = '#ff595e'
let yellow = '#ffca3a'
let green = '#8ac926'
let blue = '#1982c4'
let purple = '#6a4c93'