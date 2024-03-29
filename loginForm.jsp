<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원관리 시스템 로그인 페이지</title>
</head>
<body>
	<form name = "loginform" action = "./Process/loginProcess.jsp" method = "post">
		<table border = "1" align="center">
			<tr>
				<td colspan = "3" align="center"><b><font size="5"></font>로그인 페이지</b></td>
			</tr>
			<tr>
				<td >아이디&nbsp;&nbsp;&nbsp;&nbsp;</td>
				<td><input type="text" name = "id"/></td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" name = "pass"/></td>
			</tr>
			<tr>
				<td colspan ="2" align ="center">
					<input type = "submit" value ="로그인">&nbsp;&nbsp;
					<input type = "reset" value ="새로고침">&nbsp;&nbsp;
					<input type = "button" value ="회원가입" onclick="location.href='joinForm.jsp'">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>