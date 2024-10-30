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
  TaskDefineCreate: '자동화 과제요청',
  TaskDeployConfirm: '배포실행/승인',
  TaskDevelopStatus: '과제목록',
  TaskDevelopDetails: '과제상세',

  // 운영관리
  TaskOperationStatus: '운영 관리',

  // 리포트/통계
  TaskKPIs: 'KPIs',
  TaskDailyExeReport: '수행 리포트',

  // 관리자
  BaseInfoValue: '기타 설정',
  Members: '사용자 관리',
  TaskProcessApproveLevel: '업무단계별 승인권한 설정',
  MenuAccessLevel: '메뉴권한 설정',

  // 헬프
  errorreport: '장애발생 신고/처리현황',
  errorreportCreate: '장애발생 신고/처리현황',
  notice: '공지사항',
  noticeCreate: '공지사항',
  noticeDetails: '공지사항',
  QNA: '문의하기',
  QNACreate: '문의하기',
  qnaDetails: '문의하기',
};
const pageHint = {
  TaskDefine: '목록',
  TaskDefineCreate: '자동화업무 제안 작성',
  TaskDeployConfirm: '구현 된 자동화업무 운영이관 승인',
  TaskDevelopStatus: '개발중인 과제 진행 현황',
  TaskDevelopDetails: '개발중인 과제 현황 상세',

  // 운영관리
  TaskOperationStatus: '운영과제 관리 및 프로세스 실행',

  // 리포트/통계
  TaskKPIs: 'RPA KPI 리포트',
  TaskDailyExeReport: '최근 7일이내 시나리오 수행 상태 리포트',

  // 관리자
  BaseInfoValue: 'Portal 관리를 위한 기타 설정 관리',
  Members: '목록',
  TaskProcessApproveLevel: '상세',
  MenuAccessLevel: '상세',

  // 헬프
  errorreport: '목록',
  errorreportCreate: '작성',
  notice: '목록',
  noticeCreate: '작성',
  noticeDetails: '상세',
  QNA: '목록',
  QNACreate: '작성',
  qnaDetails: '상세',
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

// modal
$(document).ready(function() {

  $('#openModal').on('click', function() {
    $('.bg').fadeIn(200);
    $('#prompt').fadeIn(200);
  });

  $('#prompt #closeModal, .bg').on('click', function() {
    $('.bg').fadeOut(200);
    $('#prompt').fadeOut(200);
  });

  $('#prompt #checkModal').on('click', function() {
    $('.bg').fadeOut(200);
    $('#prompt').fadeOut(200);
  });
  
});

const toggleList = document.querySelectorAll(".toggleSwitch");

toggleList.forEach(($toggle) => {
  $toggle.onclick = () => {
    $toggle.classList.toggle('active');
  }
});