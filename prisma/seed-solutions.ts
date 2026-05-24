import { config } from 'dotenv'
import { PrismaClient } from '@prisma/client'

config({ path: '.env.local' })

const prisma = new PrismaClient()

async function main() {
  console.log('Çözümler ekleniyor...')

  const solutions = [
    {
      slug: 'ucretsiz-ekspertiz',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde yapılan ücretsiz ekspertizle hacim hesapları, izin süreçleri ve zaman planı taşınmadan önce netleşir; İstanbul Ofis Taşıma Şirketi yazılı teklifini sürprizsiz sunar.',
      metaTitle: 'Ücretsiz Ekspertiz | İstanbul Ofis Taşıma Şirketi Yerinde Keşif',
      metaDescription: 'Ücretsiz ekspertizle eşya hacmi, izin gereklilikleri ve maliyet kalemleri ölçülerek sabit teklif hazırlanır. Dijital rapor ve görsel envanter aynı gün paylaşılır.',
      icon: 'ClipboardList',
      order: 1,
      content: `<h2>Yerinde Analizle Net Planlama</h2>
<p>İstanbul Ofis Taşıma Şirketi'nden uzman bir ekip, taşınmadan önce adresinize gelerek her odanın metrekaresini, yük asansörünü ve park alanını ölçer. Böylece telefon görüşmelerinde fark edilemeyen detaylar tespit edilir ve teklif kalemleri gerçek verilere dayanır.</p>
<p>Ziyaret sırasında lazer metre, eğim sensörü ve dijital envanter uygulaması aynı anda kullanılır. Her mobilya fotoğraflanır, hassas parçalar işaretlenir ve hangi paketleme tekniğinin uygulanacağı rapora eklenir.</p>
<h3>Ekspertiz Adımlarımız</h3>
<p>Keşif; yalnızca eşya saymak değil, aynı zamanda yönetim prosedürlerini, vinç gereksinimini ve enerji hattı durumunu analiz etmektir. Aşağıdaki kontrol listesi standart adımlarımızı gösterir.</p>
<ul>
<li>Asansör çalışma saatleri ve kapasitesi yönetimden yazılı olarak doğrulanır</li>
<li>Merdiven dönüş açıları ölçülür, geniş mobilyalar için alternatif güzergâh çıkarılır</li>
<li>Kırılgan, yüksek değerli ve sigorta kapsamı genişletilmesi gereken eşyalar işaretlenir</li>
<li>Teslim adresindeki park yasağı, yol kapanması veya vinç platformu ihtiyacı kaydedilir</li>
</ul>
<p>Ekspertiz formu doldurulduktan sonra saha ekibi ile operasyon merkezi arasında fotoğraf ve not paylaşımı yapılır; böylece taşıma günü herkes aynı bilgiyi kullanır.</p>
<h3>Fiyatlama Doğruluk Tablosu</h3>
<p>Yerinde ekspertiz yapılmadığında fiyat sapmaları kaçınılmazdır. Karşılaştırma tablosu farklı yöntemlerin riskini gösterir.</p>
<table><thead><tr><th>Yöntem</th><th>Hata Payı</th><th>Ek Ücret Riski</th><th>Müşteri Memnuniyeti</th></tr></thead><tbody>
<tr><td>Telefon tahmini</td><td>%35</td><td>Çok yüksek</td><td>Düşük</td></tr>
<tr><td>Fotoğraf paylaşımı</td><td>%18</td><td>Orta</td><td>Orta</td></tr>
<tr><td>Yerinde ekspertiz</td><td>%3</td><td>Sıfır</td><td>Çok yüksek</td></tr>
</tbody></table>
<p>Tablodaki fark, keşif ziyaretinin yalnızca fiyat değil, sözleşme güvenliği açısından da vazgeçilmez olduğunu kanıtlar.</p>
<h3>Randevuya Hazırlık Rehberi</h3>
<p>Ekspertizden maksimum verim almak için küçük hazırlıklar yeterlidir. Aşağıdaki maddeler sürenin kısalmasını ve raporun daha kapsamlı olmasını sağlar.</p>
<ol>
<li>Taşınmayacak eşyaları ayrı bir alanda toplayın ve etiketi belirtin</li>
<li>Bodrum, depo ve balkon gibi alanların anahtarlarını hazır tutun</li>
<li>Yönetim iletişim bilgilerini ve asansör kullanım izinlerini paylaşın</li>
<li>Tercih ettiğiniz taşınma tarihlerini ve alternatif günleri not edin</li>
</ol>
<p>Ziyaret tamamlandığında dijital rapor aynı gün e-posta ve WhatsApp üzerinden gönderilir. Rapor, teklif onaylandığında otomatik olarak sözleşmeye dönüşür ve tüm ekiplerle paylaşılır.</p>`
    },
    {
      slug: 'sozlesmeli-nakliyat',
      title: 'Sözleşmeli Nakliyat',
      description: 'İstanbul Ofis Taşıma Şirketi her taşıma için tarafların sorumluluğunu, sigorta kapsamını ve teslim saatini yazılı sözleşmeyle garanti altına alır; sürpriz ücretlere izin vermez.',
      metaTitle: 'Sözleşmeli Nakliyat | İstanbul Ofis Taşıma Şirketi Güvence Paketi',
      metaDescription: 'Sözleşmeli nakliyatla fiyat, hizmet kapsamı, sigorta limiti ve tazminat süreçleri hukuki güvenceye alınır. Dijital imza ve QR doğrulama desteklenir.',
      icon: 'FileText',
      order: 2,
      content: `<h2>Yazılı Taahhüt Olmadan Taşınma Olmaz</h2>
<p>İstanbul Ofis Taşıma Şirketi, her projeyi hukuki zemine oturtmak için sözleşmesiz işe başlamaz. Yazılı taahhüt, ücret artışı veya sorumluluk belirsizliği gibi krizleri daha oluşmadan ortadan kaldırır.</p>
<p>Sözleşmede tarih, saat, ekip büyüklüğü, kullanılacak araç ve sigorta limiti gibi tüm ayrıntılar yer alır. Böylece hizmet kapsamı operasyon gününde tek bir cümleyle bile değiştirilemez.</p>
<h3>Zorunlu Maddeler</h3>
<p>Hazırladığımız sözleşmeler fiyat bilgisinin yanı sıra operasyonel detayları da içerir. Aşağıdaki maddeler her anlaşmanın temelini oluşturur.</p>
<ul>
<li>Taşıma adresleri mahalle ve kapı numarasına kadar yazılır</li>
<li>Söküm, montaj, vinç ve depolama gibi ek hizmetler ayrı satırlarda belirtilir</li>
<li>İptal ve erteleme koşulları, hava durumu senaryoları dahil açıklanır</li>
<li>Teslim sonrası hasar bildirimi için kullanılacak iletişim kanalı ve süre tanımlanır</li>
</ul>
<p>Bu maddeler, tarafların beklentisinin aynı sayfada buluşmasını sağlar ve tazminat süreçlerinde referans alınır.</p>
<h3>Sözleşme Tipleri Tablosu</h3>
<p>Farklı ihtiyaçlara uygun üç model sözleşme sunuyoruz. Karşılaştırma tablosu hangi paketin size uygun olduğunu hızlıca gösterecek.</p>
<table><thead><tr><th>Özellik</th><th>Standart</th><th>Kurumsal</th><th>Premium</th></tr></thead><tbody>
<tr><td>Fiyat Garantisi</td><td>Var</td><td>Var</td><td>Var + sabit kur</td></tr>
<tr><td>Sigorta Limiti</td><td>250.000 TL</td><td>500.000 TL</td><td>1.000.000 TL</td></tr>
<tr><td>İptal Hakkı</td><td>48 saat</td><td>72 saat</td><td>96 saat</td></tr>
<tr><td>Dijital Arşiv</td><td>Evet</td><td>Evet</td><td>Evet + QR doğrulama</td></tr>
</tbody></table>
<p>Kurumsal ve premium sözleşmelerde QR kod ile dijital doğrulama yapılır; böylece sahadaki ekip belgeyi saniyeler içinde teyit edebilir.</p>
<h3>İmzadan Önce Kontrol</h3>
<p>Sözleşme imzalamadan önce kısa bir kontrol listesi hazırlamak süreci güvenli kılar.</p>
<ol>
<li>Vergi numarası ve ticaret sicil no şirket bilgileriyle eşleşiyor mu?</li>
<li>Sigorta poliçe numarası ve teminat limiti açıkça yazılmış mı?</li>
<li>KDV oranı, ödeme planı ve ek hizmet tutarları rakamsal mı?</li>
</ol>
<p>Sözleşmenin son kopyası dijital arşive yüklenir ve müşteriye PDF olarak gönderilir. Gerekirse mobil cihazdan QR kodu okutularak belge doğrulanabilir, böylece farklı ekiplerle paylaşırken bile güvenlik bozulmaz.</p>`
    },
    {
      slug: 'sigortali-nakliyat',
      title: 'Sigortalı Nakliyat',
      description: 'Kırılma, kayıp veya gecikme risklerine karşı tüm eşyalarınızı poliçe güvencesine alan sigortalı nakliyat paketimiz, İstanbul Ofis Taşıma Şirketiyle her senaryoyu güvence altına alır.',
      metaTitle: 'Sigortalı Nakliyat | İstanbul Ofis Taşıma Şirketi Poliçe Koruması',
      metaDescription: 'Sigortalı nakliyat ile zorunlu sorumluluk, tam kapsam ve değer beyan poliçeleri tek dosyada sunulur. Hasar bildirimi ve tazminat süreçleri şeffaf yönetilir.',
      icon: 'Shield',
      order: 3,
      content: `<h2>Tam Kapsamlı Güvence</h2>
<p>Sigortalı nakliyat paketi, kırılmadan gecikmeye kadar tüm risklere finansal koruma sağlar. Poliçe dosyası sözleşmeyle birlikte saklanır ve İstanbul Ofis Taşıma Şirketi ekipleri her adımı sigorta şartlarına göre planlar.</p>
<p>Zorunlu sorumluluk sigortasına ek olarak tam kapsam veya değer beyan poliçesi düzenlenebilir. Böylece antika koleksiyonlarla yüksek teknoloji ekipmanları aynı güvence altında taşınır.</p>
<h3>Sigorta Türleri Tablosu</h3>
<p>Hangi poliçeyi seçeceğinizi bilemiyorsanız aşağıdaki tablo kapsama dair hızlı bir özet sunar.</p>
<table><thead><tr><th>Poliçe</th><th>Kapsam</th><th>Teminat Limiti</th><th>Önerilen Kullanım</th></tr></thead><tbody>
<tr><td>Zorunlu sorumluluk</td><td>Firma kusuru</td><td>Yasal limit</td><td>Standart ev taşımaları</td></tr>
<tr><td>Tam kapsam</td><td>Kaza, yangın, sel, vandalizm</td><td>Rayiç değer</td><td>Kurumsal ofisler</td></tr>
<tr><td>Değer beyan</td><td>Beyan edilen kalemler</td><td>Kalem bazlı</td><td>Sanat, müzik, koleksiyon</td></tr>
</tbody></table>
<p>Tablo, ek prim ödeyerek hangi riskleri teminat altına alabileceğinizi ve limitleri nasıl genişleteceğinizi gösterir.</p>
<h3>Poliçe Öncesi Sorular</h3>
<p>Poliçeyi imzalamadan önce mutlaka şu sorulara cevap alın:</p>
<ul>
<li>Depolama veya bekleme süresi kapsama dahil mi, değilse nasıl eklenir?</li>
<li>Ambalajlama hataları veya personel kusurları poliçe tarafından nasıl değerlendirilir?</li>
<li>Hasar ihbarı için süre sınırı kaç gündür ve hangi kanallar kullanılmalıdır?</li>
</ul>
<p>Bu sorular poliçenin beklentilerinizi karşılayıp karşılamadığını netleştirir.</p>
<h3>Hasar Prosedürü</h3>
<p>Her ekipte dijital tutanak sistemi bulunur. Teslimat sonrası fark edilen bir problem aşağıdaki akışla raporlanmalıdır.</p>
<ol>
<li>Hasarı teslim anında ekibe bildirip fotoğraf çekin</li>
<li>48 saat içinde müşteri temsilcimize yazılı ihbar gönderin</li>
<li>Sigorta şirketine eksper talebi açın, randevuyu onaylayın</li>
</ol>
<p>Eksper raporu genellikle beş iş gününde tamamlanır; ödeme süreci poliçe tipine göre 15-30 iş günü sürer. Tüm belgeler dijital arşive işlendiği için dosyanın durumu panelden anlık takip edilebilir.</p>`
    },
    {
      slug: 'asansorlu-nakliyat',
      title: 'Asansörlü Nakliyat',
      description: 'Bina içi asansör veya merdivenlerin yetersiz kaldığı durumlarda mobil vinç sistemlerimizle geniş hacimli eşyaları dakikalar içinde güvenle taşıyoruz.',
      metaTitle: 'Asansörlü Nakliyat | İstanbul Ofis Taşıma Şirketi Vinç Operasyonu',
      metaDescription: 'Asansörlü nakliyat hizmetiyle mobil vinç, rüzgar analizi ve site koordinasyonu tek plan dahilinde yönetilir. Büyük eşyalar çiziksiz taşınır.',
      icon: 'ArrowUpDown',
      order: 4,
      content: `<h2>Dışarıdan Erişimle Hızlı Taşıma</h2>
<p>Merdiven boşluklarının dar olduğu konutlarda veya ticari alanlarda büyük mobilyaları indirmek çoğu zaman mümkün değildir. Mobil vinç sistemlerimiz pencere önünden erişim sağlayarak eşyayı doğrudan araca indirir.</p>
<p>Vinç planlaması yapılırken sokak genişliği, bina cephesi ve enerji hatları analiz edilir. İstanbul Ofis Taşıma Şirketi operasyon ekibi site yönetiminden izin alır ve komşulara bilgilendirme yapar.</p>
<h3>Hangi Eşyalar İçin?</h3>
<p>Vinç gerektiren eşyaları önceden bilmek zaman kazandırır. Listede en sık dışarıdan indirdiğimiz parçalar bulunur.</p>
<ul>
<li>Köşe koltukları, king size yatak setleri, geniş bazalar</li>
<li>Piyano, davul seti, profesyonel ses sistemleri</li>
<li>Tek parça cam vitrinler, modüler dolap panelleri</li>
<li>Jakuzi, sauna kabini, ağır beyaz eşya ve kasalar</li>
</ul>
<p>Bu eşyalar için merdiven kullanmak hem zaman kaybı hem de hasar riski yaratır; vinç asansör çözümü ise dakikalar içinde sonuç verir.</p>
<h3>Yöntem Karşılaştırması</h3>
<p>Hangi yöntemin tercih edileceğine karar verirken hız, güvenlik ve personel ihtiyacını değerlendirmek gerekir.</p>
<table><thead><tr><th>Yöntem</th><th>Süre</th><th>Hasar Riski</th><th>Personel</th></tr></thead><tbody>
<tr><td>Merdiven taşıma</td><td>Uzun</td><td>Yüksek</td><td>6-8 kişi</td></tr>
<tr><td>Bina asansörü</td><td>Orta</td><td>Orta</td><td>4 kişi</td></tr>
<tr><td>Vinç asansör</td><td>Kısa</td><td>Sıfır</td><td>3 kişi + operatör</td></tr>
</tbody></table>
<p>Tablodan görüldüğü gibi vinç seçeneği, geniş hacimli eşyalarda hem süreyi kısaltır hem de bina içi yüzeyleri korur.</p>
<h3>Site Koordinasyonu</h3>
<p>Asansörlü nakliyatın sorunsuz ilerlemesi için belediye ve site yönetimiyle eşgüdüm şarttır. Operasyon öncesi aşağıdaki adımları izleriz.</p>
<ol>
<li>Park alanı şerit ile kapatılır, güvenlik bariyeri ve yönlendirme tabelaları yerleştirilir</li>
<li>Vinç kurulumu sırasında enerji, internet ve doğal gaz hatlarına uzaklık kontrol edilir</li>
<li>Rüzgar ve hava durumu meteoroloji API'si ile canlı takip edilir</li>
</ol>
<p>Operasyon günü platform her parça öncesi kontrol edilir, bağlantı noktaları çift kilitlenir ve iç ekip ile dış ekip telsizle senkronize çalışır. Böylece mobil vinç kullanımı iki saatten kısa sürer ve bina içi yüzeyler çiziksiz kalır.</p>`
    },
    {
      slug: 'ambalaj-paketleme',
      title: 'Ambalaj & Paketleme',
      description: 'Profesyonel ambalaj hizmetimiz; çift katmanlı koruma, renk kodlu etiketleme ve nem kontrollü depolama çözümleriyle eşyalarınızı çiziksiz taşır.',
      metaTitle: 'Ambalaj ve Paketleme | İstanbul Ofis Taşıma Şirketi Profesyonel Koruma',
      metaDescription: 'Ambalaj & paketleme hizmetiyle eşya tipine göre malzeme seçimi, tablo ve elektronik kasaları, renk kodlu etiket sistemi ve açma planı hazırlanır.',
      icon: 'Package',
      order: 5,
      content: `<h2>Profesyonel Malzemeyle Başlayan Güvenlik</h2>
<p>Taşıma hasarlarının çoğu yolculukta değil, paketleme aşamasında ortaya çıkar. İstanbul Ofis Taşıma Şirketi her eşya türü için doğru malzemeyi seçerek riskleri en başta ortadan kaldırır ve paketleme sürecini raporlarla belgelendirir.</p>
<p>Her oda için ayrı kutu setleri hazırlanır, kutular ağırlık limitlerine göre doldurulur ve nem kontrolü için silika jel kullanılır. Sanat eserleri mikroklima kasalarına yerleştirilir, elektronikler antistatik torbalara alınır.</p>
<h3>Malzeme Matrisi</h3>
<p>Eşyaya göre malzeme seçmek için hazırladığımız matris, paketleme sırasını planlamayı kolaylaştırır.</p>
<table><thead><tr><th>Eşya Türü</th><th>İlk Katman</th><th>İkinci Katman</th><th>Dış Koruma</th></tr></thead><tbody>
<tr><td>Cam ve porselen</td><td>Köpük folyo</td><td>Balonlu naylon</td><td>Ahşap kasa</td></tr>
<tr><td>Mobilya yüzeyi</td><td>Keçe battaniye</td><td>Çift streç</td><td>Köşe koruma</td></tr>
<tr><td>Elektronik</td><td>Antistatik torba</td><td>Köpük blok</td><td>Sert kutu</td></tr>
<tr><td>Tekstil</td><td>Vakum torba</td><td>Şeffaf naylon</td><td>Nefes alan çuval</td></tr>
</tbody></table>
<p>Tablo sayesinde hangi katmanın önce uygulanacağı ve dış korumanın ne olacağı netleşir.</p>
<h3>Etiketleme ve Listeler</h3>
<p>Renk kodlu etiket sistemiyle her kutu gideceği odayı belirtir; QR kodlu listeler ise müşteri panelinden anlık görülebilir.</p>
<ul>
<li>Kırmızı: kırılacaklar, mavi: elektronik, yeşil: tekstil, sarı: mutfak</li>
<li>Her etikette kutu numarası, içerik özeti ve ağırlık bilgisi yer alır</li>
<li>Panel üzerinden arama yaparak ihtiyaç duyduğunuz kutuyu saniyeler içinde bulursunuz</li>
</ul>
<p>Bu sistem karışıklığı önler ve açma sırasını planlamayı kolaylaştırır.</p>
<h3>Paketleme Akışı</h3>
<p>Operasyon günü ekip önce demonte edilmesi gereken mobilyaları söker, ardından zemin koruması serer. Süreç aşağıdaki adımlarla ilerler.</p>
<ol>
<li>Ağır eşyalar tabana yerleştirilir, boşluklar köpük topuyla doldurulur</li>
<li>Hafif ürünler üste alınır; kutu sallandığında hareket etmemelidir</li>
<li>Kutu kapağı kapatılmadan önce içerik listesi ve QR kodu doğrulanır</li>
</ol>
<p>Yeni adreste paket açma hizmeti de sunuyoruz. Ekip kutuları ilgili odalara taşır, mobilyaları kurar ve ambalaj atıklarını geri dönüşüme gönderir; böylece taşınma sonrası ilk gün düzen içinde başlar.</p>`
    },
  ]

  for (const solution of solutions) {
    await prisma.solution.upsert({
      where: { slug: solution.slug },
      update: solution,
      create: { ...solution, active: true },
    })
    console.log(`✓ ${solution.title}`)
  }

  console.log('\nSeeding completed!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
