const correcAnswers = ['A', 'A', 'B', 'B', 'A'];
const form = document.querySelector('.form-content');
const scoreContent = document.querySelector('.score-text');

const reward = document.querySelector('.rewards');

const scoreBox = document.querySelector('.score-content');

reward.style.color = 'red';
reward.style.fontSize = '35px';

form.addEventListener('submit', e => {

    e.preventDefault(); 

    let score = 0; 

    let userAnswers = [form.ques1.value, form.ques2.value, form.ques3.value, form.ques4.value, form.ques5.value]
    

    userAnswers.forEach((answer, index)=>{

        if (answer === correcAnswers[index]) {

            score += 20;
            if (score > 50 ) {
                
                    let number = 0;

                    
                    let timer = setInterval(() => {
                    
                        scoreContent.textContent = number +' %';
                        

                        if (number === score) {
                            clearInterval(timer);
                            reward.textContent = 'Your are a Tech Wiz!!';    
                            
                        } else {

                            number++;                
                        }
                    }, 5);

                    

            }
            

            if (score === 50 ) {
                
    
                let number = 0;

                let timer = setInterval(() => {
                
                    scoreContent.textContent = number +' %';
                    if (number === score) {
                        clearInterval(timer);
                        reward.textContent = 'You are almost there!';
                    } else {

                        number++;                
                    }
                }, 20);
                

                }
                
            
            }

            else{

                
            let number = 0;

            let timer = setInterval(() => {
            
                scoreContent.textContent = number +' %' ;
                if (number === score) {
                    
                    clearInterval(timer);
                    reward.textContent = 'sorry to say that you arent ready to be a tech wiz...';
                } else {

                    number++;                
                }
            }, 20);
            
            }
       
    });
    scrollTo(0,0);
    scoreBox.classList.remove('d-none');
} );