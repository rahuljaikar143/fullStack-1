const fileUpload = document.getElementById('fileUpload');
const fileLabel = document.getElementById('fileLabel');
const personalInfoForm = document.getElementById('personalInfoForm');

fileUpload.addEventListener('change', (event) => {
  if (event.target.files.length > 0) {
    fileLabel.innerText = `Selected file: ${event.target.files[0].name}`;
  } else {
    fileLabel.innerText = 'No file chosen';
  }
});

function resetForm() {
  personalInfoForm.reset();

  const newFileUpload = fileUpload.cloneNode(true);
  fileUpload.parentNode.replaceChild(newFileUpload, fileUpload);

  fileLabel.innerText = 'No file chosen';
}
