$(document).ready(function() {
    $('#leaderboard').DataTable({
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
        }
    });
});
