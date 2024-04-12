package JDBCSample;

import java.beans.Statement;
import java.io.Closeable;
import java.io.Reader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

	class JdbcConnect {
	
	public JdbcConnect() {
		
		try { 
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("Driver Loading Success");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() { // 커넥션 해주는 역할, DB객체 
		String url = "jdbc:oracle:thin:@localhost:1521:xe"; 
		String userid = "kim";
	      String userpw = "1234";
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe",userid,userpw);
			System.out.println("Oracle Connection Success!!");
		} catch (SQLException e) {
			 System.out.println("DB를 연결하지 못했습니다");
		}
		return conn;
	}
	// 첫번째 방법
	public int insertData(String id, String name, int age) {
		// Query문을 준비
		
		String sql =  " INSERT INTO USERTEST(ID, NAME, AGE, JOINDATE) "
	               +  " VALUES('" + id + "','" + name + "'," + age + ", SYSDATE) ";
   
		
		System.out.println(sql);
		
		// DB Connection
		Connection conn = getConnection();
		Statement state = null;
		int count = 0;
		
		// DB Processing (처리)
		try {
			state = (Statement) conn.createStatement();
			count = ((java.sql.Statement) state).executeUpdate(sql);
			
			System.out.println("성공적으로 추가되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
			
		} finally {
			// DB close 필수!
			 // 접속이 된 것
			try {
				if(state != null) {
					((Closeable) state).close();
				}
				if(conn != null) {
					conn.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			
			}
		} 
		return count;
	}
//회원정보 조회 프로그램
public class member {

   private static Connection conn; //url, id, pw 체크하는 클래스
   private static PreparedStatement pstmt; // sql실행준비 클래스
   private static ResultSet rs; //화면에 결과를 출력해주는 클래스
   private static Reader reader;

   public static void main(String[] args) {
      //1.Driver Loading 준비
      String driver = "oracle.jdbc.OracleDriver";
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      //String url = "jdbc:oracle:thin:@localhost:1521:xe";
      //String url = "jdbc:oracle:thin:@192.168.5.24:1521:xe"; //내부 사설망
      //String url = "jdbc:oracle:thin:@210.134.67.51:1521:xe";// 공인IP망
      String userid = "kim";
      String userpw = "1234";
      
      //2.ID와 비번 체크: 예측하기 쉽지 않은 돌발상황
      try {
         Class.forName(driver);//드라이버 로딩
         System.out.println("드라이버를 성공적으로 로딩했습니다.");
      }catch(ClassNotFoundException e)   {
         //e.printStackTrace();
         System.out.println("드라이버를 로딩하는데 실패 하였습니다.");
      }
      
      try {
         conn = DriverManager.getConnection(url, userid, userpw); 
         System.out.println("아이디와 비밀번호를 성공적으로 체크했습니다.");
      } catch (SQLException e) {
//         e.printStackTrace();
         System.out.println("아이디와 비밀번호를 체크하는데 실패 했습니다.");
      }
      
      //3.조회 로직 작성
      String sql = "select * from member";
      
      try {
         pstmt = conn.prepareStatement(sql);         
         rs = pstmt.executeQuery();
         System.out.println("데이터 조회를 성공하였습니다.");
      } catch (SQLException e) {
         //e.printStackTrace();
         System.out.println("데이터 조회를 실패했습니다.");
      }
      
      //4.데이터 출력
      System.out.println("======= 회원정보 관리 시스템 개발 프로젝트 =======");
      System.out.println("ID" + "\t" + "NAME" + "\t" +"HEIGHT" + "\t" +"WEIGHT" + "\t" +"AGEID"); 
      System.out.println("--------------------------------------------");
      
      
        try {
        
        while (rs.next()) { String id = rs.getString("m_id"); String name =
        rs.getString("m_name"); float height = rs.getFloat("m_height"); float weight
        = rs.getFloat("m_weight"); int age = rs.getInt("m_age");
        
        System.out.println(id + "\t" + name + "\t" + height + "\t" + weight + "\t" +
        age);
        
        } System.out.println("===========================================");
        
        } catch (SQLException e) { e.printStackTrace(); }
      
      
   
      finally {  // conn, pstmt, rs
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
