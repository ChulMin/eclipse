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
PreparedStatement pstmt = null;
ResultSet rs = null;

try {
	pstmt = conn.prepareStatement("select * from membership");
	rs = pstmt.executeQuery();
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
			<td colspan="4">회원 목록</td>
		</tr>
		<%
			while (rs.next()) {
		%>
			<tr align="center">
				<td> <%=rs.getString("id") %></td>
				<td><a href="member_updateForm.jsp?id=<%=rs.getString("id")%>">수정</a></td>
				<td>
					<%	
						if(rs.getString("id").equals("admin")){
					%>관리자<%
						}else{
						%> <a href="member_delete.jsp?id=<%=rs.getString("id")%>">삭제</a><% } %>
				</td>
				<td>
					<a href="member_info.jsp?id=<%=rs.getString("id")%>">회원정보보기</a>
				</td>
			</tr>
			<% } %>
	</table>


</body>
</html>