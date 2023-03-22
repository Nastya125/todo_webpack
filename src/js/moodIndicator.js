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

moodIndicator.addEventListener('click', (event)=> {
    event.target.classList.add('img-active');

    // if(event.target.classList.contains('img-active')){
    //     console.log("Уже есть")
    // }
    //     event.target.classList.remove('img-active');
    // }
})

export default moodIndicator;