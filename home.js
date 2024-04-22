var apple1 = "고혈압 과일과 야채에 함유되어 있는 천연 칼륨이 혈압을\n 내리게 하고 뇌졸중 위험을 감소시키는 효과가 있다는 연구결과가 나왔다.\n\n";
apple1 += "장병과 혈압\n";
apple1 += "정장과 해독\n";
apple1 += "콜레스테롤(Cholesterol)\n";
apple1 += "아연결핍증(피부염, 탈모증 등)\n";
apple1 += "피로회복\n";
apple1 += "암예방에 효과적인 비타민 C\n";
apple1 += "혈색과 설사\n";

var apple2 = "아오리, 홍로, 양광, 부사 등";

var banana1 = "나트륨 배출을 돕는다\n\n";
banana1 += "심장 건강에 좋다\n";
banana1 += "쉽게 포만감을 준다\n";
banana1 += "기분이 좋아진다\n";
banana1 += "피로를 쫓는다\n ";

var banana2 = "모라도, 틴독, 칼다바, 미니, 캐번디시, 애플바나나 등";

var pineapple1 = "비타민 C함유량이 매우 높아 피로 회복에 도움이 되며\n\n";
pineapple1 += "뼈의 형성을 돕는 망간이 풍부하고,\n";
pineapple1 += "칼륨도 많이 포함되어 있어 고혈압 예방이나 동맥경화 예방 등에도 효과적이다.\n";
pineapple1 += "특히 신맛을 내는 구연산은 첫 맛은 자극적이지만 식이섬유가 풍부해 변비에 좋다.\n";

var pineapple2 = "골든 파인애플,코스타리카 파이애플,케이월 파인애플, 코튼캔디 파인애플,레드파인애플 등";

var koreamelon1 = "베타카로틴과 비타민 C 성분을 많이 함유해 세포 산화를 억제하고 활성산소를 제거한다.\n\n";
koreamelon1 += "여름철 자외선으로 손상된 피부세포 재생에 효과적이다.\n";
koreamelon1 += "꼭지와 껍질에 있는 쿠쿠르비타신, 리코펜 등은\n";
koreamelon1 += "항암, 항산화, 항균 작용에 뛰어나다는 점도 잊지 말자\n";

var koreamelon2 = "개구리참외, 열골참외, 감참외, 강서참외, 깐치참외, 노랑참외, 먹참외, 청참외 등";

var pear1 = "소화를 돕고, 중풍을 다스린다.\n\n";
pear1 += " 생배는 육부의 열을 제거하고 삶은 배는 오장에 음을 더한다. \n";
pear1 += "배 잎 : 잎을 달인 즙은 토사곽란,\n";
pear1 += "설사와 구토, 이뇨, 요도, 소독약으로 효과적임.\n";
pear1 += "생배잎즙은 버섯의 중독을 풀어준다.\n";

var pear2 = "한아름, 원황, 조이스킨, 슈퍼골드, 만풍배, 만황, 황금배, 등";

var watermelon1 = "수분이 많은 수박의 가장 큰 효능은 갈증해소다.\n\n";
watermelon1 += " 이뇨작용으로 독소 배출, 항암 효과, 피부 개선,\n";
watermelon1 += "노화 예방, 다이어트에도 효과적이며 고혈압과\n";
watermelon1 += "심장 건강에 도움이 된다.\n";
watermelon1 += "라이코펜으로 인한 콜라겐의 합성을 촉진하기도 한다\n";

var watermelon2 = "홍육종, 황육종, 백육종, 씨없는 수박, 무등산수박, 등";

var mandarin1 = "한방학적으로 처방되어온 감귤의 효능을 보면 위장장해, \n\n";
mandarin1 += "천식, 가래, 식욕부진 및 동맥경화 등에 효과가 있는 것으로 알려져 있다.\n";
mandarin1 += "위암 등에 당유자 과즙을 다려서 복용하면 효과가 있으며,\n";
mandarin1 += "피로회복에 효능이 있다고\n";

var mandarin2 = "금귤, 풋귤, 한라봉, 천혜향, 한라향,레드향,황금향 등";

var orange1 = "오렌지에 함유된 비타민C는 노화, 피부 주름, \n\n";
orange1 += "피부 건조와 손상을 줄이는 기능을 한다. \n";
orange1 += "콜라겐 합성을 도와 피부 탄력도 높인다. \n";
orange1 += "미국 임상 영양학 저널에 게재된 연구에 따르면 오렌지와\n";
orange1 += "같은 감귤류 과일에는 비타민C와 플라보노이드가\n";
orange1 += " 풍부해 피부 상태 개선에 탁월하다고 밝혀졌다.\n";

var orange2 = "네이블, 발렌시아, 카라카라 등";

window.onload = function() {
	// 페이지가 로드될 때 사과 이미지와 내용을 보여줍니다.
	imgLink('../img/사과.PNG');
	changeContent1(apple1);
	changeContent2(apple2);
}

function imgLink(url) {
	var img = document.getElementById("imgLink");
	img.src = url;
}

function siteLink(url) {
	var siteLink = document.getElementById("siteLink");
	siteLink.href = url;
}

// 내용 변경 함수
function changeContent1(content) {
	var paragraph1 = document.getElementById("contentParagraph1");
	paragraph1.innerText = content;
}
function changeContent2(content) {
	var paragraph2 = document.getElementById("contentParagraph2");
	paragraph2.innerText = content;
}
 function fruitscreen() {
        var selectedFruitsList = document.getElementById("selectedFruitsList");
        selectedFruitsList.innerHTML = ""; // 기존 목록 초기화

        var fruits = document.getElementsByClassName("fruit");
        for (var i = 0; i < fruits.length; i++) {
            if (fruits[i].classList.contains("selected")) {
                var fruitName = fruits[i].textContent;
                var li = document.createElement("li");
                li.textContent = fruitName;
                selectedFruitsList.appendChild(li);
            }
        }
    }
function fruitClicked(fruitName) {
	
	var fruit = document.querySelector('.fruit[value="' + fruitName + '"]');
        fruit.classList.toggle("selected");
	var content = "";
	switch (fruitName) {
		case "사과":
			imgLink('../img/사과.PNG');
			changeContent1(apple1);
			changeContent2(apple2);
			break;
		case "바나나":
			imgLink('../img/바나나.PNG');
			changeContent1(banana1);
			changeContent2(banana2);
			break;
		case "파인애플":
			imgLink('../img/파인애플.PNG');
			changeContent1(pineapple1);
			changeContent2(pineapple2);
			break;
		case "참외":
			imgLink('../img/참외.png');
			changeContent1(koreamelon1);
			changeContent2(koreamelon2);
			break;
		case "배":
			imgLink('../img/배.jpg');
			changeContent1(pear1);
			changeContent2(pear2);
			break;
		case "수박":
			imgLink('../img/수박.jpg');
			changeContent1(watermelon1);
			changeContent2(watermelon2);
			break;
		case "귤":
			imgLink('../img/귤.jpg');
			changeContent1(mandarin1);
			changeContent2(mandarin2);
			break;
		case "오렌지":
			imgLink('../img/오렌지.jpg');
			changeContent1(orange1);
			changeContent2(orange2);
			break;
		default:
			content = "해당하는 내용이 없습니다.";
			break;
	}
}
