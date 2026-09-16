    const notices = [
      {
        id: 106,
        category: "전사",
        title: "2026년 하반기 임직원 건강검진 안내",
        department: "인사팀",
        date: "2026.09.11",
        views: 1248
      },
      {
        id: 105,
        category: "메디컬",
        title: "추석 연휴 의료기관 운영 안내",
        department: "운영지원팀",
        date: "2026.09.09",
        views: 783
      },
      {
        id: 104,
        category: "본사",
        title: "외부 협력사 방문 및 회의실 이용 절차 안내",
        department: "대외협력실",
        date: "2026.09.07",
        views: 426
      },
      {
        id: 103,
        category: "제약",
        title: "연구개발구역 출입 및 보안 절차 안내",
        department: "경영지원본부",
        date: "2026.09.04",
        views: 592
      },
      {
        id: 102,
        category: "바이오",
        title: "연구시설 정기 안전점검 실시 안내",
        department: "연구지원팀",
        date: "2026.09.02",
        views: 347
      },
      {
        id: 101,
        category: "메디텍",
        title: "사내 시설 및 개발장비 이용 안내",
        department: "운영지원팀",
        date: "2026.08.31",
        views: 318
      }
    ];

  const noticeDetails = {
    106: {
      content: `
        <p>
          임직원 여러분의 건강관리 및 질병 예방을 위해
          <strong>2026년 하반기 임직원 건강검진</strong>을 아래와 같이 실시하오니,
          대상 임직원께서는 기간 내 검진을 완료하여 주시기 바랍니다.
        </p>

        <h3>■ 검진 대상</h3>
        <p>CYAN GROUP 및 전 계열사 대상 임직원</p>

        <h3>■ 검진 기간</h3>
        <p>2026.09.14 ~ 2026.11.30</p>

        <h3>■ 검진 기관</h3>
        <p>
          CYAN MEDICAL 산하 성하대학교병원 건강검진센터 및 제휴 검진기관
        </p>

        <h3>■ 신청 방법</h3>
        <p>
          사내 포털 건강검진 신청 메뉴에서 희망 일정 및 검진기관 선택
        </p>

        <p>
          <strong>※ 접속 경로 │ Quick Links → 복리후생 → 임직원 건강검진</strong>
        </p>

        <h3>■ 유의사항</h3>
        <p>
          검진 항목 및 예약 가능 일정은 기관별로 상이할 수 있으며,
          예약 완료 후 안내되는 검진 전 유의사항을 반드시 확인하여 주시기 바랍니다.
        </p>

        <p>문의 │ CYAN GROUP 인사팀</p>
      `,

     comments: [
    {
      name: "강우진",
      organization: "CYAN PHARMA · 글로벌사업본부",
      position: "과장",
      date: "09.11 14:17",
      content: "검진 전날 저녁 일정이 있는데 금식 시간만 지키면 되는 겁니까.",
      replies: [
        {
          name: "차이겸",
          organization: "CYAN PHARMA · 전략사업본부",
          position: "차장",
          date: "09.11 14:21",
          content: "검진 전날 회식은 검진 항목에 포함되지 않는 것으로 알고 있습니다.",
          replies: [
            {
              name: "윤이안",
              organization: "CYAN MEDICAL · 성하대학교병원 · 순환기내과",
              position: "MD",
              date: "09.11 14:28",
              content: "포함은 안 되는데 결과에는 포함될 수 있습니다. 예약 후 안내되는 금식 시간은 지켜주세요."
            }
          ]
        }
      ]
    },

    {
      name: "오재현",
      organization: "CYAN MEDITECH · AI솔루션팀",
      position: "주임",
      date: "09.11 15:04",
      content: "성하대학교병원으로 신청하면 임직원 전용 접수 창구가 따로 있나요.",
      replies: [
        {
          name: "강도연",
          organization: "CYAN MEDITECH · 임상개발팀",
          position: "PM",
          date: "09.11 15:11",
          content: "지난번에는 일반 검진 접수로 안내받았습니다. 혹시 변경됐으면 인사팀 확인 부탁드립니다."
        }
      ]
    },

    {
      name: "함해솔",
      organization: "CYAN BIO · 플랫폼연구실",
      position: "책임연구원",
      date: "09.11 16:02",
      content: "신청 화면에 오전 시간만 남아 있는데 추가 일정이 열릴 예정인가요.",
      replies: [
        {
          name: "백도윤",
          organization: "CYAN BIO · 플랫폼연구실",
          position: "선임연구원",
          date: "09.11 16:07",
          content: "함 책임님, 일단 남은 시간부터 잡으세요. 추가 일정 기다리다 11월 됩니다."
        }
      ]
    },

    {
      name: "윤지혁",
      organization: "CYAN GROUP · 그룹전략기획실",
      position: "차장",
      date: "09.11 17:34",
      content: "예약 변경 가능 기간도 신청 화면에 함께 표기해주시면 좋겠습니다.",
      replies: []
    }
  ]
},

  105: {
    content: `
      <p>
        추석 연휴 기간 중 CYAN MEDICAL 산하 의료기관의 진료 및 검진 운영 일정을
        아래와 같이 안내드리오니, 의료기관 이용 및 업무에 참고하여 주시기 바랍니다.
      </p>

      <h3>■ 운영 기간</h3>
      <p>2026.09.24 ~ 2026.09.27</p>

      <h3>■ 대상 기관</h3>
      <p>
        CYAN MEDICAL 산하 성하대학교병원 및 주요 의료기관
      </p>

      <h3>■ 외래 진료</h3>
      <p>
        연휴 기간 외래 진료는 휴진을 원칙으로 하며,
        일부 진료과는 사전 예약 환자를 대상으로 제한 운영합니다.
      </p>

      <h3>■ 응급진료</h3>
      <p>
        성하대학교병원 응급의료센터는 연휴 기간에도 24시간 정상 운영합니다.
      </p>

      <h3>■ 건강검진센터</h3>
      <p>
        연휴 기간 휴무하며, 2026.09.28부터 정상 운영합니다.
      </p>

      <h3>■ 이용 안내</h3>
      <p>
        진료과별 운영 일정 및 예약 가능 여부가 상이할 수 있으므로
        방문 전 성하대학교병원 예약·진료 안내를 확인하여 주시기 바랍니다.
      </p>

      <p>문의 │ CYAN MEDICAL 운영지원팀</p>
    `,

comments: [
  {
    name: "서태현",
    organization: "CYAN MEDICAL · 성하대학교병원 · 응급의학과",
    position: "MD",
    date: "09.09 10:13",
    content: "확인했습니다.",
    replies: []
  },

  {
    name: "한동우",
    organization: "CYAN PHARMA · 영업마케팅본부",
    position: "대리",
    date: "09.09 11:26",
    content: "연휴 기간 중 응급진료가 필요한 경우 임직원도 일반 환자와 동일하게 접수하면 될까요?",
    replies: [
      {
        name: "윤이안",
        organization: "CYAN MEDICAL · 성하대학교병원 · 순환기내과",
        position: "MD",
        date: "09.09 11:41",
        content: "네. 응급실은 동일하게 접수하시면 됩니다. 증상에 따라 진료 순서가 달라질 수 있습니다."
      }
    ]
  },

  {
    name: "차이겸",
    organization: "CYAN PHARMA · 전략사업본부",
    position: "차장",
    date: "09.09 13:08",
    content: "연휴에도 출근하시는 분들이 계시네요.",
    replies: [
      {
        name: "윤이안",
        organization: "CYAN MEDICAL · 성하대학교병원 · 순환기내과",
        position: "MD",
        date: "09.09 13:16",
        content: "남의 일처럼 말씀하시네요."
      }
    ]
  },

{
  name: "윤재령",
  organization: "CYAN MEDICAL · 성하대학교병원 · 진단검사의학부",
  position: "MT",
  date: "09.09 16:22",
  content: "검사실 운영 일정은 부서별 안내 확인해주세요.",
  replies: []
}
  ]
},

  102: {
    content: `
      <p>
        연구시설의 안전한 운영 및 사고 예방을 위해 정기 안전점검을 아래와 같이 실시하오니,
        해당 부서 임직원께서는 점검 일정 및 유의사항을 확인하여 주시기 바랍니다.
      </p>

      <h3>■ 점검 일시</h3>
      <p>2026.09.07 / 09:00 ~ 17:00</p>

      <h3>■ 점검 대상</h3>
      <p>CYAN BIO 연구시설 및 공용 실험공간</p>

      <h3>■ 주요 점검 항목</h3>
      <p>연구장비 및 전기설비 상태</p>
      <p>시약·화학물질 보관 및 관리 상태</p>
      <p>비상설비 및 안전장비 관리 상태</p>
      <p>연구공간 내 안전수칙 준수 여부</p>

      <h3>■ 협조사항</h3>
      <p>
        점검 전 개인 실험공간 및 공용 연구장비 주변을 정리하여 주시기 바라며,
        점검 시간 중 일부 연구장비 및 시설 이용이 제한될 수 있습니다.
      </p>

      <h3>■ 유의사항</h3>
      <p>
        점검 과정에서 안전상 조치가 필요한 사항이 확인될 경우
        현장 조치 또는 추가 점검이 진행될 수 있습니다.
      </p>

      <p>문의 │ CYAN BIO 연구지원팀</p>
 `,

comments: [
  {
    name: "백도윤",
    organization: "CYAN BIO · 플랫폼연구실",
    position: "선임연구원",
    date: "09.02 14:08",
    content: "함책임님 자리도 개인 실험공간에 포함됩니까.",
    replies: [
      {
        name: "함해솔",
        organization: "CYAN BIO · 플랫폼연구실",
        position: "책임연구원",
        date: "09.02 14:12",
        content: "안 됩니다.",
        replies: [
          {
            name: "백도윤",
            organization: "CYAN BIO · 플랫폼연구실",
            position: "선임연구원",
            date: "09.02 14:14",
            content: "...제일 위험한데."
          }
        ]
      }
    ]
  }
]
   }
};
