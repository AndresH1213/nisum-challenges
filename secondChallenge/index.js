const searchBtn = document.getElementById('link-btn')
const inputLink = document.getElementById('image-link');

const dropZoneElement = document.querySelector('.drop-zone');
const dropZoneInput = document.querySelector('.drop-zone-input');


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let thumbnailDiv = dropZoneElement.parentNode.querySelector('.div-image');
    
    if (inputLink.value === "" && thumbnailDiv) {
        dropZoneElement.parentNode.querySelector('.div-image').remove()
        return
    }
    
    if (!thumbnailDiv) {
        thumbnailDiv = document.createElement('div');
        console.log(thumbnailDiv)
        thumbnailDiv.classList.add('div-image')
        dropZoneElement.parentNode.insertBefore(thumbnailDiv, dropZoneElement)
    }

    if (inputLink.value) {
        thumbnailDiv.style.backgroundImage = `url('${inputLink.value}')`;
    } else {
        thumbnailDiv.style.backgroundImage = `url('https://previews.123rf.com/images/pockygallery/pockygallery1506/pockygallery150600020/40867165-no-se-encontr%C3%B3-el-texto-sello-rojo-sobre-blanco.jpg')`
    }

})


dropZoneElement.addEventListener('click', (e) => {
    dropZoneInput.click();
})

dropZoneInput.addEventListener('change', (e) => {
    if (dropZoneInput.files.length) {
        imageVisualization(dropZoneElement, inputElement.files[0]);
    }
})

dropZoneElement.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZoneElement.classList.add('dragover')
})

const dragEventsEnd = ['dragleave', 'dragend']

dragEventsEnd.forEach((dragEv) => {
    dropZoneElement.addEventListener(dragEv, (e) => {
        dropZoneElement.classList.remove('dragover')
    })
});

dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
    dropZoneInput.files = e.dataTransfer.files;
    imageVisualization(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("dragover");
});

const imageVisualization = (dropZoneElement, file) => {
    let thumbnailDiv = dropZoneElement.parentNode.querySelector('.div-image');
    if (!thumbnailDiv) {
        thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('div-image')
        dropZoneElement.parentNode.insertBefore(thumbnailDiv, dropZoneElement)
    }

    thumbnailDiv.dataset.label = file.name

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailDiv.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailDiv.style.backgroundImage = null;
    }
}


 