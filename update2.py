import re

with open('C:/Users/LENOVO/.gemini/antigravity/scratch/portfolio/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Certifications
content = content.replace("Jajula Connects", "Alpha Connects")

aws_certs = """
                <!-- Cert 5 (New) -->
                <div class="cred-row">
                    <span class="cred-issuer">Amazon Web Services (AWS)</span>
                    <div class="cred-details">
                        <h3>Fundamentals of Machine Learning and Artificial Intelligence</h3>
                        <span class="meta">Jul 2026</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1XPj4gzIE4NtHpASKaODtOitZVertGvW2/view" class="verify-btn" target="_blank"><i data-feather="external-link"></i> Verify</a>
                </div>
                <!-- Cert 6 (New) -->
                <div class="cred-row">
                    <span class="cred-issuer">Amazon Web Services (AWS)</span>
                    <div class="cred-details">
                        <h3>Job Roles in Cloud</h3>
                        <span class="meta">Jul 2026</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1e0TdIc7_-5l0uvXSpeEUm00irRsrsKIJ/view" class="verify-btn" target="_blank"><i data-feather="external-link"></i> Verify</a>
                </div>
                <!-- Cert 7 (New) -->
                <div class="cred-row">
                    <span class="cred-issuer">Amazon Web Services (AWS)</span>
                    <div class="cred-details">
                        <h3>AWS Certified Cloud Practitioner</h3>
                        <span class="meta">Jul 2026</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1E-ExsiZrNXPrJumJbQfBekrbXq8uxoF7/view" class="verify-btn" target="_blank"><i data-feather="external-link"></i> Verify</a>
                </div>
                <!-- Cert 8 (New) -->
                <div class="cred-row">
                    <span class="cred-issuer">Amazon Web Services (AWS)</span>
                    <div class="cred-details">
                        <h3>Introduction to Generative AI</h3>
                        <span class="meta">Jul 2026</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1lfndN7v-U96Ia0G-Aex7Miu6IdrRqZUU/view" class="verify-btn" target="_blank"><i data-feather="external-link"></i> Verify</a>
                </div>
"""
# Make it a single line so it doesn't break formatting if it's all one line
aws_certs_single = aws_certs.replace('\n', '').strip()

alpha_pattern = r'(<span class="cred-issuer">Alpha Connects</span>.*?</div>\s*</div>)'
content = re.sub(alpha_pattern, r'\1' + aws_certs_single, content, count=1)


# 2. Add new Experience Section before Developer Journey
experience_section = """
        <!-- SECTION 7.5: EXPERIENCE -->
        <section id="experience" class="section">
            <div class="section-header fade-in">
                <span class="section-label">[06.5 / venture]</span>
                <h2 class="section-title">Professional Experience</h2>
            </div>
            <div class="journey-timeline">
                <div class="journey-node fade-in">
                    <div class="journey-year" style="font-size: 1.2rem; text-align: right;">Jul 2026 &mdash; Present<br><span style="font-size: 0.8rem; opacity: 0.7;">Davanagere, Karnataka</span></div>
                    <div class="journey-content glass">
                        <h3>Founder & CEO</h3>
                        <p style="color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.8rem; margin-bottom:0.5rem;">FuGen India Private Ltd</p>
                        <p>Business Ownership, Start-up Leadership and building modern software architectures.</p>
                    </div>
                </div>
            </div>
        </section>
"""
experience_section_single = experience_section.replace('\n', '').strip()

# Insert before "SECTION 8: DEVELOPER JOURNEY TIMELINE"
content = content.replace("<!-- SECTION 8: DEVELOPER JOURNEY TIMELINE -->", experience_section_single + "        <!-- SECTION 8: DEVELOPER JOURNEY TIMELINE -->")

# 3. Add Schools to Timeline safely
edu_addition = """
                <div class="journey-node fade-in">
                    <div class="journey-year">2014-2022</div>
                    <div class="journey-content glass">
                        <h3>Sri Someshwara Vidyalaya</h3>
                        <p style="color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.8rem; margin-bottom:0.5rem;">2nd to 8th Standard (State Board)</p>
                        <p>Focused on primary and middle school foundational education.</p>
                    </div>
                </div>
                <div class="journey-node fade-in">
                    <div class="journey-year">2013-2014</div>
                    <div class="journey-content glass">
                        <h3>Trishul High School</h3>
                        <p style="color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.8rem; margin-bottom:0.5rem;">1st Standard (State Board)</p>
                        <p>Early childhood education.</p>
                    </div>
                </div>
"""
edu_addition_single = edu_addition.replace('\n', '').strip()

# We need to insert this right before the closing `</div>            </div>        </section>` of the Developer Journey
journey_end_pattern = r'(<strong>87\.36%</strong>\.</p>\s*</div>\s*</div>)(\s*</div>\s*</section>\s*<!-- SECTION 9: LANGUAGES -->)'
content = re.sub(journey_end_pattern, r'\1' + edu_addition_single + r'\2', content)

with open('C:/Users/LENOVO/.gemini/antigravity/scratch/portfolio/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
