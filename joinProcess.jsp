<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file = "/DBConnection.jsp" %>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>joinProcess.jsp</title>
</head>
<body>
<%

	request.setCharacterEncoding("UTF-8");
	
	PreparedStatement pstmt =null;
	//PreparedStatement는 sql의 문법을 넣을 때 사용된다 데이터베이스에 저장된 값은 ?로 표시하여 불러온다.
	ResultSet rs = null;

	String id = request.getParameter("id");
	String pass = request.getParameter("pass");
	String name = request.getParameter("name");
	int age = Integer.parseInt(request.getParameter("age"));
	String gender = request.getParameter("gender");
	String email = request.getParameter("email");
	

	try{
	pstmt = conn.prepareStatement("insert into membership values(?,?,?,?,?,?)");
	pstmt.setString(1, id);
	pstmt.setString(2, pass);
	pstmt.setString(3, name);
	pstmt.setInt(4, age);
	pstmt.setString(5, gender);
	pstmt.setString(6, email);
	int result = pstmt.executeUpdate();
	
	// 회원가입이 성공했을때 
	if(result !=0){
			session.setAttribute("id", id);//session.setAttribute(필드명, 필드의 튜플값);
			// 서블릿 : java 컴파일러가 내부에서 임의로(자동) 생성해준다.
			
			
			out.println("<script>");
			out.println("alert('회원가입에 성공 했습니다.')");
			out.println("location.href = '../loginForm.jsp'");//location.href = '페이지파일명.jsp'
			out.println("</script>");
		}
		else{
			out.println("<script>");
			out.println("alert('회원가입에 실패 했습니다.')");
			out.println("location.href = '../joinForm.jsp'");
			out.println("</script>");
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
</body>
</html>