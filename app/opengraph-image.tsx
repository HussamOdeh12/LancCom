import { ImageResponse } from 'next/og';

export const alt = 'LAND.COM Information Technology Solutions Provider - Abu Dhabi';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#020617',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '2px solid rgba(6, 182, 212, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4',
              fontSize: '32px',
              fontWeight: 900,
            }}
          >
            L
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
              LAND.COM
            </span>
            <span style={{ fontSize: '16px', color: '#06b6d4', fontWeight: 600 }}>
              Information Technology Solutions Provider
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <div style={{ fontSize: '48px', fontWeight: 900, color: '#ffffff', lineHeight: 1.2 }}>
            IT Solutions & Strategic Systems Integration in Abu Dhabi
          </div>
          <div style={{ fontSize: '22px', color: '#94a3b8', lineHeight: 1.4 }}>
            Developing and implementing complex business solutions across the UAE since 2007.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            borderTop: '1px solid #1e293b',
            width: '100%',
            paddingTop: '24px',
            fontSize: '16px',
            color: '#64748b',
          }}
        >
          <span>Abu Dhabi Island, Muroor Road</span>
          <span>•</span>
          <span>100% UAE Owned & Nationally Managed</span>
          <span>•</span>
          <span style={{ color: '#38bdf8' }}>landcom.ae</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
