package kr.co.koreaIT;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class memberDAO {// DB관련 비기능이 담긴 클래스

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

			while (rs.next()) {
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

				v.add(mdto);// vector 객체에 저장해서 반환합니다.
			}
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

		return v;
	}

	// id에 해당하는 정보를 반화해주는 메소드 호출.
	public memberDTO idSelectMember(String id) {

		memberDTO mdto = new memberDTO();

		try {
			getConnection();
			String sql = "select * from camping_member where id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);//
			rs = pstmt.executeQuery();

			if (rs.next()) {

				mdto.setId(rs.getString(1));// id
				mdto.setName(rs.getString(3));// name
				mdto.setEmail(rs.getString(4));// email
				mdto.setPhone(rs.getString(5));// phone
				mdto.setHobby(rs.getString(6));// hobby
				mdto.setJob(rs.getString(7));// job
				mdto.setAge(rs.getString(8));// age
				mdto.setInfo(rs.getString(9));// info
				mdto.setReg_date(rs.getTimestamp(10));// reg_date
			}
		} catch (Exception e) {
			System.out.println("id에 해당하는 정보를 가져오지 못했습니다.------------------------------확인해주세요");
			e.printStackTrace();
			System.out.println("id에 해당하는 정보를 가져오지 못했습니다.----------------------위의 내용을 확인해주세요");
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

		return mdto;
	}

	public String getPassword(String id) {
		String password = null;

		try {
			getConnection();
			// "select passwd1 from camping_member where id = ?"
			String sql = "select * from camping_member where id = ?";// 조회할 속성을 하나(passwd1)만 불러올 때 는 ->

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				// -> rs.getString(1) 불러오는 속성이 하나라면(위치(1))로 고정하여야한다.
				password = rs.getString(2);// 불러오는 속성의 순서(위치(2))에 맞게 지정하여야한다.
			}
		} catch (Exception e) {
			System.out.println("패스워드의 id에 해당하는 정보를 가져오지 못했습니다.------------------------------확인해주세요");
			e.printStackTrace();
			System.out.println("패스워드의 id에 해당하는 정보를 가져오지 못했습니다.----------------------위의 내용을 확인해주세요");
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

		return password;
	}

	public void memberupdate(memberDTO mDto) {
		try {
			getConnection();

			String sql = "update camping_member set email = ?, phone = ?, hobby = ?,"
					+ " job = ?, info = ?,reg_date = sysdate where id = ?";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, mDto.getEmail());// id
			pstmt.setString(2, mDto.getPhone());// id
			pstmt.setString(3, mDto.getHobby());// id
			pstmt.setString(4, mDto.getJob());// id
			pstmt.setString(5, mDto.getInfo());// id
			pstmt.setString(6, mDto.getId());// id

			pstmt.execute();

			System.out.println("업데이트에 성공하였습니다.");

		} catch (Exception e) {
			System.out.println("업데이트에 실패했습니다.------------------------------확인해주세요");
			e.printStackTrace();
			System.out.println("업데이트에 실패했습니다.---------------------위의 내용을 확인해주세요");
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

	public void memberDelete(String id) {
		try {
			getConnection();

			String sql = "delete from camping_member where id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			pstmt.execute();

			System.out.println("삭제에 성공하였습니다.");
			
			if(conn!= null) {
				conn.commit();
				conn.close();
			}
		} catch (Exception e) {
			System.out.println("삭제에 실패했습니다.------------------------------확인해주세요");
			e.printStackTrace();
			System.out.println("삭제에 실패했습니다.---------------------위의 내용을 확인해주세요");
		} finally {
			try {
				pstmt.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		}
	}
}