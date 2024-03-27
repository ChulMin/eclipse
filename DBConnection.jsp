<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="java.sql.*"%>
<%@ page import ="javax.sql.*" %>
<%@ page import ="javax.naming.*" %>
<%
	
	Connection conn = null;
	
try{
	Context init = new InitialContext();
	
	DataSource ds = (DataSource)init.lookup("java:comp/env/jdbc/OracleDB"); // init.lookup("java:comp/env/ 까지는 기본적으로 들어가야하는 부분이다.
	
	conn = ds.getConnection();
	
}catch(Exception e){
	e.printStackTrace();
	out.println("<h2>데이터 베이스 연결에 실패했습니다.");
}
 %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 데이터베이스 연동(DBCP)</title>
</head>
<body>

</body>
</html>