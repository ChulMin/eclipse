<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file = "../DBConnection.jsp" %>    
    
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
	//PreparedStatement는 sql의 문법을 넣을 때 사용된다 데이터베이스에 저장된 값은 ?로 표시하여 불러온다.
	ResultSet rs = null;//ResultSet은 PreparedStatement를 객체로 얻어온 레코드값들을 테이블형태로 불러온다.

	String id = request.getParameter("id");
	String pass = request.getParameter("pass");

	try{//prepareStatement(); => 메서드안에 sql 문법을 입력하거나 sql문법이 있는 변수를 넣어서 사용한다.
	pstmt = conn.prepareStatement("select * from membership where id = ?");
	pstmt.setString(1, id);
	
	rs = pstmt.executeQuery();
	
	if(rs.next()){//rs.next() =>데이터가 존재하는지 알려주는 메서드
		if(pass.equals(rs.getString("password"))){
			session.setAttribute("id", id);//session.setAttribute(필드명, 필드의 튜플값);
			// 서블릿 : java 컴파일러가 내부에서 임의로(자동) 생성해준다.
			
			
			out.println("<script>");
			out.println("location.href = '../webapp/loginmain.jsp'");//location.href = '페이지파일명.jsp'
			out.println("</script>");
		}
		else{
			out.println("<script>");
			out.println("location.href = '../loginForm.jsp'");
			out.println("</script>");
		}
	}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
</body>
</html>