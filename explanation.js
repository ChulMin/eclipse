
// 설명을 배열로 관리

// 마우스 오버 이벤트가 발생했을 때 실행되는 함수
        function show(event, description) {
            var show = document.getElementById("shows");
            show.innerHTML = description;
            show.style.display = "block";
            // 설명 박스를 마우스 위치 오른쪽으로 이동
            show.style.left = (event.pageX + 20) + "px"; /* 마우스 위치 오른쪽으로 20px 이동 */
            show.style.top = (event.pageY) + "px"; /* 마우스 위치에 표시 */
        }

        // 마우스 아웃 이벤트가 발생했을 때 실행되는 함수
        function hide() {
            var hide = document.getElementById("shows");
            hide.style.display = "none";
        }