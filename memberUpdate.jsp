<%@page import="java.sql.Timestamp"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="kr.co.koreaIT.memberDTO"%>
<%@page import="kr.co.koreaIT.memberDAO"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 수정 화면</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");

	String id = request.getParameter("id");
	//데이터베이스에 접근하는 객체 생성 작업
	memberDAO mdao = new memberDAO();
	memberDTO mDto = mdao.idSelectMember(id);
	%>
	<h2 align="center">회원 정보 수정 화면</h2>
	<div align="center">
		<form action="memberUpdatePro.jsp" method="post">
			<table border="1" style="text-align: center; background: greenyellow">
				<tr style="background: #f5555f">
					<th width="250" height="30px">아이디</th>
					<td width="350"><%=mDto.getId()%></td>
				</tr>
				<tr style="background: #f5555f">
					<th width="250" height="30px">이름</th>
					<td width="350"><%=mDto.getName()%></td>
				</tr>
				<tr style="background: #f5555f">
					<th width="150" height="30px">이메일</th>
					<td width="350"><input name="email" type="email" size="80"
						value="<%=mDto.getEmail()%>"></td>
				</tr>
				<tr style="background: #f5555f">
					<th width="150" height="30px">전화번호</th>
					<td width="350"><input name="phone" type="tel" size="80"
						value="<%=mDto.getPhone()%>"></td>
				</tr>
				<tr style="background: #f5555f">
					<th width="150" height="30px">취미</th>
					<td width="350"><input name="hobby" type="text" size="80"
						value="<%=mDto.getHobby()%>"></td>
				</tr>
				<tr style="background: #f5555f">
					<th width="150" height="30px">직업</th>
					<td width="350"><input name="job" type="text" size="80"
						value="<%=mDto.getJob()%>"></td>
				</tr>
				<tr style="background: yellowgreen">
					<th width="150" height="30px">기타사항</th>
					<td width="350"><input name="info" type="text" size="80"
						value="<%=mDto.getInfo()%>"></td>
				</tr>
				<%
				Timestamp reg_date = new Timestamp(System.currentTimeMillis());
				mDto.setReg_date(reg_date);
				%>
				<tr style="background: yellowgreen">
					<th width="150" height="30px">수정일자</th>
					<td width="350"><%=mDto.getReg_date()%></td>
				</tr>
				<tr style="background: yellowgreen">
					<th width="150" height="30px">패스워드</th>
					<td width="350"><input type="password" name="passwd" size="80"></td>
				</tr>
				<tr align="center" style="background: yellowgreen">
					<td colspan="2"><input type="hidden" name="id"
						value="<%=mDto.getId()%>"> <input type="submit"
						value="회원정보수정">
						<button type="button" onclick="location.href='memberJoinForm.jsp'">처음으로
							돌아가기</button>
						<button type="button" onclick="location.href='memberList.jsp'">회원목록으로
							돌아가기</button>
						
					</td>
				</tr>
			</table>
		</form>
	</div>
</body>
</html>