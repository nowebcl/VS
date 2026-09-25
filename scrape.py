import os
import re
import urllib.request
import urllib.parse

BASE_URL = "https://quanticalabs.com/Atrium/Template/"

with open("original.html", "r", encoding="utf-8") as f:
    html = f.read()

def download_file(url, local_path):
    local_path = os.path.normpath(local_path)
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if os.path.exists(local_path):
        return
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            with open(local_path, "wb") as f:
                f.write(content)
        print(f"Downloaded: {url} -> {local_path}")
    except Exception as e:
        print(f"Failed {url}: {e}")

# Collect all resources from HTML
links = []
# css
for m in re.finditer(r'<link[^>]+href=["\'](.*?)["\']', html, re.I):
    links.append(m.group(1))

# js
for m in re.finditer(r'<script[^>]+src=["\'](.*?)["\']', html, re.I):
    links.append(m.group(1))

# img
for m in re.finditer(r'<img[^>]+src=["\'](.*?)["\']', html, re.I):
    links.append(m.group(1))

# a href with images
for m in re.finditer(r'<a[^>]+href=["\']([^"\']+\.(jpg|jpeg|png|gif))["\']', html, re.I):
    links.append(m.group(1))

# background url() in style attribute
for m in re.finditer(r'url\s*\(\s*["\']?(.*?)["\']?\s*\)', html, re.I):
    links.append(m.group(1))

# data attributes
for m in re.finditer(r'data-[a-zA-Z0-9_-]+=["\']([^"\']+\.(jpg|jpeg|png|gif))["\']', html, re.I):
    links.append(m.group(1))

all_files = set()
for l in links:
    l = l.strip()
    if not l or l.startswith("#") or l.startswith("javascript:") or l.startswith("mailto:") or l.startswith("tel:"):
        continue
    if "fonts.googleapis.com" in l or "ql_bar" in l:
        continue
    all_files.add(l)

print(f"Unique files from HTML: {len(all_files)}")

for f in all_files:
    if f.startswith("http://") or f.startswith("https://"):
        full_url = f
        parsed = urllib.parse.urlparse(f)
        if "quanticalabs.com" in parsed.netloc:
            path_part = parsed.path
            if "/Atrium/Template/" in path_part:
                path_part = path_part.split("/Atrium/Template/")[1]
            elif path_part.startswith("/"):
                path_part = path_part[1:]
            local_path = os.path.join("downloaded", path_part)
            download_file(full_url, local_path)
    else:
        full_url = urllib.parse.urljoin(BASE_URL, f)
        clean_f = f.split("?")[0].split("#")[0]
        if clean_f.startswith("/"):
            clean_f = clean_f[1:]
        local_path = os.path.join("downloaded", clean_f)
        download_file(full_url, local_path)

# Download all CSS referenced files
downloaded_css = []
for root, dirs, files in os.walk(os.path.join("downloaded", "style")):
    for file in files:
        if file.endswith(".css"):
            downloaded_css.append(os.path.join(root, file))

for css_path in downloaded_css:
    try:
        with open(css_path, "r", encoding="utf-8", errors="ignore") as f:
            css_text = f.read()
        css_rel = os.path.relpath(css_path, "downloaded").replace("\\", "/")
        css_url = urllib.parse.urljoin(BASE_URL, css_rel)
        for m in re.finditer(r'url\s*\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)', css_text):
            u = m.group(1).strip()
            if u.startswith("data:") or not u:
                continue
            asset_full_url = urllib.parse.urljoin(css_url, u)
            parsed = urllib.parse.urlparse(asset_full_url)
            path_part = parsed.path
            if "/Atrium/Template/" in path_part:
                path_part = path_part.split("/Atrium/Template/")[1]
            elif path_part.startswith("/"):
                path_part = path_part[1:]
            local_asset_path = os.path.join("downloaded", path_part)
            download_file(asset_full_url, local_asset_path)
    except Exception as e:
        print(f"Error parsing {css_path}: {e}")

print("Scrape complete!")
