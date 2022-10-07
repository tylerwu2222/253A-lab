window.onload = (event) => {
    let form = document.getElementById('contact-form');
    form.addEventListener('submit',(event) => {
        // getting name
        const name = document.contactForm.nameField.value;

        //getting degree
        const degree = document.contactForm.degreeField.value;
        let degree_article = 'an';
        if(degree == 'graduate'){
            degree_article = 'a';
        }
        
        // getting checked values
        let checkedValues = [];
        const focuses = document.getElementsByName('focusField');
        for(let i=0; i < focuses.length; ++i){
            if(focuses[i].checked){
                checkedValues.push(focuses[i].value);
            }
        }
        // add comma before 'and' if there are 3 or more terms
        let oxfordAnd = ' and'
        if (checkedValues.length >= 3){
            oxfordAnd = ', and'
        }
        checkedValues = checkedValues.join(', ');
        checkedValues = checkedValues.replace(/,([^,]*)$/, oxfordAnd + '$1')
        
        // replace submit button text with loader onclick
        let submitButton = document.getElementById('submitButton');
        submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
        //then create alert
        setTimeout(()=>{
            window.alert(`Thanks for submitting, ${name}!\n\nYou seem to be ${degree_article} ${degree} student interested in ${checkedValues}.\n\nNice to meet you!`);
            submitButton.innerHTML = 'Submit'
        }, 3000);
        // // on close, set value back to original text
        

        event.preventDefault();
    });
};