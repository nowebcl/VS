import os
import base64
import subprocess

def get_base64_image(file_path):
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found")
        return ""
    ext = os.path.splitext(file_path)[1].lower().replace('.', '')
    mime = 'jpeg' if ext in ['jpg', 'jpeg'] else 'png'
    with open(file_path, 'rb') as f:
        data = base64.b64encode(f.read()).decode('utf-8')
    return f"data:image/{mime};base64,{data}"

# Ensure logos exist
logo_white_path = 'temp_pdf_assets/logo_white.png'
logo_navy_path = 'temp_pdf_assets/logo_navy.png'

from PIL import Image

def clean_bg_logo(src_path, dst_path):
    im = Image.open(src_path).convert('RGB')
    patch = im.crop((800, 30, 800 + (720 - 60), 320))
    im.paste(patch, (60, 30))
    im.save(dst_path, quality=95)

clean_bg_logo('temp_pdf_assets/xref_4.jpeg', 'temp_pdf_assets/xref_4_clean.jpeg')
clean_bg_logo('temp_pdf_assets/xref_65.jpeg', 'temp_pdf_assets/xref_65_clean.jpeg')

# Base64 encodings
cover_bg = get_base64_image('temp_pdf_assets/xref_4_clean.jpeg')
logo_white = get_base64_image(logo_white_path)
logo_navy = get_base64_image(logo_navy_path)
banner_tankers = get_base64_image('temp_pdf_assets/xref_37.jpeg')
banner_ship = get_base64_image('temp_pdf_assets/xref_53.jpeg')
divider_bg = get_base64_image('temp_pdf_assets/xref_65_clean.jpeg')

exhibit_a = get_base64_image('temp_pdf_assets/xref_68.png')
exhibit_b = get_base64_image('temp_pdf_assets/xref_71.png')
exhibit_c1 = get_base64_image('temp_pdf_assets/xref_74.png')
exhibit_c2 = get_base64_image('temp_pdf_assets/xref_77.png')
exhibit_d1 = get_base64_image('temp_pdf_assets/xref_80.png')
exhibit_d2 = get_base64_image('temp_pdf_assets/xref_83.png')

# Team portraits
betania_img = get_base64_image('public/image/team/betania_biagini.jpg')
fredd_img = get_base64_image('public/image/team/fredd_ortega.jpg')
michele_img = get_base64_image('public/image/team/michele_carvalho.jpg')
eva_img = get_base64_image('public/image/team/eva_garcia.jpg')
jorge_img = get_base64_image('public/image/team/jorge_eger.jpg')

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>VS International Group LLC - Client Information Sheet (CIS - KYC)</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Droid+Serif:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@400;600;700;800&display=swap');

@page {{
  size: letter;
  margin: 0;
}}

* {{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}}

body {{
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1E293B;
  background: #FFFFFF;
  margin: 0;
  padding: 0;
}}

.pdf-page {{
  width: 8.5in;
  height: 11in;
  position: relative;
  page-break-after: always;
  background: #FFFFFF;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}}

.pdf-page:last-child {{
  page-break-after: avoid;
}}

/* Header & Footer Rules */
.page-header {{
  height: 64px;
  padding: 14px 44px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E6E6DF;
  background: #FFFFFF;
  flex-shrink: 0;
}}

.header-logo-wrap {{
  display: flex;
  align-items: center;
}}

.header-logo-wrap img {{
  height: 38px;
  width: auto;
  display: block;
}}

.header-title-text {{
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #00214E;
}}

.page-footer {{
  height: 42px;
  padding: 8px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #E6E6DF;
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #828D99;
  background: #FFFFFF;
  margin-top: auto;
  flex-shrink: 0;
}}

.page-body {{
  padding: 22px 44px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}}

/* Underline Headers matching website h2.underline */
.sec-title-wrap {{
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}}

.sec-num-box {{
  width: 32px;
  height: 32px;
  background: #00214E;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}}

.sec-title-content {{
  display: flex;
  flex-direction: column;
}}

.sec-title {{
  font-family: 'Droid Serif', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: #00214E;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 3px;
}}

.sec-title-bar {{
  width: 45px;
  height: 2.5px;
  background: #00214E;
  margin-top: 2px;
}}

.sec-subtitle {{
  font-family: 'Droid Serif', Georgia, serif;
  font-style: italic;
  font-size: 11.5px;
  color: #64748B;
  margin-top: 2px;
}}

/* Notice Box */
.notice-box {{
  background: #F7F7F2;
  border: 1px solid #E6E6DF;
  border-left: 4px solid #00214E;
  border-radius: 2px;
  padding: 12px 18px;
  margin-bottom: 18px;
}}

.notice-title {{
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #00214E;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}}

.notice-text {{
  font-size: 10px;
  line-height: 1.5;
  color: #475569;
  text-align: justify;
}}

/* Data Table / Rows */
.data-table {{
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #E6E6DF;
  border-radius: 2px;
  overflow: hidden;
  background: #FFFFFF;
}}

.data-table tr {{
  border-bottom: 1px solid #E6E6DF;
}}

.data-table tr:last-child {{
  border-bottom: none;
}}

.data-table tr:nth-child(even) {{
  background: #FBFBFA;
}}

.data-label {{
  width: 32%;
  padding: 9.5px 16px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #64748B;
  border-right: 1px solid #E6E6DF;
  background: #F7F7F2;
}}

.data-value {{
  padding: 9.5px 18px;
  font-size: 11px;
  color: #1E293B;
  font-weight: 600;
}}

.data-value-highlight {{
  font-weight: 700;
  color: #00214E;
  font-size: 12.5px;
}}

.tag-badge {{
  display: inline-block;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 2px 7px;
  background: #00214E;
  color: #FFFFFF;
  border-radius: 2px;
  margin-left: 8px;
  vertical-align: middle;
}}

/* Banner Frame */
.banner-frame {{
  width: 100%;
  height: 115px;
  border: 1px solid #E6E6DF;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 18px;
  position: relative;
}}

.banner-frame img {{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}}

/* Representatives Grid */
.rep-grid {{
  display: flex;
  flex-direction: column;
  gap: 10px;
}}

.rep-card {{
  border: 1px solid #E6E6DF;
  border-left: 3px solid #00214E;
  background: #FFFFFF;
  border-radius: 2px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}}

.rep-left {{
  display: flex;
  align-items: center;
  gap: 14px;
}}

.rep-avatar {{
  width: 44px;
  height: 52px;
  border-radius: 2px;
  object-fit: cover;
  border: 1px solid #E6E6DF;
  background: #F7F7F2;
}}

.rep-role {{
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #828D99;
  margin-bottom: 3px;
}}

.rep-name {{
  font-size: 13px;
  font-weight: 800;
  color: #00214E;
  letter-spacing: 0.4px;
}}

.rep-contacts {{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 10.5px;
}}

.rep-contact-item {{
  display: flex;
  align-items: center;
  gap: 6px;
  color: #334155;
  font-weight: 600;
}}

.rep-contact-label {{
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  color: #94A3B8;
  letter-spacing: 0.8px;
}}

/* Bank Coordinates Cards */
.bank-cards-list {{
  display: flex;
  flex-direction: column;
  gap: 12px;
}}

.bank-card {{
  border: 1px solid #E6E6DF;
  border-radius: 2px;
  overflow: hidden;
  background: #FFFFFF;
}}

.bank-card-header {{
  background: #00214E;
  color: #FFFFFF;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}}

.bank-name {{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
}}

.bank-badge {{
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  color: #CBD5E1;
}}

.bank-grid-2col {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 16px;
  gap: 8px 24px;
  background: #FFFFFF;
}}

.bank-field {{
  display: flex;
  flex-direction: column;
  gap: 2px;
}}

.bf-label {{
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #828D99;
}}

.bf-val {{
  font-size: 10.5px;
  font-weight: 600;
  color: #1E293B;
}}

.bf-val-mono {{
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #00214E;
  letter-spacing: 0.8px;
}}

/* Exhibit Pages */
.exhibit-title-bar {{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
  border-bottom: 1px solid #E6E6DF;
  padding-bottom: 6px;
}}

.exhibit-tag-box {{
  display: flex;
  flex-direction: column;
}}

.exhibit-tag {{
  font-family: 'Droid Serif', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: #00214E;
  text-transform: uppercase;
  letter-spacing: 1px;
}}

.exhibit-bar {{
  width: 40px;
  height: 2.5px;
  background: #00214E;
  margin-top: 2px;
}}

.exhibit-meta {{
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #64748B;
}}

.exhibit-frame {{
  flex-grow: 1;
  border: 1px solid #E6E6DF;
  background: #FAFAF8;
  border-radius: 2px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.02);
}}

.exhibit-frame img {{
  max-width: 100%;
  max-height: 8.1in;
  object-fit: contain;
  display: block;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
}}

.exhibit-caption {{
  margin-top: 10px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #64748B;
  text-align: center;
}}

/* Cover & Divider Pages (Full Bleed) */
.fullbleed-page {{
  position: relative;
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}}

.fullbleed-overlay {{
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 26, 61, 0.88) 0%, rgba(0, 33, 78, 0.92) 50%, rgba(0, 26, 61, 0.96) 100%);
  z-index: 1;
}}

.fullbleed-content {{
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}}

.cover-top-row {{
  display: flex;
  align-items: center;
  justify-content: space-between;
}}

.cover-badge-pill {{
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 33, 78, 0.4);
  color: #FFFFFF;
  border-radius: 2px;
}}

.cover-center-box {{
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: 1px solid rgba(255, 255, 255, 0.2);
  outline-offset: 8px;
  padding: 48px 40px;
  text-align: center;
  background: rgba(0, 26, 61, 0.55);
  backdrop-filter: blur(4px);
  margin: auto 0;
}}

.cover-eyebrow {{
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #94A3B8;
  margin-bottom: 14px;
}}

.cover-main-title {{
  font-family: 'Droid Serif', Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  margin-bottom: 12px;
  text-transform: uppercase;
  line-height: 1.2;
}}

.cover-rule {{
  width: 70px;
  height: 2px;
  background: #FFFFFF;
  margin: 16px auto;
}}

.cover-company {{
  font-family: 'Droid Serif', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  color: #E2E8F0;
  letter-spacing: 0.8px;
}}

.cover-bottom-bar {{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 14px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #94A3B8;
}}
</style>
</head>
<body>

<!-- PAGE 1: COVER -->
<div class="pdf-page fullbleed-page" style="background-image: url('{cover_bg}');">
  <div class="fullbleed-overlay"></div>
  <div class="fullbleed-content">
    <div class="cover-top-row">
      <img src="{logo_white}" alt="Logo" style="height: 64px;" />
      <div style="display: flex; gap: 8px;">
        <span class="cover-badge-pill">CONFIDENTIAL</span>
        <span class="cover-badge-pill">CIS • KYC</span>
      </div>
    </div>

    <div class="cover-center-box">
      <div class="cover-eyebrow">DUE DILIGENCE & COMPLIANCE DOSSIER</div>
      <h1 class="cover-main-title">CLIENT INFORMATION SHEET</h1>
      <div class="cover-rule"></div>
      <div class="cover-company">VS International Group LLC</div>
      <div style="font-size: 11px; color: #CBD5E1; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 10px;">
        Global Commodities Trading & Structured Trade Finance
      </div>
    </div>

    <div class="cover-bottom-bar">
      <span>MIAMI, FLORIDA • UNITED STATES</span>
      <span>REG. L23000318932</span>
      <span>CORPORATE PROFILE 2026</span>
    </div>
  </div>
</div>

<!-- PAGE 2: SECTION 01 - COMPANY INFORMATION -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">CLIENT INFORMATION SHEET • CIS-KYC</div>
  </div>

  <div class="page-body">
    <div class="notice-box">
      <div class="notice-title">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#00214E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        REGULATORY NOTICE • DUE DILIGENCE MANDATE
      </div>
      <div class="notice-text">
        In accordance with Articles 2 and 5 of the Due Diligence and Federal Banking Commission Circular of December 1999 concerning the prevention of money laundering, and Article 305 of the Swiss Criminal Code, the following information may be supplied to banks and financial institutions for verification of identity and corporate activities.
      </div>
    </div>

    <div class="sec-title-wrap">
      <div class="sec-num-box">01</div>
      <div class="sec-title-content">
        <div class="sec-title">COMPANY INFORMATION</div>
        <div class="sec-title-bar"></div>
      </div>
    </div>

    <table class="data-table">
      <tr>
        <td class="data-label">Company Name</td>
        <td class="data-value data-value-highlight">VS International Group LLC</td>
      </tr>
      <tr>
        <td class="data-label">Represented By</td>
        <td class="data-value">
          <strong>Gladys Raquel Cantero López</strong>
          <span class="tag-badge">Chief Executive Officer</span>
        </td>
      </tr>
      <tr>
        <td class="data-label">Telephone</td>
        <td class="data-value">+1 786 2183042</td>
      </tr>
      <tr>
        <td class="data-label">E-Mail</td>
        <td class="data-value" style="color: #00214E; font-weight: 700;">operations@vsinternationalllc.com</td>
      </tr>
      <tr>
        <td class="data-label">Represented By</td>
        <td class="data-value">
          <strong>Carlos Ibarra</strong>
          <span class="tag-badge" style="background: #2C343D;">Commercial Director</span>
        </td>
      </tr>
      <tr>
        <td class="data-label">Telephone</td>
        <td class="data-value">+1 305 7963794</td>
      </tr>
      <tr>
        <td class="data-label">E-Mail</td>
        <td class="data-value" style="color: #00214E; font-weight: 700;">salesc@vsinternationalllc.com</td>
      </tr>
      <tr>
        <td class="data-label">Jurisdiction of Incorporation</td>
        <td class="data-value">Florida, United States of America</td>
      </tr>
      <tr>
        <td class="data-label">Corporate Mailing Address</td>
        <td class="data-value">488 NE 18th Street, Miami, FL 33132, USA</td>
      </tr>
      <tr>
        <td class="data-label">Registration Number</td>
        <td class="data-value" style="font-family: monospace; font-weight: 700; color: #00214E; font-size: 11.5px;">L23000318932</td>
      </tr>
      <tr>
        <td class="data-label">EIN (IRS CP 575 B)</td>
        <td class="data-value" style="font-family: monospace; font-weight: 700; color: #00214E; font-size: 11.5px;">93-2268146</td>
      </tr>
      <tr>
        <td class="data-label">CEO Passport Number</td>
        <td class="data-value" style="font-family: monospace; font-weight: 700;">PAK348210</td>
      </tr>
      <tr>
        <td class="data-label">Expiration Date</td>
        <td class="data-value">08 NOV / NOV 29</td>
      </tr>
      <tr>
        <td class="data-label">Issuing Authority</td>
        <td class="data-value">Kingdom of Spain (Spanish Citizen)</td>
      </tr>
    </table>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>02</span>
  </div>
</div>

<!-- PAGE 3: SECTION 02 - COMMERCIAL REPRESENTATIVES -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">CLIENT INFORMATION SHEET • CIS-KYC</div>
  </div>

  <div class="page-body">
    <div class="banner-frame">
      <img src="{banner_tankers}" alt="Maritime Storage Terminal" />
    </div>

    <div class="sec-title-wrap">
      <div class="sec-num-box">02</div>
      <div class="sec-title-content">
        <div class="sec-title">COMMERCIAL REPRESENTATIVES</div>
        <div class="sec-title-bar"></div>
        <div class="sec-subtitle">Designated points of contact & operational desk leads</div>
      </div>
    </div>

    <div class="rep-grid">
      <!-- Rep 1 -->
      <div class="rep-card">
        <div class="rep-left">
          <img src="{betania_img}" class="rep-avatar" alt="Betania Biagini" />
          <div>
            <div class="rep-role">GLOBAL TRADING MANAGER</div>
            <div class="rep-name">BETANIA BIAGINI</div>
          </div>
        </div>
        <div class="rep-contacts">
          <div class="rep-contact-item">
            <span class="rep-contact-label">EMAIL:</span>
            <span>biagini@vsinternationalllc.com</span>
          </div>
          <div class="rep-contact-item">
            <span class="rep-contact-label">TEL:</span>
            <span>+974-31630623 / +86-15622769963</span>
          </div>
        </div>
      </div>

      <!-- Rep 2 -->
      <div class="rep-card">
        <div class="rep-left">
          <img src="{fredd_img}" class="rep-avatar" alt="Fredd Ortega" />
          <div>
            <div class="rep-role">PRODUCT ACQUISITION</div>
            <div class="rep-name">FREDD ORTEGA</div>
          </div>
        </div>
        <div class="rep-contacts">
          <div class="rep-contact-item">
            <span class="rep-contact-label">EMAIL:</span>
            <span>fortega@vsinternationalllc.com</span>
          </div>
          <div class="rep-contact-item">
            <span class="rep-contact-label">TEL:</span>
            <span>+593 96 270 5024</span>
          </div>
        </div>
      </div>

      <!-- Rep 3 -->
      <div class="rep-card">
        <div class="rep-left">
          <img src="{michele_img}" class="rep-avatar" alt="Michele Carvalho" />
          <div>
            <div class="rep-role">DIRECTOR OF OPERATIONS & BUSINESS DEVELOPMENT</div>
            <div class="rep-name">MICHELE CARVALHO</div>
          </div>
        </div>
        <div class="rep-contacts">
          <div class="rep-contact-item">
            <span class="rep-contact-label">EMAIL:</span>
            <span>michele@vsinternationalllc.com</span>
          </div>
          <div class="rep-contact-item">
            <span class="rep-contact-label">TEL:</span>
            <span>+1 407 233 7279</span>
          </div>
        </div>
      </div>

      <!-- Rep 4 -->
      <div class="rep-card">
        <div class="rep-left">
          <img src="{eva_img}" class="rep-avatar" alt="Eva Garcia" />
          <div>
            <div class="rep-role">BUSINESS DEVELOPMENT EXECUTIVE</div>
            <div class="rep-name">EVA GARCIA</div>
          </div>
        </div>
        <div class="rep-contacts">
          <div class="rep-contact-item">
            <span class="rep-contact-label">EMAIL:</span>
            <span>egarcia@vsinternationalllc.com</span>
          </div>
          <div class="rep-contact-item">
            <span class="rep-contact-label">TEL:</span>
            <span>+44 7490 241444</span>
          </div>
        </div>
      </div>

      <!-- Rep 5 -->
      <div class="rep-card">
        <div class="rep-left">
          <img src="{jorge_img}" class="rep-avatar" alt="Jorge Eger" />
          <div>
            <div class="rep-role">BUSINESS DEVELOPMENT EXECUTIVE - RARE EARTHS & MINING</div>
            <div class="rep-name">JORGE EGER</div>
          </div>
        </div>
        <div class="rep-contacts">
          <div class="rep-contact-item">
            <span class="rep-contact-label">EMAIL:</span>
            <span>eger@vsinternationalllc.com</span>
          </div>
          <div class="rep-contact-item">
            <span class="rep-contact-label">TEL:</span>
            <span>+1 954 608 3672</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>03</span>
  </div>
</div>

<!-- PAGE 4: SECTION 03 - BANKING COORDINATES -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">CLIENT INFORMATION SHEET • CIS-KYC</div>
  </div>

  <div class="page-body">
    <div class="sec-title-wrap" style="margin-bottom: 14px;">
      <div class="sec-num-box">03</div>
      <div class="sec-title-content">
        <div class="sec-title">BANKING COORDINATES</div>
        <div class="sec-title-bar"></div>
        <div class="sec-subtitle">Institutional corporate accounts & authorized banking facilities</div>
      </div>
    </div>

    <div class="bank-cards-list">
      <!-- Bank 1: BofA -->
      <div class="bank-card">
        <div class="bank-card-header">
          <span class="bank-name">BANK OF AMERICA</span>
          <span class="bank-badge">CORPORATE ACCOUNT</span>
        </div>
        <div class="bank-grid-2col">
          <div class="bank-field">
            <span class="bf-label">Bank Address:</span>
            <span class="bf-val">701 Brickell Ave, Miami, Florida, FL 33131</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">SWIFT Code:</span>
            <span class="bf-val-mono">BOFAUS6S</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Account Name:</span>
            <span class="bf-val" style="font-weight: 700; color: #00214E;">VS International Group LLC</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Telephone:</span>
            <span class="bf-val">+1 786 628 8867</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Account Number:</span>
            <span class="bf-val-mono">8981 6621 4175</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Bank Officer:</span>
            <span class="bf-val">Jorge Solano (Jorge.i.solano@bofa.com)</span>
          </div>
          <div class="bank-field" style="grid-column: span 2;">
            <span class="bf-label">Authorized Signatory:</span>
            <span class="bf-val">Gladys Raquel Cantero López (CEO & President)</span>
          </div>
        </div>
      </div>

      <!-- Bank 2: Chase Law Firm -->
      <div class="bank-card">
        <div class="bank-card-header">
          <span class="bank-name">JP MORGAN CHASE BANK N.A.</span>
          <span class="bank-badge">AMERICAN LAW FIRM</span>
        </div>
        <div class="bank-grid-2col">
          <div class="bank-field">
            <span class="bf-label">Bank Address:</span>
            <span class="bf-val">270 Park Ave, New York, NY 10017</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">SWIFT Code:</span>
            <span class="bf-val-mono">CHASUS33</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Account Name:</span>
            <span class="bf-val" style="font-weight: 700;">ROBERT VALLES JR IOLTA</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Routing Number:</span>
            <span class="bf-val-mono">021000021</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Account Number:</span>
            <span class="bf-val-mono">5610 7022 44</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Banker Contact:</span>
            <span class="bf-val">Anthony Hall (+1 713 869 1562 | anthony.a.hall@chase.com)</span>
          </div>
        </div>
      </div>

      <!-- Bank 3: Banco Santander -->
      <div class="bank-card">
        <div class="bank-card-header">
          <span class="bank-name">BANCO SANTANDER</span>
          <span class="bank-badge">EUROPEAN LAW FIRM</span>
        </div>
        <div class="bank-grid-2col">
          <div class="bank-field">
            <span class="bf-label">Bank Address:</span>
            <span class="bf-val">C. de Serrano, 57 – 28001, Madrid, Spain</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">SWIFT Code:</span>
            <span class="bf-val-mono">SCHESMMXXX</span>
          </div>
          <div class="bank-field" style="grid-column: span 2;">
            <span class="bf-label">Account Name:</span>
            <span class="bf-val" style="font-weight: 700;">MEANA GREEN MAURA Y ASOCIADOS, SLP</span>
          </div>
          <div class="bank-field" style="grid-column: span 2;">
            <span class="bf-label">IBAN Account Number:</span>
            <span class="bf-val-mono">ES96 0049 0151 5928 1095 5865</span>
          </div>
        </div>
      </div>

      <!-- Bank 4: Barclays Bank -->
      <div class="bank-card">
        <div class="bank-card-header">
          <span class="bank-name">BARCLAYS BANK</span>
          <span class="bank-badge">ISLE OF MAN</span>
        </div>
        <div class="bank-grid-2col">
          <div class="bank-field">
            <span class="bf-label">Bank Address:</span>
            <span class="bf-val">Barclays House, Victoria Street, Douglas, Isle of Man, IM99 1AJ</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">SWIFT Code:</span>
            <span class="bf-val-mono">BARCGB22</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">IBAN:</span>
            <span class="bf-val-mono">GB35 BARC 2026 8870 7498 26</span>
          </div>
          <div class="bank-field">
            <span class="bf-label">Sort Code:</span>
            <span class="bf-val-mono">20-26-88</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>04</span>
  </div>
</div>

<!-- PAGE 5: SECTION 03 (CONTINUED) - BANKING COORDINATES -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">CLIENT INFORMATION SHEET • CIS-KYC</div>
  </div>

  <div class="page-body">
    <div class="banner-frame">
      <img src="{banner_ship}" alt="Maritime Transport Vessel" />
    </div>

    <div class="sec-title-wrap">
      <div class="sec-num-box">03</div>
      <div class="sec-title-content">
        <div class="sec-title">BANKING COORDINATES <span style="font-size: 13px; color: #64748B;">• CONTINUED</span></div>
        <div class="sec-title-bar"></div>
        <div class="sec-subtitle">Dedicated attorney trust account (IOLTA) facility</div>
      </div>
    </div>

    <div class="bank-card" style="margin-bottom: 20px;">
      <div class="bank-card-header">
        <span class="bank-name">JPMORGAN CHASE BANK N.A.</span>
        <span class="bank-badge">AMERICAN LAW FIRM • IOLTA</span>
      </div>
      <div class="bank-grid-2col">
        <div class="bank-field">
          <span class="bf-label">Bank Headquarters Address:</span>
          <span class="bf-val">270 Park Avenue, New York, NY 10007</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Bank Local Branch Address:</span>
          <span class="bf-val">11770 San Vicente Blvd., Los Angeles, CA 90049</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Account Name:</span>
          <span class="bf-val" style="font-weight: 700; color: #00214E;">Law Office of Jo Ann B Makous PC</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Type of Account:</span>
          <span class="bf-val">IOLTA (Interest on Lawyers' Trust Accounts)</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Account Number:</span>
          <span class="bf-val-mono">5785 5726 9</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Routing Number:</span>
          <span class="bf-val-mono">021000021</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">SWIFT Code:</span>
          <span class="bf-val-mono">CHASUS33XXX</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Bank Officer:</span>
          <span class="bf-val">Roger A. Quinonez (Roger.A.Quinonez@Chase.com | +1 310 909 0010)</span>
        </div>
        <div class="bank-field" style="grid-column: span 2; border-top: 1px solid #E6E6DF; padding-top: 8px; margin-top: 4px;">
          <span class="bf-label">Designated Attorney & Counsel:</span>
          <span class="bf-val" style="font-weight: 700;">Jo Ann Brady Makous</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Attorney Office Address:</span>
          <span class="bf-val">9350 Wilshire Blvd., Suite 203-H, Beverly Hills, CA 90212</span>
        </div>
        <div class="bank-field">
          <span class="bf-label">Attorney Contacts:</span>
          <span class="bf-val">+1 646 937 0927 | j.makous@ochoamakouslaw.com</span>
        </div>
      </div>
    </div>

    <div class="notice-box" style="margin-top: auto;">
      <div class="notice-title">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#00214E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        ESCROW & WIRE TRANSFER INSTRUCTIONS
      </div>
      <div class="notice-text">
        All financial transfers, letters of credit (LC/SBLC), performance bonds, and borrowing base collateral allocations must reference transaction contract numbers and proceed exclusively through verified institutional channels listed above. Wire confirmations should be transmitted simultaneously to operations@vsinternationalllc.com.
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>05</span>
  </div>
</div>

<!-- PAGE 6: PART TWO DIVIDER - VERIFICATION & EXHIBITS -->
<div class="pdf-page fullbleed-page" style="background-image: url('{divider_bg}');">
  <div class="fullbleed-overlay"></div>
  <div class="fullbleed-content">
    <div class="cover-top-row">
      <img src="{logo_white}" alt="Logo" style="height: 64px;" />
      <span class="cover-badge-pill">OFFICIAL VERIFICATION</span>
    </div>

    <div class="cover-center-box">
      <div class="cover-eyebrow">PART TWO</div>
      <h1 class="cover-main-title" style="font-size: 30px;">VERIFICATION & EXHIBITS</h1>
      <div class="cover-rule"></div>
      <div class="cover-company" style="font-size: 13.5px; max-width: 500px; margin: 0 auto; line-height: 1.6;">
        Corporate records, certificate of status, company seal, authorized signature, and electronic articles of organization, reproduced as filed.
      </div>
    </div>

    <div class="cover-bottom-bar">
      <span>VS INTERNATIONAL GROUP LLC</span>
      <span>STATE OF FLORIDA & IRS FILINGS</span>
      <span>SECTION II • EXHIBITS</span>
    </div>
  </div>
</div>

<!-- PAGE 7: EXHIBIT A -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT A</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">CORPORATE RECORDS • SEAL & AUTHORIZED SIGNATORY</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_a}" alt="Exhibit A - Florida Annual Report & Seal" />
    </div>

    <div class="exhibit-caption">
      REPRODUCED AS FILED — 2025 FLORIDA LIMITED LIABILITY COMPANY ANNUAL REPORT • COMPANY SEAL • AUTHORIZED SIGNATURE
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>07</span>
  </div>
</div>

<!-- PAGE 8: EXHIBIT B -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT B</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">DETAIL BY ENTITY NAME • DIVISION OF CORPORATIONS</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_b}" alt="Exhibit B - Florida Active Status Detail" />
    </div>

    <div class="exhibit-caption">
      FLORIDA DEPARTMENT OF STATE • DIVISION OF CORPORATIONS • ACTIVE STATUS OF RECORD (L23000318932)
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>08</span>
  </div>
</div>

<!-- PAGE 9: EXHIBIT C - I -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT C – I</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">ELECTRONIC ARTICLES OF ORGANIZATION (ARTICLES I - IV)</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_c1}" alt="Exhibit C-I - Articles of Organization" />
    </div>

    <div class="exhibit-caption">
      FLORIDA DEPARTMENT OF STATE • ARTICLES OF ORGANIZATION FOR FLORIDA LIMITED LIABILITY COMPANY (PART I)
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>09</span>
  </div>
</div>

<!-- PAGE 10: EXHIBIT C - II -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT C – II</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">ELECTRONIC ARTICLES OF ORGANIZATION (ARTICLES V - VI)</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_c2}" alt="Exhibit C-II - Articles of Organization Part 2" />
    </div>

    <div class="exhibit-caption">
      FLORIDA DEPARTMENT OF STATE • ARTICLES OF ORGANIZATION • EFFECTIVE DATE: 07/05/2023 (PART II)
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>10</span>
  </div>
</div>

<!-- PAGE 11: EXHIBIT D - I -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT D – I</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">EMPLOYER IDENTIFICATION NUMBER • IRS NOTICE CP 575 B</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_d1}" alt="Exhibit D-I - IRS CP 575 B Notice" />
    </div>

    <div class="exhibit-caption">
      INTERNAL REVENUE SERVICE • EIN ASSIGNMENT NOTICE CP 575 B • EIN: 93-2268146
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>11</span>
  </div>
</div>

<!-- PAGE 12: EXHIBIT D - II -->
<div class="pdf-page">
  <div class="page-header">
    <div class="header-logo-wrap">
      <img src="{logo_navy}" alt="Logo" />
    </div>
    <div class="header-title-text">VERIFICATION & EXHIBITS</div>
  </div>

  <div class="page-body">
    <div class="exhibit-title-bar">
      <div class="exhibit-tag-box">
        <div class="exhibit-tag">EXHIBIT D – II</div>
        <div class="exhibit-bar"></div>
      </div>
      <div class="exhibit-meta">IRS NOTICE CP 575 B • REMINDERS & TEAR-OFF STUB</div>
    </div>

    <div class="exhibit-frame">
      <img src="{exhibit_d2}" alt="Exhibit D-II - IRS Notice Stub" />
    </div>

    <div class="exhibit-caption">
      DEPARTMENT OF THE TREASURY • INTERNAL REVENUE SERVICE NOTICE CP 575 B (PAGE 2)
    </div>
  </div>

  <div class="page-footer">
    <span>VS INTERNATIONAL GROUP LLC</span>
    <span>CONFIDENTIAL • CIS-KYC</span>
    <span>12</span>
  </div>
</div>

</body>
</html>
"""

html_path = 'temp_cis_document.html'
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Generated HTML template: {len(html_content)} characters")

# Compile with Edge headless
edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
abs_html = os.path.abspath(html_path)

# Destination paths requested by user: in public with name "diseño PDF"
os.makedirs('public', exist_ok=True)
temp_pdf_render = os.path.abspath('temp_edge_render.pdf')

cmd = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    '--allow-file-access-from-files',
    f'--print-to-pdf={temp_pdf_render}',
    f'file:///{abs_html}'
]

print("Compiling PDF with Edge...")
res = subprocess.run(cmd, capture_output=True, text=True)
print("Exit code:", res.returncode)

if os.path.exists(temp_pdf_render):
    size = os.path.getsize(temp_pdf_render)
    print(f"Rendered intermediate PDF: {size:,} bytes")
    import shutil
    
    # Target files in public/
    target_diseno = os.path.join('public', 'diseno_pdf.pdf')
    target_pdf_n = os.path.join('public', 'dise\u00f1o PDF.pdf')
    target_raw_n = os.path.join('public', 'dise\u00f1o PDF')
    
    shutil.copyfile(temp_pdf_render, target_diseno)
    shutil.copyfile(temp_pdf_render, target_pdf_n)
    shutil.copyfile(temp_pdf_render, target_raw_n)
    
    if os.path.exists(temp_pdf_render):
        os.remove(temp_pdf_render)
        
    print(f"Successfully generated and deployed:")
    print(f" - {target_pdf_n}")
    print(f" - {target_raw_n}")
    print(f" - {target_diseno}")
else:
    print("Error: PDF output not found.")
