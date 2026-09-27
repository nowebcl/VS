import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00214E',
          color: '#ffffff',
          fontFamily: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '560px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '40px 30px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <img
              src="/image/logo.png"
              alt="VS International Group"
              style={{ height: '48px', marginBottom: '20px', objectFit: 'contain' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 style={{
              fontSize: '22px',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '1px',
              marginBottom: '12px',
              color: '#ffffff'
            }}>
              VS INTERNATIONAL GROUP LLC
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Se ha producido una actualización en el sistema. Por favor recarga la página para continuar.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReload}
                style={{
                  backgroundColor: '#00214E',
                  color: '#ffffff',
                  border: '1px solid #c5a059',
                  padding: '10px 24px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s'
                }}
              >
                ↻ Recargar Página
              </button>
            </div>
            {this.state.error && (
              <details style={{ marginTop: '24px', textAlign: 'left', fontSize: '12px', color: '#94a3b8' }}>
                <summary style={{ cursor: 'pointer', outline: 'none' }}>Detalles técnicos del error</summary>
                <pre style={{
                  marginTop: '10px',
                  padding: '12px',
                  background: '#041226',
                  borderRadius: '4px',
                  overflowX: 'auto',
                  whiteSpace: 'pre-wrap',
                  color: '#f87171'
                }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
