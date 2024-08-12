$(document).ready(function() {
    $.getJSON("https://nextkaki.github.io/data.json", function(data) {
        // 에테르 값을 기준으로 내림차순 정렬
        data.sort(function(a, b) {
            return b.에테르 - a.에테르;
        });
         // 순위 부여
         data.forEach(function(item, index) {
            item.순위 = index + 1;
        });

        let table = $('#leaderboard').DataTable({
            language: {
                "lengthMenu": "페이지 당 _MENU_ 항목",
                "zeroRecords": "데이터가 없습니다.",
                "info": "전체 _TOTAL_ 중 _START_부터 _END_까지",
                "infoEmpty": "데이터가 없습니다.",
                "infoFiltered": "(전체 _MAX_ 항목에서 필터링됨)",
                "search": "검색:",
                "paginate": {
                    "first": "처음",
                    "last": "마지막",
                    "next": "다음",
                    "previous": "이전"
                }
            },
            data: data,
            columns: [
                { data: '순위' },
                { data: '단계' },
                { data: '에테르' },
                { data: '플레이어' },
                { data: '클래스' },
                { data: '모드' },
                { data: '빌드' },
                { data: '영상',
                  render: function(data, type, row) {
                      return `<a href="${data}" target="_blank">Link</a>`;
                  }
                }
            ],
            order: [[2, 'desc']] // '에테르' 컬럼 기준 내림차순 정렬
        });
    });
});
