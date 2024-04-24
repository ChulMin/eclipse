<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입 페이지</title>
</head>
<body>
	<main style="text-align: center;">
		<header>
			<h2>회원가입 페이지</h2>
		</header>
		<form method="post" action="memberJoinPro.jsp">
			<table border="1" width="750" align="center"
				style="background-color: #abcdef;">
				<tr>
					<th scope="col" width="150">아이디</th>
					<td><input type="text" name="id" size="80" placeholder="ID 입력"></td>
				</tr>
				<tr>
					<th scope="col" width="150">패스워드</th>
					<td><input type="password" name="passwd1" size="80"
						placeholder="PW 입력"></td>
				</tr>
				<tr>
					<th scope="col" width="150">패스워드 확인</th>
					<td><input type="password" name="passwd2" size="80"
						placeholder="PW 확인"></td>
				</tr>
				<tr>
					<th scope="col" width="150">이&nbsp;&nbsp;&nbsp;름</th>
					<td><input type="text" name="name" size="80"
						placeholder="이름 입력"></td>
				</tr>
				<tr>
					<th scope="col" width="150">이메일</th>
					<td><input type="email" name="email" size="80"
						placeholder="전자우편 입력"></td>
				</tr>
				<tr>
					<th scope="col" width="150">전화번호</th>
					<td><input type="tel" name="phone" size="80"
						placeholder="전화번호 입력"></td>
				</tr>
				<tr>
					<th scope="col" width="150">관심분야</th>
					<td><input type="checkbox" name="hobby" size="80" value="등산">등산
						<input type="checkbox" name="hobby" size="80" value="영화">영화
						<input type="checkbox" name="hobby" size="80" value="게임">게임
						<input type="checkbox" name="hobby" size="80" value="산책">산책
						<input type="checkbox" name="hobby" size="80" value="웹툰">웹툰
						<input type="checkbox" name="hobby" size="80" value="투자">투자
						<input type="checkbox" name="hobby" size="80" value="볼링">볼링
					</td>
				</tr>
				<tr>
					<th scope="col" width="150">직업</th>
					<td><select name="job">
							<option value="교수">교수</option>
							<option value="공무원">공무원</option>
							<option value="프로그래머">프로그래머</option>
							<option value="자영업">자영업</option>
							<option value="서비스">서비스</option>
					</select></td>
				</tr>
				<tr>
					<th scope="col" width="150">연령대</th>
					<td><input type="radio" name="age" value="10">10대 <input
						type="radio" name="age" value="20">20대 <input type="radio"
						name="age" value="30">30대 <input type="radio" name="age"
						value="40">40대 <input type="radio" name="age" value="50">50대
						<input type="radio" name="age" value="60">60대 <input
						type="radio" name="age" value="70">70대 <input type="radio"
						name="age" value="80">80대</td>
				</tr>
				<tr>
					<th scope="col" width="150">기타사항</th>
					<td><textarea rows="7" cols="80" name="info"></textarea></td>
				</tr>
				<tr>
					<td colspan="2">
					<input type="submit" value="회원가입">&nbsp;&nbsp;
					 <input type="reset" value="가입취소">
					 </td>
				</tr>
			</table>
		</form>
	</main>
</body>
</html>