<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");

String update_id = request.getParameter("id");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 수정페이지</title>
</head>
<body>
	<form name="updateform" action="./Process/member_updateProcess.jsp" method="post" align="center">
		<table border="3" bgcolor="skyblue" align="center">
			<tr>
				<td colspan="2" align="center"><b><font size="5">회원 정보 수정 페이지</font></b></td>
			</tr>
			<tr>
				<td align="center">아이디</td>
				<td><input type="text" name="id" value="<%=update_id %>" readonly /></td>
			</tr>
			<tr>
				<td align="center">나이</td>	
				<td><input type="text" name="age" /></td>
			</tr>
			<tr>
				<td align="center">이메일</td>
				<td><input type="text" name="email" /></td>
			</tr>
			<tr>
				<td colspan ="2" align ="center">
					<input type = "submit" value = "정보수정">&nbsp;&nbsp;&nbsp;
					<input type = "reset" value ="새로고침">&nbsp;&nbsp;
				</td>
			</tr>
		</table>
	</form>
</body>
</html>