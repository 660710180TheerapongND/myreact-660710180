import React from 'react';
import Welcome from './Welcome';
import Profile from './Profile';
import Schedule_monday from './Schedule_monday';
import Schedule_tuesday from './Schedule_tuesday';
import Schedule_wednesday from './Schedule_wednesday';
import Schedule_thursday from './Schedule_thursday';
import Schedule_friday from './Schedule_friday';
import Schedule_saturday from './Schedule_saturday';
import Schedule_sunday from './Schedule_sunday';

function CombineComponents() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>           
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#588800ff'
            }}>
                <Welcome />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#d5e2bcff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    📖 Profile
                </h2>
                <Profile />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#d5e2bcff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    📝 รายการที่ต้องทำ
                </h2>
                <Schedule_monday />
                <Schedule_tuesday />
                <Schedule_wednesday />
                <Schedule_thursday />
                <Schedule_friday />
                <Schedule_saturday />
                <Schedule_sunday />
            </section>
        </div>
    );
}

export default CombineComponents;