<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Timestamp"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 처리 구현</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");

	String id = request.getParameter("id");
	String passwd1 = request.getParameter("passwd1");
	String passwd2 = request.getParameter("passwd2");
	String name = request.getParameter("name");
	String email = request.getParameter("email");
	String phone = request.getParameter("phone");
	String job = request.getParameter("job");
	String age = request.getParameter("age");
	String info = request.getParameter("info");
	%>
	<!-- ko.co.koreaIT패키지에 memberDTO클래스를 참조하여 mDto 객체를 생성합니다.  -->
	<jsp:useBean id="mDto" class="kr.co.koreaIT.memberDTO">
		<jsp:setProperty name="mDto" property="*" />
		<!-- setId(String id) -->
	</jsp:useBean>
	<%
	if (passwd1.equals(passwd2)) {
		String hobby[] = request.getParameterValues("hobby");
		String texthobby = "";//null

		for (int i = 0; i < hobby.length; i++) {
			texthobby += hobby[i] + " ";
		}
		mDto.setHobby(texthobby);

		Timestamp reg_date = new Timestamp(System.currentTimeMillis());
		mDto.setReg_date(reg_date);

		//데이터베이스에 접근하는 객체 생성 작업
		memberDAO mdao = new memberDAO();
		mdao.insertMember(mDto);
	%>
	<script type="text/javascript">
		alert("패스워드 확인 되었습니다!!")
	</script>
	<%
	//data list
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

	<h2>setter 메모리에 저장된 결과</h2>
	<table border="1" style="text-align: center;">
		<tr>
			<th width="150">아이디</th>
			<td width="350"><%=mDto.getId()%></td>
		</tr>
		<tr>
			<th width="150">이름</th>
			<td width="350"><%=mDto.getName()%></td>
		</tr>
		<tr>
			<th width="150">이메일</th>
			<td width="350"><%=mDto.getEmail()%></td>
		</tr>
		<tr>
			<th width="150">전화번호</th>
			<td width="350"><%=mDto.getPhone()%></td>
		</tr>
		<tr>
			<th width="150">취미</th>
			<td width="350"><%=mDto.getHobby()%></td>
		</tr>
		<tr>
			<th width="150">직업</th>
			<td width="350"><%=mDto.getJob()%></td>
		</tr>
		<tr>
			<th width="150">연령대</th>
			<td width="350"><%=mDto.getAge()%></td>
		</tr>
		<tr>
			<th width="150">기타사항</th>
			<td width="350"><%=mDto.getInfo()%></td>
		</tr>
		<tr>
			<th width="150">가입날짜</th>
			<td width="350"><%=mDto.getReg_date()%></td>
		</tr>
		<tr align="center">
			<td colspan="2"><button type="button"
					onclick="location.href='memberJoinForm.jsp'">돌아가기</button></td>
		</tr>
	</table>
	<script type="text/javascript">
		function returnJoinForm() {
			window.location.href = 'memberJoinForm.jsp';
		}
	</script>

</body>
</html>