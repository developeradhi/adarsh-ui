import re

with open('C:/Users/LENOVO/.gemini/antigravity/scratch/portfolio/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'<div class="journey-timeline">(.*?)<!-- SECTION 9: LANGUAGES -->', content, re.DOTALL)
if m:
    print("TIMELINE:")
    print(m.group(1))

c = re.search(r'<section id="company".*?</section>', content, re.DOTALL)
if c:
    print("\nCOMPANY:")
    print(c.group(0))
