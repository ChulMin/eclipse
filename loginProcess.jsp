<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file = "DBConnection.jsp" %>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>loginProcess.jsp</title>
</head>
<body>
<%

	request.setCharacterEncoding("UTF-8");
	
	PreparedStatement pstmt =null;
	ResultSet rs = null;

	String id = request.getParameter("id");
	String pass = request.getParameter("pass");

	try{
	pstmt = conn.prepareStatement("select * from membership where id = ?");
	pstmt.setString(1, id);
	
	rs = pstmt.executeQuery();
	
	if(rs.next()){
		if(pass.equals("password")){
			session.setAttribute("id", id);
			
			out.println("<script>");
			out.println("location.href = 'loginmain.jsp'");
			out.println("</script>");
		}
		else{
			out.println("<script>");
			out.println("location.href = 'loginForm.jsp'");
			out.println("</script>");
		}
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
</body>
</html>