<script>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const datas = () => [
  /*
  {
    depth1: '',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/',
        status: 'ing', // ing, partend, end, moding, confirm
        create: '2023.03.24',
        log: [
          {
            // { date: '2023.03.24', text: '' },
          }
        ],
      },
    ],
  },
  */
  {
    depth1: '공통',
    datas: [
      {
        depth2: '로딩',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/loading-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide-popup',
        status: 'end',
        create: '2023.07.07',
        update: '2023.08.13',
        log: [
          {
            date: '2023.08.08',
            text: 'Agent_P00_l011 품목선택 팝업 깨짐 현상 수정',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l003 상담결과 라디오 버튼 추가, 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l004 상담결과 라디오 버튼 추가, 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l005 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l007 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l008 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l009 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l010 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P00_l012 정렬 수정, x버튼 라인 삭제',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 1',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 2',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 한개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 두개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '타이틀만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '텍스트만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-004',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '약관동의',
        depth3: '상세',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/clause-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '오류 안내\nCommon_P00_p013',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/error/Common_P00_p013',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
    ],
  },
  {
    depth1: 'LM 블로그',
    datas: [
      {
        depth2: '대출상담',
        depth3: '한도 금리 확인',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/LM_P01_l001',
        status: 'end',
        create: '2023.06.27',
        update: '2023.06.30',
        log: [
          { date: '2023.06.29', text: '설명 간격 수정' },
          { date: '2023.06.30', text: '하단 간격 수정' },
        ],
      },
      {
        depth2: '빠른상담신청 내역',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/LM_P02_p001',
        status: 'end',
        create: '2023.06.27',
        log: [],
      },
      {
        depth2: 'SMS상담요청 내역',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/LM_P03_p001',
        status: 'end',
        create: '2023.06.27',
        log: [],
      },
      {
        depth2: '현황조회',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/LM_P05_p001',
        status: 'end',
        create: '2023.06.27',
        update: '2023.06.29',
        log: [{ date: '2023.06.29', text: '타이틀 변경' }],
      },
    ],
  },
  {
    depth1: '에이전트 홈페이지 (영업용)',
    datas: [
      {
        depth2: '메인\nAgent_P00_p001',
        depth3: '오류 페이지',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P00_p001',
        status: 'end',
        create: '2023.06.30',
        log: [],
      },
      {
        depth2: '메인\nAgent_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P01_p001',
        status: 'end',
        create: '2023.06.29',
        update: '2023.06.30',
        log: [
          {
            date: '2023.06.30',
            text: '각 타이틀 변경 및 타이틀과 컨텐츠 간격 수정',
          },
          {
            date: '2023.06.30',
            text: '오류페이지 작업',
          },
        ],
      },
      {
        depth2: '메인',
        depth3: '공지사항\nAgent_P01_l001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P01_l001',
        status: 'end',
        create: '2023.06.29',
        update: '2023.06.30',
        log: [
          {
            date: '2023.06.30',
            text: '타이틀과 컨텐츠 간격 수정',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/agent-002',
        status: 'end',
        create: '2023.07.07',
        update: '2023.08.13',
        log: [
          {
            date: '2023.08.13',
            text: 'Agent_P02_l002 정렬 수정, x버튼 라인 삭제, 내구재선취수수료율 → 내구재물품기본금리로 수정',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P02_l004 정렬 수정, x버튼 라인 삭제, 스크립트 내용 한줄만 노출',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P02_l005 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P02_l006 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P02_l007 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '사전동의리스트\nAgent_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p001',
        status: 'end',
        create: '2023.06.27',
        update: '2023.08.13',
        log: [
          { date: '2023.06.29', text: '설명 위치 변경' },
          { date: '2023.06.30', text: '타이틀 변경 및 조회 버튼 추가' },
          { date: '2023.06.30', text: '조회버튼 크기 수정' },
          { date: '2023.07.04', text: '조회 섹션 수정 (공통)' },
          { date: '2023.08.13', text: '조회조건 -> 신청일자로 수정' },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '상담등록\nAgent_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p002',
        status: 'end',
        create: '2023.06.27',
        update: '2023.08.13',
        log: [
          { date: '2023.06.29', text: '상담등록 버튼 디자인 수정' },
          { date: '2023.06.29', text: '하단 디자인 수정' },
          {
            date: '2023.06.30',
            text: '성명(상호) input 추가, AG손배조건부 타이틀 추가',
          },
          {
            date: '2023.06.30',
            text: '상담/심사 table 선 추가',
          },
          { date: '2023.08.13', text: '마우스오버시 열색 변경' },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '상담등록 내역\nAgent_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p003',
        status: 'end',
        create: '2023.06.27',
        update: '2023.08.13',
        log: [
          { date: '2023.06.30', text: '조회버튼 크기 수정' },
          { date: '2023.07.02', text: '조회 스타일 변경' },
          { date: '2023.08.13', text: '판정결과 삭제' },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '계약등록',
        depth4: '이용자\nAgent_P02_p004',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p004',
        status: 'end',
        create: '2023.06.27',
        update: '2023.08.13',
        log: [
          { date: '2023.06.30', text: '수령/설치주소 필수표시 제거' },
          { date: '2023.06.30', text: '금융정보 타이틀 버튼 제거' },
          { date: '2023.06.30', text: '계약등록 버튼 제거' },
          {
            date: '2023.08.13',
            text: '신품여부 -> 납부방법 변경, 설립일자 / 대표업태 / 대표업종 추가, 전화번호 입력칸 변경',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '계약등록',
        depth4: '연대보증인\nAgent_P02_p005',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p004',
        status: 'end',
        create: '2023.06.27',
        log: [],
      },
      {
        depth2: '내구재할부',
        depth3: '계약등록내역\nAgent_P02_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p006',
        status: 'end',
        create: '2023.06.27',
        update: '2023.07.02',
        log: [
          { date: '2023.06.30', text: '항목별 타이틀 간격 수정' },
          { date: '2023.06.30', text: '조회버튼 크기 수정' },
          { date: '2023.07.02', text: '조회 스타일 변경' },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '대금결제내역\nAgent_P02_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p007',
        status: 'end',
        create: '2023.06.29',
        update: '2023.08.13',
        log: [
          { date: '2023.06.29', text: '검색 간격수정' },
          { date: '2023.06.30', text: '항목별 타이틀 간격 수정' },
          { date: '2023.06.30', text: '조회버튼 크기 수정' },
          { date: '2023.07.02', text: '조회 스타일 변경' },
          {
            date: '2023.08.13',
            text: '동의요청일자 -> 결제일로 수정',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '판매점/품목내역\nAgent_P02_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p008',
        status: 'end',
        create: '2023.06.29',
        update: '2023.08.24',
        log: [
          { date: '2023.06.29', text: '검색 간격수정' },
          { date: '2023.06.30', text: '등록일 > 등록일자 변경' },
          { date: '2023.07.04', text: '조회 섹션 수정 (공통)' },
          {
            date: '2023.08.13',
            text: '사업자번호 -> 판매점으로 수정',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '민원접수내역\nAgent_P02_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p009',
        status: 'end',
        create: '2023.06.29',
        update: '2023.07.02',
        log: [
          { date: '2023.06.29', text: '검색 간격수정' },
          { date: '2023.06.29', text: '엑셀 버튼 삭제 및 민원상태 색상 추가' },
          { date: '2023.07.02', text: '조회 스타일 변경' },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/agent-003',
        status: 'end',
        create: '2023.08.13',
        log: [
          {
            date: '2023.08.13',
            text: 'Agent_P03_l001 정렬 수정, x버튼 라인 삭제',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P03_l002 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P03_l003 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
          {
            date: '2023.08.13',
            text: 'Agent_P03_l004 정렬 수정, x버튼 라인 삭제, byte 계산 추가',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '상담등록\nAgent_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p001',
        status: 'end',
        create: '2023.06.19',
        update: '2023.08.13',
        log: [
          { date: '2023.06.22', text: '체크박스 버튼 활성화' },
          { date: '2023.06.24', text: '체크박스 선택시 배경 색상 변경' },
          {
            date: '2023.08.13',
            text: '이용자 연대보증인 내역 판정결과 삭제',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '상담등록내역\nAgent_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p002',
        status: 'end',
        create: '2023.06.19',
        log: [],
      },
      {
        depth2: '할부승계',
        depth3: '계약등록\nAgent_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p003',
        status: 'end',
        create: '2023.06.21',
        update: '2023.08.13',
        log: [
          { date: '2023.06.22', text: '조회내역 없음 추가' },
          { date: '2023.06.24', text: '버튼 위치 수정' },
          {
            date: '2023.08.13',
            text: '전화번호 입력칸 수정',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '계약등록내역\nAgent_P03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p004',
        status: 'end',
        create: '2023.06.29',
        update: '2023.06.29',
        log: [{ date: '2023.06.29', text: '검색 간격 수정' }],
      },
      {
        depth2: '공지사항',
        depth3: '목록\nAgent_P04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P04_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세\nAgent_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P04_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '교육정보',
        depth3: '목록\nAgent_P05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P05_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '교육정보',
        depth3: '상세\nAgent_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P05_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '업무절차',
        depth3: '목록\nAgent_P06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P06_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '업무절차',
        depth3: '상세\nAgent_P06_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P06_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '각종서식다운로드',
        depth3: '목록\nAgent_P07_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P07_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '각종서식다운로드',
        depth3: '상세\nAgent_P07_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P07_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '자산양수도',
        depth3: '팝업\nagent-04',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/agent-04',
        status: 'end',
        create: '',
        update: '2023.08.08',
        log: [
          {data: '2023.08.08', text: '조회 팝업 추가'}
        ],
      },
      {
        depth2: '자산양수도',
        depth3: '매입진행내역\nAgent_P09_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p001',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '자산양수도',
        depth3: '수납진행내역\nAgent_P09_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p002',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '자산양수도',
        depth3: '사전심사진행내역\nAgent_P09_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p003',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '자산양수도',
        depth3: '취소/상환금액 확인\nAgent_P09_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p005',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정 및 페이징 삭제',
          },
        ],
      },
      {
        depth2: '자산양수도',
        depth3: '연체매각리스트\nAgent_P09_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p006',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '1차정산내역\nAgent_P10_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p001',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '2차정산내역\nAgent_P10_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p002',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '심사승인내역\nAgent_P10_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p003',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '한도현황\nAgent_P10_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p004',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '사전동의내역\nAgent_P10_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p005',
        status: 'end',
        create: '2023.07.02',
        update: '2023.07.03',
        log: [
          {
            date: '2023.07.03',
            text: '조회된 내역이 없을 경우 나오는 테이블 위치 수정',
          },
        ],
      },
    ],
  },
];

export default {
  setup() {
    const tableDatas = datas();

    const route = useRoute();

    const statusText = {
      pending: '보류',
      ing: '작업중',
      partend: '부분작업완료',
      end: '작업완료',
      moding: '수정중',
      confirm: '검수완료',
    };
    const dates = (() => {
      const array = [];

      const add = (date) => {
        if (
          typeof date === 'string' &&
          date.length &&
          array.indexOf(date) === -1
        ) {
          array.push(date);
        }
      };

      tableDatas.forEach((item) => {
        item.datas.forEach((data) => {
          add(data.create);

          data.log.sort((a, b) => {
            var dateA = a.date.toUpperCase();
            var dateB = b.date.toUpperCase();
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }
            return 0;
          });

          data.log.forEach((log) => {
            add(log.date);
          });

          if (data.log.length) {
            data.update = data.log[data.log.length - 1].date;
          }
        });
      });

      array.sort();

      return array;
    })();
    const latestDate = dates[dates.length - 1];

    const renderVal = (datas, i, key, testKey) => {
      const val = datas[i][key];
      const testVal = testKey && datas[i][testKey];
      const prevIndex = i - 1;
      const result = val.replace(/\n/g, '<br>');

      if (!(prevIndex >= 0 && datas[prevIndex])) return result;

      const noRender = datas[prevIndex][key] === val;

      if (testVal) {
        if (testVal === datas[prevIndex][testKey] && noRender) {
          return '';
        } else {
          return result;
        }
      } else {
        if (noRender) {
          return '';
        } else {
          return result;
        }
      }
    };

    const printVal = (val) => {
      return val.replace(/\n/g, '<br>');
    };

    const bottomBar = ref(null);
    const fake = ref(null);

    const path = computed(() => {
      return route.path;
    });

    const update = () => {
      if (bottomBar.value && fake.value) {
        const height = bottomBar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && bottomBar.value) {
        bottomBar.value.style.marginLeft = `-${html.scrollLeft}px`;
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      bottomBar,
      fake,
      tableDatas,
      statusText,
      latestDate,
      path,
      renderVal,
      printVal,
    };
  },
};
</script>

<template>
  <div class="contIndex">
    <div class="index-wrap">
      <div class="index">
        <h1 class="index-title">하나캐피탈 - Agent</h1>
        <div class="index-gnb">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                :href="`${
                  path.match('guide-index') ? '..' : '.'
                }/guide/component`"
                target="_blank"
                class="index-button"
              >
                컴포넌트 가이드
              </a>
            </div>
          </div>
        </div>
        <div class="index-bottom" ref="bottomBar">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                v-for="(item, i) in tableDatas"
                :key="i"
                :href="`#section${i}`"
                class="index-button"
              >
                {{ item.depth1 }}
              </a>
            </div>
          </div>
        </div>
        <div class="index-datas" id="indexTable">
          <div
            class="index-section"
            v-for="(item, i) in tableDatas"
            :key="i"
            :id="`section${i}`"
          >
            <h2 class="index-section__title">{{ item.depth1 }}</h2>
            <div class="index-table">
              <table>
                <colgroup>
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col />
                  <col width="100px" />
                  <col width="100px" />
                  <col width="110px" />
                  <col width="300px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>depth2</th>
                    <th>depth3</th>
                    <th>depth4</th>
                    <th>depth5</th>
                    <th>depth6</th>
                    <th>path</th>
                    <th>status</th>
                    <th>create</th>
                    <th>update</th>
                    <th>log</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in item.datas" :key="i">
                    <td v-html="renderVal(item.datas, i, 'depth2')"></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth3', 'depth2')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth4', 'depth3')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth5', 'depth4')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth6', 'depth5')"
                    ></td>
                    <td>
                      <a
                        :href="`${path.match('guide-index') ? '..' : '.'}${
                          data.path
                        }`"
                        target="_blank"
                      >
                        {{ data.path }}
                      </a>
                    </td>
                    <td>
                      <span
                        v-if="data.status.length"
                        :class="`index-status index-status--${data.status}`"
                      >
                        {{ statusText[data.status] }}
                      </span>
                    </td>
                    <td
                      :class="{
                        'is-emphasis': latestDate === data.create,
                      }"
                    >
                      {{ data.create }}
                    </td>
                    <td
                      :class="[
                        {
                          'is-emphasis': latestDate === data.update,
                        },
                      ]"
                    >
                      {{ data.update }}
                    </td>
                    <td>
                      <ul v-if="data.log.length" class="index-log">
                        <li
                          v-for="(log, i) in data.log"
                          :key="i"
                          :class="[
                            'index-log__item',
                            {
                              'is-emphasis': latestDate === log.date,
                            },
                          ]"
                        >
                          <div class="index-log__date">
                            <span>[{{ log.date }}]</span>
                          </div>
                          <div
                            class="index-log__text"
                            v-html="printVal(log.text)"
                          ></div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-fake-botttom" ref="fake"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets_agent/scss/views/uiGuide/GuideIndex.scss';
</style>
