import re

with open('src/data/priceList.js', 'r', encoding='utf-8') as f:
    content = f.read()

# IDs to remove (Frozen category duplicates)
to_remove = [
    'mango-18',
    'spinach-21',
    'cauliflower-22',
    'sweet-corn-31',
    'peach-38',
    'strawberry-41',
    'broccoli-42',
    'molokhia-44'
]

for id_str in to_remove:
    pattern = r'[ \t]*\{\s*id:\s*[\'\"`]' + re.escape(id_str) + r'[\'\"`].*?variants:\s*\[.*?\]\s*\},?\n?'
    content = re.sub(pattern, '', content, flags=re.DOTALL)

with open('src/data/priceList.js', 'w', encoding='utf-8') as f:
    f.write(content)
