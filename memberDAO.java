package kr.co.koreaIT;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class memberDAO {

	PreparedStatement pstmt = null;
	Connection conn = null;
	ResultSet rs = null;
	public Connection getConnection() {
		String Driver = "oracle.jdbc.OracleDriver";
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String uid = "kim";
		String pass = "1234";

		try {
			Class.forName(Driver);
			conn = DriverManager.getConnection(url, uid, pass);
			System.out.println("DB에 연결에 성공되었습니다.");

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DB에 연결에 실패하였습니다.");
		}
		return conn;
	}

	public void insertMember(memberDTO mDto) {
		try {
			getConnection();

			String sql = "insert into camping_member values(?,?,?,?,?,?,?,?,?,?)";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, mDto.getId());// id
			pstmt.setString(2, mDto.getPasswd1());// id
			pstmt.setString(3, mDto.getName());// id
			pstmt.setString(4, mDto.getEmail());// id
			pstmt.setString(5, mDto.getPhone());// id
			pstmt.setString(6, mDto.getHobby());// id
			pstmt.setString(7, mDto.getJob());// id
			pstmt.setString(8, mDto.getAge());// id
			pstmt.setString(9, mDto.getInfo());// id
			pstmt.setTimestamp(10, mDto.getReg_date());// id

			pstmt.execute();
			System.out.println("DB에 잘 저장되었습니다.");

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
			try {
				conn.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	//
	public Vector<memberDTO> Allselectmember() {
		Vector<memberDTO> v = new Vector<>();
		
		try {
			getConnection();
			
			String sql = "select * from camping_member";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				memberDTO mdto = new memberDTO();
				
				mdto.setId(rs.getString("id"));
				mdto.setName(rs.getString("name"));// id
				mdto.setEmail(rs.getString("email"));// id
				mdto.setPhone(rs.getString("phone"));// id
				mdto.setHobby(rs.getString("hobby"));// id
				mdto.setJob(rs.getString("job"));// id
				mdto.setAge(rs.getString("age"));// id
				mdto.setInfo(rs.getString("info"));// id
				mdto.setReg_date(rs.getTimestamp("reg_date"));// id
				
				v.add(mdto);//vector 객체에 저장해서 반환합니다.
			}			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		
		
		return v;
	}
	
	//
}