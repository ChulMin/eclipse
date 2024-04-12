package JDBCSample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class member_insert {
	private static Connection conn; // url,id,pw 체크하는 클래스
	private static PreparedStatement pstmt;// sql실해준비 클래스
	private static ResultSet rs;// 화면에 결과를 출력해주는 클래스
	private static int count;

//회원정보 조회 프로그램
	public static void main(String[] args) {
		// 1.Driver Loading 준비
		String driver = "oracle.jdbc.OracleDriver";
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
		// String url ="jdbc:oracle:thin:@localhost:1521:xe";
		// String url ="jdbc:oracle:thin:@192.168.5.24:1521:xe";//내부 사설망
		// String url ="jdbc:oracle:thin:@210.134.67.51:1521:xe";// 공인IP망
		String userid = "kim";
		String userpw = "1234";

		// 2.ID와 비번 체크: 예측하기 쉽지 않은 돌발상황

		try {
			conn = DriverManager.getConnection(url, userid, userpw);
			System.out.println("아이디와 비밀번호를 성공적으로 체크했습니다.");
		} catch (SQLException e) {
			// e.printStackTrace();
			System.out.println("아이디와 비밀번호를 체크하는데 실패 했습니다.");
		}
		// 3.조회 로직 작성
		Scanner sc = new Scanner(System.in);
		System.out.println("아이디를 입력해주세요: ");
		String id = sc.next();
		System.out.println("이름을 입력해주세요: ");
		String name = sc.next();
		System.out.println("키를 입력해주세요: ");
		float height = sc.nextFloat();
		System.out.println("체중을 입력해주세요: ");
		float weight = sc.nextFloat();
		System.out.println("나이를 입력해주세요: ");
		int age = sc.nextInt();
		// 1 2 3 4 5
		// id, name, height, weight, age
		String sql = "insert into member values( ?,    ?,      ?,      ?,   ?)";

		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);// id == 1(index)번
			pstmt.setString(2, name);
			pstmt.setFloat(3, height);
			pstmt.setFloat(4, weight);
			pstmt.setInt(5, age);

			pstmt.executeUpdate();
			count++;
			if (count == 1) {
				System.out.println(count + "건의 데이터 입력을 성공하였습니다.");
			}

		} catch (SQLException e) {
			System.out.println("데이터 입력을 실패하였습니다.");
			e.printStackTrace();
		}

		// 4.데이터 출력
		sql = "select * from member";
		try {
			pstmt = conn.prepareStatement(sql);

			rs = pstmt.executeQuery();
			System.out.println(count + "건의 데이터 조회를 성공하였습니다.");

		} catch (SQLException e) {
			System.out.println("데이터 조회를 실패하였습니다.");
			e.printStackTrace();
		}
		System.out.println("======= 회원정보 관리 시스템 개발 프로젝트 =======");
		System.out.println("ID" + "\t" + "NAME" + "\t" + "HEIGHT" + "\t" + "WEIGHT" + "\t" + "AGEID" + "\t");
		System.out.println("-----------------------------------------");
		try {// true
			while (rs.next()) {
				// String id = rs.getString("m_id");
				id = rs.getString(1);// m_id = 1(인덱스번호) => get(m_id) => get
				// String name = rs.getString("m_name");
				name = rs.getString(2);// m_id = 2(인덱스번호)
				height = rs.getFloat("m_height");
				weight = rs.getFloat("m_weight");
				age = rs.getInt("m_age");
				System.out.println(id + "\t" + name + "\t" + height + "\t" + weight + "\t" + age + "\t");
				System.out.println("---------------------------------------------");
			}
		} catch (SQLException e) {
			System.out.println("데이터 조회를 실패하였습니다.");
			e.printStackTrace();
		} finally {// conn, pastmt,rs
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}
			if (pstmt != null) {
				try {
					pstmt.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}
		}
	}

}
