<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 화면</title>
</head>
<body>
	<form name = "joinform" action = "joinProcess.jsp" method = "post" align="center">
		<table border = "5" align="center">
			<tr>
				<td colspan = "2" align="center"><b><font size="5"></font>회원가입 페이지</b></td>
			</tr>
			<tr>
				<td align="left">아이디</td>
				<td><input type="text" name = "id"/></td>
			</tr>
			<tr>
				<td align="left">비밀번호</td>
				<td><input type="password" name = "pass"/></td>
			</tr>
			<tr>
				<td align="left">이름</td>
				<td><input type="text" name = "name"/></td>
			</tr>
			<tr>
				<td align="left">나이</td>
				<td><input type="text" name = "age"/></td>
			</tr>
			<tr>
				<td align="left">성별</td>
				<td>
					<input type="radio" name = "gender" value="남" checked="checked"/>남성
					<input type="radio" name = "gender" value="여" />여성
				</td>
			</tr>
			<tr>
				<td align="left">전자우편</td>
				<td><input type="text" name = "email"/></td>
			</tr>
			<tr>
				<td colspan ="2" align ="center">
					<button onclick= "javascript:joinForm.submit()">회원가입</button>&nbsp;&nbsp;&nbsp;&nbsp;
					<input type = "reset" value ="새로고침">&nbsp;&nbsp;
				</td>
			</tr>
		</table>
	</form>
</body>
</html>