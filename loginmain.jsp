<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원관리 시스템 로그인 접속 페이지</title>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
	String	id = null;
	if(session.getAttribute("id") != null){
		id = (String)session.getAttribute("id");
	}else{
		out.println("<script>");
		out.println("location.href = 'loginForm.jsp'");
		out.println("</script>");
	}
%>
	<h2><%=id %>로 로그인 하셨습니다. 반가워요~~~~</h2>
<%
	if(id.equals("admin")){
%>
	<button onclick = "location.href='member_list.jsp'">회원목록보기</button>
<%
	}
%>
<button onclick="location.href = 'loginForm.jsp'">되돌아가기</button>
</body>
</html>