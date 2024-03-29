<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file ="/DBConnection.jsp" %>
<%
	String delete_id = request.getParameter("id");

	PreparedStatement pstmt =null;
	ResultSet rs = null;
	
	try{
		String sql = "delete from membership where id = ?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, delete_id);
		
		int result = pstmt.executeUpdate();
		
		if(result !=0){
			out.println("<script>");
			out.println("alert('회원 정보 삭제가 성공했습니다.')");
			out.println("location.href = '../member_listform.jsp'");
			out.println("</script>");
		}else{
			out.println("<script>");
			out.println("alert('회원 정보 삭제가 실패 했습니다.')");
			out.println("location.href = '../member_listform.jsp'");
			out.println("</script>");
		}
	}catch(Exception e){
		e.printStackTrace();
	}
		
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>