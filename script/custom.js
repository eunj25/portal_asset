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
  TaskDefine: '자동화업무 제안/선정',
  TaskDefineCreate: '자동화업무 제안/선정',
  TaskDeployConfirm: '배포실행/승인'
};
const pageHint = {
  TaskDefine: '목록',
  TaskDefineCreate: '자동화업무 제안 작성',
  TaskDeployConfirm: '구현 된 자동화업무 운영이관 승인'
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

// teb_menu
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".tab_button");
  const tabContents = document.querySelectorAll(".tab_content");

  function switchTab(event) {
    tabButtons.forEach(button => button.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    const targetContent = document.getElementById(event.currentTarget.dataset.tab);

    event.currentTarget.classList.add("active");
    targetContent.classList.add("active");
  }

  tabButtons.forEach(button => button.addEventListener("click", switchTab));
});

