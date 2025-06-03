CREATE DATABASE your_portfolio_db;
USE your_portfolio_db;

-- Buat tabel contacts
CREATE TABLE contacts (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
message TEXT NOT NULL,
submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Buat tabel articles
CREATE TABLE articles (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
article_date DATE NOT NULL,
content TEXT NOT NULL
);

INSERT INTO articles (title, article_date, content) VALUES
(
  'From Challenges to Opportunities: A Journey in Scrum & Project Management',
  '2025-02-28',
  'When I first became a Scrum Master, I faced various challenges—ranging from setting the team\'s work rhythm and ensuring effective communication to dealing with inactive members. However, with the right approach, I learned that leadership is not just about managing but also about understanding and supporting the team to grow together. One of the strategies I implemented was using <strong>Lark bot for daily scrum</strong>, which helped the team stay disciplined in providing updates. Additionally, I conducted regular retrospectives to evaluate and improve the team\'s performance. For me, being a Scrum Master is not just about applying agile methodologies but also about creating a collaborative and productive work environment. <em>"A good leader is not the smartest one, but the one who helps their team grow together."</em>'
),
(
  'Putri Fakultas Teknik 2025',
  '2025-02-10',
  'Sebuah kebanggaan dan kehormatan bagi saya untuk dinobatkan sebagai Putri Fakultas Teknik 2025. Gelar ini bukan sekadar pencapaian pribadi, tetapi juga amanah untuk menjadi representasi mahasiswa teknik yang berintelektual, berintegritas, dan berkontribusi nyata bagi fakultas. Perjalanan ini mengajarkan saya banyak hal—mulai dari kepemimpinan, public speaking, hingga pentingnya membawa nilai-nilai teknik ke dalam kehidupan sehari-hari. Saya berkomitmen untuk terus menginspirasi dan membawa perubahan positif bagi komunitas teknik. <em>"Menjadi seorang pemimpin bukan hanya tentang gelar, tetapi tentang bagaimana kita memberikan dampak nyata."</em>'
),
(
  'Juara 1 Lomba Menulis Esai Frasa 2024',
  '2024-11-01',
  'Sebuah perjalanan yang penuh dedikasi akhirnya membuahkan hasil—saya meraih \'Juara 1 dalam Lomba Menulis Esai Frasa 2024\'! Dengan esai berjudul "Menari di Antara Dua Dunia: Menjembatani Kesenjangan antara Persepsi dan Realitas Budaya", saya mengeksplorasi bagaimana globalisasi mempengaruhi cara kita memahami identitas budaya. Menulis bukan sekadar menuangkan kata-kata, tetapi juga menghubungkan ide, perasaan, dan perspektif yang dapat membuka wawasan pembaca. Penghargaan ini menjadi motivasi bagi saya untuk terus berkarya dan membagikan gagasan yang bermakna. Terima kasih kepada semua yang telah mendukung dan menginspirasi saya sepanjang proses ini. Semoga esai ini dapat memberikan kontribusi dalam diskusi mengenai budaya dan identitas di era modern. <em>"Kata-kata memiliki kekuatan untuk mengubah dunia—satu esai pada satu waktu."</em>'
);

