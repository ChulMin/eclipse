<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="DBConnection.jsp"%>
<%
	request.setCharacterEncoding("UTF-8");
	String id = null;
	
	if ((session.getAttribute("id") == null) || (!((String) session.getAttribute("id")).equals("admin"))) {
		out.println("<script>");
		out.println("location.href = 'loginForm.jsp'");
		out.println("</script>");
	}
	
	String info_id = request.getParameter("id");
	
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	
	try {
		pstmt = conn.prepareStatement("select * from membership where id = ?");
		pstmt.setString(1, info_id);
		rs = pstmt.executeQuery();
		
		rs.next();
		
	} catch (Exception e) {
		e.printStackTrace();
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 목록 화면</title>
</head>
<body>
	<table border="1" width ="400" align="center">
		<tr align="center">
			<td colspan="6" align="center"><b><font size="5"></font>회원정보</b></td>
		</tr>
			
			
			
			
		<tr>
			<td align="center">아이디</td>
			<td><%=rs.getString("id")%></td>
		</tr>
		<tr>
			<td align="center">비밀번호</td>
			<td><%=rs.getString("password")%></td>
		</tr>
		<tr>
			<td align="center">이름</td>
			<td><%=rs.getString("name")%></td>
		</tr>
		<tr>
			<td align="center">나이</td>
			<td><%=rs.getString("age")%></td>
		</tr>
		<tr>
			<td align="center">성별</td>
			<td><%=rs.getString("gender")%></td>
		</tr>
		<tr>
			<td align="center">이메일</td>
			<td><%=rs.getString("email")%></td>
		</tr>
	</table>
	<p align ="center">
		<button onclick = "location.href='member_list.jsp'">회원목록보기</button>
		<button onclick="location.href = 'loginForm.jsp'">되돌아가기</button>
		<button onclick="location.href = 'member_logout.jsp'">로그아웃</button>
	</p>
</body>
</html>