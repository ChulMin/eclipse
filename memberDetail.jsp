<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<%@page import="kr.co.koreaIT.memberDTO"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 상세보기 화면</title>
<style type="text/css">
table {
	border: 3px groove yellow;
}
</style>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");
	
	String id = request.getParameter("id");
	//데이터베이스에 접근하는 객체 생성 작업
	memberDAO mdao = new memberDAO();
	memberDTO mDto = mdao.idSelectMember(id);
	%>
	<table border="1" style="text-align: center;background:greenyellow">
		<tr style="background:#f5555f">
			<th width="250" height="30px">아이디</th>
			<td width="350"><%=mDto.getId()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">이름</th>
			<td width="350"><%=mDto.getName()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">이메일</th>
			<td width="350"><%=mDto.getEmail()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">전화번호</th>
			<td width="350"><%=mDto.getPhone()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">취미</th>
			<td width="350"><%=mDto.getHobby()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">직업</th>
			<td width="350"><%=mDto.getJob()%></td>
		</tr>
		<tr style="background:#f5555f">
			<th width="250" height="30px">연령대</th>
			<td width="350"><%=mDto.getAge()%></td>
		</tr>
		<tr style="background:yellowgreen">
			<th width="250" height="30px">기타사항</th>
			<td width="350"><%=mDto.getInfo()%></td>
		</tr>
		<tr style="background:yellowgreen">
			<th width="250" height="30px">가입날짜</th>
			<td width="350"><%=mDto.getReg_date()%></td>
		</tr>
		<tr align="center" style="background:yellowgreen">
			<td colspan="2">
				<button type="button" onclick="location.href='memberJoinForm.jsp'">처음으로 돌아가기</button>
				<button type="button" onclick="location.href='memberList.jsp'">회원목록으로 돌아가기</button>
				<button type="button" onclick="location.href='memberUpdate.jsp?id=<%=mDto.getId()%>'">회원정보수정</button>
				<button type="button" onclick="location.href='memberDelete.jsp?id=<%=mDto.getId()%>'">회원정보삭제</button>
			</td>
		</tr>
	</table>
</body>
</html>