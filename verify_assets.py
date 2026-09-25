import os
import re

missing = []
total_checked = 0
for root, dirs, files in os.walk('public/style'):
    for file in files:
        if file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            for m in re.finditer(r'url\s*\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)', content):
                u = m.group(1).split('?')[0].split('#')[0].strip()
                if u.startswith('data:') or not u or u.startswith('http'):
                    continue
                total_checked += 1
                css_dir = os.path.dirname(path)
                target = os.path.normpath(os.path.join(css_dir, u))
                if not os.path.exists(target):
                    missing.append((path, u, target))

print(f'Total URL references checked: {total_checked}')
print(f'Total missing assets: {len(missing)}')
for m in missing[:20]:
    print('Missing:', m)
