<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<%@page import="kr.co.koreaIT.memberDTO"%>
<%@page import="java.util.Vector"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원목록리스트</title>
</head>
<body>
	<h2>회원정보 목록 보기 화면</h2>
	<table border="1" style="text-align: center;background:greenyellow">
		<tr>
			<th width="150">아이디</th>
			<th width="150">이름</th>
			<th width="150">이메일</th>
			<th width="150">전화번호</th>
			<th width="150">취미</th>
			<th width="150">직업</th>
			<th width="150">연령대</th>
			<th width="150">기타사항</th>
			<th width="150">가입날짜</th>
		</tr>
		<%
		memberDAO mdao = new memberDAO();
		Vector<memberDTO> vec = mdao.Allselectmember();
		for (int i = 0; i < vec.size(); i++) {
			memberDTO mDto = vec.get(i);
		%>
		<tr>
			<td width="350"><a href="memberDetail.jsp?id=<%=mDto.getId()%>"><%=mDto.getId()%></td>
			<td width="350"><%=mDto.getName()%></td>
			<td width="350"><%=mDto.getEmail()%></td>
			<td width="350"><%=mDto.getPhone()%></td>
			<td width="350"><%=mDto.getHobby()%></td>
			<td width="350"><%=mDto.getJob()%></td>
			<td width="350"><%=mDto.getAge()%></td>
			<td width="350"><%=mDto.getInfo()%></td>
			<td width="350"><%=mDto.getReg_date()%></td>
		</tr>
		<%
		}
		%>
		<tr align="center">
			<td colspan="9"><button type="button" onclick="location.href='memberJoinForm.jsp'">돌아가기</button></td>
		</tr>
	</table>
</body>
</html>