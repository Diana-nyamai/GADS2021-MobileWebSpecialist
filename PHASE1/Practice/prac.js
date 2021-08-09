const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    const review = document.getElementById('review');

    if (review.classList.contains('hide')){
        review.classList.remove('hide');
    }
    else{
        review.classList.add('hide');
    }
});