import * as moodImages from '@/images/index';





function createMoodIndicator(image) {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = image;
    return img;
}

const moodIndicator = document.createElement("div");
moodIndicator.classList.add('mood-indicator');
moodIndicator.append(createMoodIndicator(moodImages.ReallySad));
moodIndicator.append(createMoodIndicator(moodImages.Sad));
moodIndicator.append(createMoodIndicator(moodImages.Fine));
moodIndicator.append(createMoodIndicator(moodImages.Content));
moodIndicator.append(createMoodIndicator(moodImages.Happy));


    const emogies = moodIndicator.childNodes;

    for(let i=0; i<emogies.length; i++){
        let index = getItemLocalStore('color')
        if(index){
            emogies[index].classList.add('img-active')
        }
        
    }
    

    emogies.forEach ((emogi,index) => {
       
        emogi.addEventListener('click', function() {
            emogies.forEach((emogi) => {
                emogi.classList.remove('img-active');
                localStorage.removeItem(this.classList)
        })

            this.classList.add('img-active');
            setItemLocalStore('color', index);

        })

    })
 


    

    function setItemLocalStore(key, value) {
        localStorage.setItem(key, value);
    }
    
    function getItemLocalStore(key) {
        let result = localStorage.getItem(key)
        if (result==null){
            return "";
        }
        return result;
    }


export default moodIndicator;