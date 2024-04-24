<%@page import="kr.co.koreaIT.memberDTO"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 수정 처리</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");
	%>
	<!-- ko.co.koreaIT패키지에 memberDTO클래스를 참조하여 mDto 객체를 생성합니다.  -->
	<jsp:useBean id="mDto" class="kr.co.koreaIT.memberDTO">
		<jsp:setProperty name="mDto" property="*" />
		<!-- setId(String id) -->
	</jsp:useBean>
	<%
	String id = request.getParameter("id");
	String password = request.getParameter("passwd");
	//패스워드 체크 루틴.
	memberDAO mdao = new memberDAO();
	String pw = mdao.getPassword(id);

	if (pw.equals(password)) {
		mdao.memberupdate(mDto);//실행후
		//memberList.jsp로 페이지 변경
	%>
	<script type="text/javascript">
		alert("패스워드 확인 되었습니다!!")
	</script>
	<%
	response.sendRedirect("memberList.jsp");

	} else {
	%>
	<script type="text/javascript">
		alert("패스워드가 틀렸습니다. 확인해주십시오!!");
		history.back();//이전 페이지로 변경(전송)
		//history.go(-1);
	</script>
	<%
	}
	%>
</body>
</html>