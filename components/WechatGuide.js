import { useState, useEffect } from 'react'

export default function WechatGuide() {
  const [isWechat, setIsWechat] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    // 检测微信浏览器
    const ua = navigator.userAgent.toLowerCase()
    const isWechatBrowser = ua.includes('micromessenger')

    if (isWechatBrowser) {
      setIsWechat(true)
      setShowGuide(true)
    }
  }, [])

  if (!isWechat || !showGuide) return null

  return (
    <div className="wechat-guide-overlay">
      <div className="wechat-guide-modal">
        <div className="guide-header">
          <h3>为了更好的体验</h3>
          <button className="close-btn" onClick={() => setShowGuide(false)}>
            ✕
          </button>
        </div>

        <div className="guide-content">
          <div className="guide-icon">
            📱➡️🌐
          </div>
          <p>检测到您正在使用微信浏览器</p>
          <p>建议使用外部浏览器获得更佳体验</p>

          <div className="guide-steps">
            <div className="step">
              <span className="step-number">1</span>
              <span>点击右上角 "..." 按钮</span>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <span>选择"在浏览器中打开"</span>
            </div>
          </div>
        </div>

        <div className="guide-actions">
          <button className="continue-btn" onClick={() => setShowGuide(false)}>
            继续在微信中浏览
          </button>
        </div>
      </div>

      <style jsx>{`
        .wechat-guide-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .wechat-guide-modal {
          background: white;
          border-radius: 15px;
          max-width: 350px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .guide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 20px 0;
          color: #333;
        }

        .guide-header h3 {
          margin: 0;
          font-size: 1.3em;
          font-weight: bold;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5em;
          color: #999;
          cursor: pointer;
          padding: 5px;
          line-height: 1;
        }

        .close-btn:hover {
          color: #333;
        }

        .guide-content {
          padding: 20px;
          text-align: center;
          color: #333;
        }

        .guide-icon {
          font-size: 3em;
          margin-bottom: 15px;
        }

        .guide-content p {
          margin: 8px 0;
          font-size: 1em;
          line-height: 1.4;
        }

        .guide-steps {
          margin-top: 20px;
          text-align: left;
        }

        .step {
          display: flex;
          align-items: center;
          margin: 12px 0;
          font-size: 0.9em;
        }

        .step-number {
          background: #007bff;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8em;
          font-weight: bold;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .guide-actions {
          padding: 0 20px 20px;
        }

        .continue-btn {
          width: 100%;
          padding: 12px 20px;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          color: #6c757d;
          font-size: 0.9em;
          cursor: pointer;
          transition: all 0.2s;
        }

        .continue-btn:hover {
          background: #e9ecef;
          border-color: #adb5bd;
        }

        @media (max-width: 400px) {
          .wechat-guide-modal {
            margin: 0 10px;
          }

          .guide-header h3 {
            font-size: 1.2em;
          }

          .guide-content {
            padding: 15px;
          }

          .guide-icon {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  )
}