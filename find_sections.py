import re

with open('C:/Users/LENOVO/.gemini/antigravity/scratch/portfolio/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

sections = re.findall(r'<section.*?id="(.*?)".*?>', content)
print("Sections by ID:", sections)

titles = re.findall(r'<h2 class="section-title">(.*?)</h2>', content)
print("Section Titles:", titles)
