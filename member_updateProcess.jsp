<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file = "/DBConnection.jsp" %>
<%
	String id = request.getParameter("id");
	int age = Integer.parseInt(request.getParameter("age"));
	String email = request.getParameter("email");
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	
	try{
		String sql = "update membership set age =?,email = ? where id =?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, age);
		pstmt.setString(2, email);
		pstmt.setString(3, id);
		int result =pstmt.executeUpdate();
	
		// 회원수정이 성공했을때 
		if(result !=0){
				session.setAttribute("id", id);//session.setAttribute(필드명, 필드의 튜플값);
				// 서블릿 : java 컴파일러가 내부에서 임의로(자동) 생성해준다.
				
				
				out.println("<script>");
				out.println("alert('회원 정보 수정이 성공 했습니다.')");
				out.println("location.href = '../member_list.jsp'");//location.href = '페이지파일명.jsp'
				out.println("</script>");
			}
			else{
				out.println("<script>");
				out.println("alert('회원 정보 수정이 실패 했습니다.')");
				out.println("location.href = '../member_updateform.jsp'");
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
<title>회원 정보 수정 처리</title>
</head>
<body>

</body>
</html>