import React from 'react';

const Schedule_thursday = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'ทานข้าวเช้า 08:00-09:00 AM', completed: false },
        { id: 2, text: 'อาบน้ำ 09:30-10:00 AM', completed: true },
        { id: 3, text: 'อ่านหนังสือ 10:00-11:00 AM', completed: true },
        { id: 4, text: 'ทำอาหาร 11:00-12:00 AM', completed: true },
        { id: 5, text: 'ทานข้าวเที่ยง 12:00-13:00 AM', completed: true },
        { id: 6, text: 'ล้างจาน 14:00-15:00 AM', completed: true },
        { id: 7, text: 'เล่นเกม 15:00-17:00 AM', completed: true },
        { id: 8, text: 'ทำอาหาร 17:00-18:00 AM', completed: true },
        { id: 9, text: 'ทบทวนทบเรียน 18:00-19:00 AM', completed: false },
        { id: 10, text: 'ทานข้าวเย็น 19:00-20:00 AM', completed: true },
        { id: 11, text: 'อาบน้ำ 20:00-21:00 AM', completed: true },
        { id: 12, text: 'เล่นเกม 21:00-23:00 AM', completed: true },
        { id: 13, text: 'นอน 23:00-07:30 AM', completed: true },
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h4>วันพฤหัสบดี</h4>
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                 ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default Schedule_thursday;