// include
window.addEventListener('load', () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (el) => {
    const includePath = el.dataset.includePath;
    if (includePath) {
      fetch(includePath)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            return null;
          }
        })
        .then(data => {
          if (data) {
            el.outerHTML = data;
          }
        })
      } 
  });
});

// pagetitle
const pageTitles = {
  asset: 'RPA Portal design asset',
  TaskDefine: '자동화업무 제안/선정'
};
const pageHint = {
  TaskDefine: '목록'
};

function updateTitle(pageKey) {
  const titleElement = document.getElementById('page-title');
  const hintElement = document.getElementById('page-hint');
  
  if (pageTitles[pageKey]) {
    titleElement.textContent = pageTitles[pageKey];
    hintElement.textContent = pageHint[pageKey];
  } else {
    titleElement.textContent = 'Default Page Title';
    hintElement.textContent = 'Default Page Title';
  }
}
