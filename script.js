// Challange 1
function printName() {
  document.getElementById('user').innerHTML = 'Poshika';
}
window.addEventListener('load', printName);

// Challage 2
function Change() {
  document.getElementById('btn-click').style.backgroundColor = 'orchid';
}
document.getElementById('btn-click').onclick = Change;

// Clallange 3
function makeSentence() {
  const a = document.getElementById('noun').value;
  const b = document.getElementById('verb').value;
  const c = document.getElementById('adverb').value;
  const d = a + ' ' + b + ' ' + c;
  const join = (document.getElementById('statement').innerHTML = d);
}
document.getElementById('build-button').addEventListener('click', makeSentence);

// Challange 4.1
document.getElementById('grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function () {
  console.log('Child clicked');
});

// Challange 4.2
document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked captured');
  },
  { capture: true }
);

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked captured');
  },
  { capture: true }
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked captured');
  },
  { capture: true }
);

// Challange 5
document.getElementById('category').addEventListener('click', (e) => {
  console.log(e.target.id);
});
