package JDBCSample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class member_Select {
private static Connection conn; //url,id,pw 체크하는 클래스
private static PreparedStatement pstmt;// sql실해준비 클래스
private static ResultSet rs;// 화면에 결과를 출력해주는 클래스
private static int count;

//회원정보 조회 프로그램
	public static void main(String[] args) {
		// 1.Driver Loading 준비
		String driver = "oracle.jdbc.OracleDriver";
		String url ="jdbc:oracle:thin:@127.0.0.1:1521:xe";
		//String url ="jdbc:oracle:thin:@localhost:1521:xe";
		//String url ="jdbc:oracle:thin:@192.168.5.24:1521:xe";//내부 사설망
		//String url ="jdbc:oracle:thin:@210.134.67.51:1521:xe";// 공인IP망
		String userid = "kim";
		String userpw = "1234";
		
		//2.ID와 비번 체크: 예측하기 쉽지 않은 돌발상황
	
			try {//try 안 에서는 잘못될 확률이 있는 코드를 기재 
				conn = DriverManager.getConnection(url,userid,userpw);
				System.out.println("아이디와 비밀번호를 성공적으로 체크했습니다.");
			} catch (SQLException e) {
				//e.printStackTrace();
				System.out.println("아이디와 비밀번호를 체크하는데 실패 했습니다.");
			}
		//3.조회 로직 작성
		String sql = "select * from member";
		
		try {// prepareStatement: 보안상 => Secure coding
			pstmt = conn.prepareStatement(sql);
			
			/* select => executeQuery();
			 * update,delete,insert =? executeUpdate() 또는 execute()
			 * 
			 * 
			 */
			
			//rs = 1
			rs= pstmt.executeQuery();
			count++;
			if(count == 1) {
				System.out.println(count+"건의 데이터 조회를 성공하였습니다.");
			}
			
		} catch (SQLException e) {
			System.out.println("데이터 조회를 실패하였습니다.");
			e.printStackTrace();
		}
		//4.데이터 출력
		System.out.println("======= 회원정보 관리 시스템 개발 프로젝트 =======");
		System.out.println("ID"+ "\t"+"NAME"+ "\t"+"HEIGHT"+ "\t"+"WEIGHT"+ "\t"+"AGEID"+ "\t");
		System.out.println("-----------------------------------------");
		try {//		true
			while(rs.next()) {
				//String id = rs.getString("m_id");
				String id = rs.getString(1);//m_id = 1(인덱스번호) => get(m_id) => get
				//String name = rs.getString("m_name");
				String name = rs.getString(2);//m_id = 2(인덱스번호)
				float height = rs.getFloat("m_height");
				float weight = rs.getFloat("m_weight");
				int age = rs.getInt("m_age");
				System.out.println(id+ "\t"+name+ "\t"+height+ "\t"+weight+ "\t"+age+ "\t");
				System.out.println("---------------------------------------------");
			}
		} catch (SQLException e) {
			System.out.println("데이터 조회를 실패하였습니다.");
			e.printStackTrace();
		}finally {//conn, pastmt,rs
			if(rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
			if(pstmt != null) {
				try {
					pstmt.close();
				} catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
			if(conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
		}
	}

}
