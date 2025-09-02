const Me = () => (
    <img 
        src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-1/354430442_114606994994214_4339581319733511762_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=zayctBiAP5QQ7kNvwF7YKTL&_nc_oc=AdmKXMe5ujSMBhhAYHOuS8l7Ds3RSzXAe3ItgVHpPZkjsfvyEe9Kl9qb80fdoy7lBp2JvXy6U4mjzTb5rypDf3o7&_nc_zt=24&_nc_ht=scontent.fkdt3-1.fna&_nc_gid=aJFBoqsI9JeCkHo-1iVHUA&oh=00_AfU4LHSIuc7eVSfQ10pqlkyQEqa-Vno05hCyO_0cW4P3IQ&oe=68BB316A" 
        alt="User"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #047a00ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#3e4900ff', margin: '10px 0' }}>
        ชื่อ: ธีรพงศ์ พูนขวัญ
    </h3>
);

const UserBio = () => (
    <div>
        <p>อาชีพ: นักศึกษา</p>
        <p>รหัสนักศึกษา: 660710180</p>
        <p>ชั้นปี: ปี 3 </p>
        <p>สาขา: เทคโนโลยีสารสนเทศ</p>
        <p>คณะ: วิทยาศาสตร์</p>
        <p>สถานศึกษา: มหาวิทยาลัยศิลปากร</p>
        <p>Email: poonkwan_t@silpakorn.edu</p>
        <p>เบอร์โทร: 09x-xxx-xxxx</p>
    </div>   
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Me />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;