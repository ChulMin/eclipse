<%@page import="kr.co.koreaIT.memberDTO"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 삭제 화면</title>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");

	String id = request.getParameter("id");
	//데이터베이스에 접근하는 객체 생성 작업
	memberDAO mdao = new memberDAO();
	memberDTO mDto = mdao.idSelectMember(id);
	%>
	<h2 align="center">회원 정보 삭제 화면</h2>
	<div align="center">
		<form action="memberDeletePro.jsp" method="post">
			<table border="1" style="text-align: center; background: greenyellow">
				<tr>
					<th width="250" height="30px" style="background: #f5555f">아이디</th>
					<td width="350"><%=request.getParameter("id")%></td>
				</tr>
				<tr>
					<th width="150" height="30px">패스워드</th>
					<td width="350" style="background: yellowgreen"><input type="password" name="passwd" size="80"  style="background: green"></td>
				</tr>
				<tr>
					<td colspan="2"  align="center" style="background: skyblue">
					<input type="hidden" name="id" value="<%=mDto.getId()%>">
						<input type="submit" value="회원정보삭제">
						<button type="button" onclick="location.href='memberJoinForm.jsp'">처음으로
							돌아가기</button>
						<button type="button" onclick="location.href='memberList.jsp'">회원목록으로
							돌아가기</button>
					</td>
				</tr>
			</table>
		</form>
	</div>
</body>
</html>