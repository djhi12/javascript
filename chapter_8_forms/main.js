// const form = document.form[1];
// console.log(form);

// const form1 = document.forms.search;
// console.log(form1);

// const form2 = document.forms['search'];
// console.log(form2);

// const [input, button] = form.elements;
// console.log([input, button]);

// const input1 = form.searchInput;
// console.log(input1); // form is not defined

// const input = form['searchInput'];
// console.log(input); // form is not defined

// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused', false));
// input.addEventListener('blur', () => alert('blurred', false));


// const form = document.forms['search'];
// form.addEventListener ('submit', search, false);

// function search() {
//     alert('Form Submitted');
// }

// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

function search(event) {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
    input.value = 'Search Here';
}

document.forms.hero.heroName.focus();


// -------
const form3 = document.forms['hero'];
form3.addEventListener('submit', makeHero, false);

function makeHero(){
    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form3.heroName.value; // create a name property based on the input field's value

    hero.realName = form3.realName.value;



    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog

    hero.powers = [];
    // for (let i=0; 1 < form3.powers.length; i++ ){
    //     if (form3.powers[i].checked) {
    //         hero.powers.push(form3.powers[i].value);
    //     }
    // }

    hero.powers = [...form3.powers].filter(box => checked).map(box => box.value);

    console.log(powers);

    return hero;

    console.log(form3.powers);
}
