import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const META_SUFFIX = ' | İstanbul Ofis Taşıma Şirketi'

type ServiceSeed = {
  name: string
  slug: string
  description: string
  order: number
  showOnHomepage: boolean
}

const services: ServiceSeed[] = [
  {
    name: 'Ev Taşıma',
    slug: 'ev-tasima',
    description: 'Evinizi profesyonel ekiplerimizle sigortalı şekilde taşıyoruz.',
    order: 1,
    showOnHomepage: true,
  },
  {
    name: 'Villa Taşımacılığı',
    slug: 'villa-tasimaciligi',
    description: 'Özel planlama gerektiren villa taşımalarında mimariyi koruyoruz.',
    order: 2,
    showOnHomepage: true,
  },
  {
    name: 'Yalı Taşımacılığı',
    slug: 'yali-tasimaciligi',
    description: 'Boğaz yalıları ve sahil konutları için hassas taşıma çözümleri sunuyoruz.',
    order: 3,
    showOnHomepage: true,
  },
  {
    name: 'Parça Eşya Taşımacılığı',
    slug: 'parca-esya-tasimaciligi',
    description: 'Tek parça ya da az sayıdaki eşyayı ekonomik olarak taşıyoruz.',
    order: 4,
    showOnHomepage: true,
  },
  {
    name: 'Şehir İçi Evden Eve Nakliyat',
    slug: 'sehir-ici-evden-eve-nakliyat',
    description: 'İstanbul içindeki taşınmalarınız için hızlı ve güvenli çözümler.',
    order: 5,
    showOnHomepage: true,
  },
  {
    name: 'Şehirler Arası Evden Eve Nakliyat',
    slug: 'sehirler-arasi-evden-eve-nakliyat',
    description: 'Türkiye genelinde uzun mesafe taşımalarınızı planlıyoruz.',
    order: 6,
    showOnHomepage: true,
  },
  {
    name: 'Ofis Taşımacılığı',
    slug: 'ofis-tasimaciligi',
    description: 'Ofis mobilyaları ve BT altyapısı için kesintisiz taşımacılık.',
    order: 7,
    showOnHomepage: false,
  },
  {
    name: 'Kurumsal Taşımacılık',
    slug: 'kurumsal-tasimacilik',
    description: 'Kurumsal şirketlere proje bazlı kapsamlı taşıma hizmeti.',
    order: 8,
    showOnHomepage: false,
  },
  {
    name: 'Fabrika Taşımacılığı',
    slug: 'fabrika-tasimaciligi',
    description: 'Ağır makineler ve üretim hatları için mühendis destekli taşıma.',
    order: 9,
    showOnHomepage: false,
  },
  {
    name: 'Banka Taşımacılığı',
    slug: 'banka-tasimaciligi',
    description: 'Banka şubeleri ve değerli evraklar için güvenlik protokollü taşıma.',
    order: 10,
    showOnHomepage: false,
  },
  {
    name: 'Fuar Taşımacılığı',
    slug: 'fuar-tasimaciligi',
    description: 'Stand ve ekipmanlarınızı zamanında fuar alanına ulaştırıyoruz.',
    order: 11,
    showOnHomepage: false,
  },
  {
    name: 'Hastane Taşımacılığı',
    slug: 'hastane-tasimaciligi',
    description: 'Tıbbi cihazlar ve hastane ekipmanları için hijyenik taşıma.',
    order: 12,
    showOnHomepage: false,
  },
  {
    name: 'Konsolosluk Taşımacılığı',
    slug: 'konsolosluk-tasimaciligi',
    description: 'Diplomatik temsilciliklere özel protokollere uygun taşımalar.',
    order: 13,
    showOnHomepage: false,
  },
  {
    name: 'Üniversite Taşımacılığı',
    slug: 'universite-tasimaciligi',
    description: 'Kampüsler ve akademik birimler için takvime uyumlu taşımacılık.',
    order: 14,
    showOnHomepage: false,
  },
  {
    name: 'Arşiv Taşımacılığı',
    slug: 'arsiv-tasimaciligi',
    description: 'Kurumsal arşivlerinizi numaralı ve kontrollü şekilde taşıyoruz.',
    order: 15,
    showOnHomepage: false,
  },
  {
    name: 'Müze Taşımacılığı',
    slug: 'muze-tasimaciligi',
    description: 'Sanat eserleri ve koleksiyonlar için iklim kontrollü lojistik.',
    order: 16,
    showOnHomepage: false,
  },
  {
    name: 'Bankamatik Taşımacılığı',
    slug: 'bankamatik-tasimaciligi',
    description: 'ATM cihazlarını güvenlik eskortu ve özel ekipmanlarla taşıyoruz.',
    order: 17,
    showOnHomepage: false,
  },
  {
    name: 'Para Kasası Taşımacılığı',
    slug: 'para-kasasi-tasimaciligi',
    description: 'Çelik kasalar ve para kasaları için ağır yük taşımacılığı sağlıyoruz.',
    order: 18,
    showOnHomepage: false,
  },
]

const generateMeta = (name: string) => ({
  metaTitle: `${name}${META_SUFFIX}`,
  metaDescription: `${name} hizmetimizle uzman ekibimiz güvenli ve sigortalı taşımacılık sunar.`,
})

async function main() {
  console.log('🧹 Mevcut hizmetler temizleniyor...')
  await prisma.service.deleteMany()

  console.log(`🆕 ${services.length} hizmet ekleniyor...`)
  for (const service of services) {
    await prisma.service.create({
      data: {
        name: service.name,
        slug: service.slug,
        description: service.description,
        order: service.order,
        showOnHomepage: service.showOnHomepage,
        ...generateMeta(service.name),
      },
    })
  }

  console.log('✅ Hizmet listesi güncellendi')
}

main()
  .catch((error) => {
    console.error('❌ Hizmetler güncellenirken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
<h2>Güvenlik Katmanları <strong>Operasyon Boyunca</strong></h2>
<table><thead><tr><th>Operasyon Aşaması</th><th>Uygulanan Güvenlik</th><th>Belge</th></tr></thead><tbody>
<tr><td>Yükleme</td><td>İki yetkili imzası zorunlu</td><td>Yükleme tutanağı</td></tr>
<tr><td>Nakil</td><td>GPS takipli + güvenlik eskortlu araç</td><td>Güzergah kaydı</td></tr>
<tr><td>Tahliye</td><td>Mühürlü taşıma sandıkları</td><td>Sandık sayım listesi</td></tr>
<tr><td>Teslim</td><td>Sayım + çift taraflı imza</td><td>Kapanış tutanağı</td></tr>
</tbody></table>
<h2>Sistem Geçişi <em>Adım Adım</em></h2>
<ol>
<li>Merkez bankacılık yazılımı kapatma protokolü eksiksiz uygulanır</li>
<li>Şubeyi terk eden son personel çift kontrol yapar ve imzalar</li>
<li>Gece operasyonuyla taşıma yürütülür; kayıt kesiksiz devam eder</li>
<li>Yeni şubede ağ bağlantısı ve yazılım kurulumu teknik ekiple yapılır</li>
<li>Test işlemi tamamlanır; açılış onayı banka yönetimine iletilir</li>
</ol>
<h2>Neden <strong>Sıradan Firma</strong> Bu İşi Yapamaz?</h2>
<p>Banka taşımalarında her ekip üyesi <u>arkaplan taramasından</u> geçmiş ve gizlilik taahhütnamesi imzalamış olmak zorundadır. Bu belge olmadan operasyona dahil olmak yasal değildir.</p>`,
      order: 10,
      active: true,
    },
    {
      name: 'Fuar Taşımacılığı',
      slug: 'fuar-tasimaciligi',
      description: 'Stand malzemeleri, ekran sistemleri ve kurumsal tanıtım ekipmanlarının fuar alanına tam zamanında ulaşması; lojistik hata için sıfır tolerans demektir.',
      metaTitle: 'Fuar Taşımacılığı | Stand ve Ekipman Nakliyat Hizmeti',
      metaDescription: 'Fuar taşımacılığında zamanında teslimat, stand kurulum koordinasyonu ve fuar sonrası depolama hizmetleri.',
      benefits: `Zamanında teslimat garantisi\nStand kurulum koordinasyonu\nFuar alanı lojistik deneyimi\nDepolama ve geri taşıma\nHızlı montaj ekibi\nSigortalı ekipman nakliyatı`,
      content: `<h2>Stand Geç Gelirse <em>Marka Erken Biter</em></h2>
<p>Fuarda stanınız yoksa rakip stand geçer, ziyaretçi geçer, olası müşteri geçer. <em>Teslimatta iki saatlik gecikme</em> küme düşürmek anlamına gelir. Fuar lojistiği bu yüzden 15 dakika toleranslı çalışır.</p>
<p>Yükleme tamamlanmadan başlayan her operasyon, teslimatı riske atar. <strong>Rezervasyon, rota ve park planlaması</strong> çok önceden yapılmalıdır.</p>
<h2>Tipik Fuar <u>Ekipman Katalogu</u></h2>
<ul>
<li>Modüler stand sistemleri ve taşıyıcı iskelet profiller</li>
<li>LED ekranlar, monitor ve dijital tabela üniteleri</li>
<li>Broşür standları ve ürün sergi rafları</li>
<li>Ses, ışık ve sahne sistemi ekipmanları</li>
<li>Kurumsal zemin döşemesi ve dekorasyon malzemeleri</li>
</ul>
<h2>Stand Büyüklüğüne Göre <strong>Teslimat Takvimi</strong></h2>
<table><thead><tr><th>Katılım Ölçeği</th><th>En Geç Teslimat</th><th>Kurulum Süresi</th><th>Geri Taşıma</th></tr></thead><tbody>
<tr><td>Küçük (1–2 stand)</td><td>1 gün önce</td><td>3–4 saat</td><td>Aynı gün</td></tr>
<tr><td>Orta (3–10 stand)</td><td>2 gün önce</td><td>6–8 saat</td><td>Ertesi gün</td></tr>
<tr><td>Büyük (10+ stand)</td><td>3–4 gün önce</td><td>1–2 gün</td><td>2 gün</td></tr>
</tbody></table>
<h2>Fuar Bitince <em>Geri Dönüş Süreci</em></h2>
<ol>
<li>Fuar kapanış saatinde demontaj önceden planlanan ekiple başlar</li>
<li>Ekipmanlar kategorilere ayrılır; hasar anında tutanağa geçirilir</li>
<li>Kırılgan parçalar ilk paketlenir, ağır çerçeveler en son yüklenir</li>
<li>Depo ya da doğrudan kurumsal merkeze teslimat planlanmış haliüyle tamamlanır</li>
</ol>
<h2>Fuar Lojistiği <strong>Marka İmajinin</strong> Arkasıdır</h2>
<p>Ziyaretçi standı görür, arkasındaki lojistik çabayı görmez. <u>O görünmezlik</u>, düzgün yapılan işin ödülüdür. Aksayan an tek görünen an olur.</p>`,
      order: 11,
      active: true,
    },
    {
      name: 'Hastane Taşımacılığı',
      slug: 'hastane-tasimaciligi',
      description: 'Tıbbi cihazlar, ameliyathane ekipmanları ve hasta dosyalarının taşınması; hijyen standartları, kalibrasyon gereksinimleri ve kesintisiz bakım sürekliliği çerçevesinde yönetilir.',
      metaTitle: 'Hastane Taşımacılığı | Tıbbi Cihaz Nakliyat Hizmeti',
      metaDescription: 'Hastane taşımacılığında tıbbi cihaz kalibrasyonu, hijyen protokolü ve hasta hizmet sürekliliği gözetilerek güvenli nakliyat.',
      benefits: `Tıbbi cihaz kalibrasyonu\nHijyen protokollü ambalaj\nHasta bakım sürekliliği\nISO standartlı taşıma\nGece ve hafta sonu operasyon\nUzman teknik ekip`,
      content: `<h2>MRI Yerinden Oynadığında <em>Ne Kaybedilir?</em></h2>
<p>Tıbbi görüntüleme cihazları mikron hassasiyetinde hizalanmış manyetik sistemler barındırır. <em>Taşıma sırasında</em> tek bir beklenmedik salınım, aylarca süren kalibrasyon bozukluğuna dönüşebilir. Yeniden hizalama ise bazen cihazın fiyatının çeyrekini yer.</p>
<p><strong>Ventilatörler titreşime duyarlıdır.</strong> Ameliyathane lambası, yansıtıcısıyla birlikte katı kasa ister. Her cihaz kendi türüne özel ambalaj gerektir; tek standart çözüm yoktur.</p>
<h2>Tıbbi Cihaz <u>Kategorileri ve Risk Tabanı</u></h2>
<ul>
<li>Görüntüleme: MRI, CT, röntgen — çok yüksek risk; üretici protokolü şarttır</li>
<li>Yaşam destek: ventilatör, hasta monıtörü — kritik; taşıma sırasında şarja bağlı tutulmalı</li>
<li>Ameliyathane: masa, lamba, sterilizatör — yüksek; titreşim izolasyonlu altlık</li>
<li>Laboratuvar: santrifüj, mikroskobu — orta; oryantasyon oku etiketi zorunlu</li>
</ul>
<h2>Taşıma Öncesi <strong>Teknik Hazırlık Tablosu</strong></h2>
<table><thead><tr><th>Cihaz</th><th>Zorunlu İşlem</th><th>Sorumlu Taraf</th></tr></thead><tbody>
<tr><td>MRI</td><td>Manyetik alan sıfırlama + gauss ölçümü</td><td>Üretici teknisyeni</td></tr>
<tr><td>CT tarayıcı</td><td>X-ray tüpü kilitleme</td><td>Biyomedikal uzman</td></tr>
<tr><td>Sterilizatör</td><td>Basınç boşaltma ve conta kontrolü</td><td>Teknik servis</td></tr>
</tbody></table>
<h2>Hasta Bakımını <em>Kesmeden</em> Taşınma</h2>
<ol>
<li>Taşınma sırası hasta yoğunluğu haritasyla planlanır</li>
<li>Yoğun bakım ve acil servis en son taşınır</li>
<li>Her bölüm yeni adreste test edilmeden hasta kabulune açılmaz</li>
<li>Geçiş döneminde taşınabilir yedek ekipman sahada hazır tutulur</li>
</ol>
<h2>Hijyen ve <strong>ISO Standartları</strong></h2>
<p>Hastane ekipmanlarının taşımasında kullanılan tüm örtü ve ambalaj malzemeleri tek kullanımlık ve steril olmak zorundadır. <u>Cihaz yüzeyleri</u> taşımadan önce ve sonra dezenfekte edilir; bu işlem tutanakla belgelenir.</p>`,
      order: 12,
      active: true,
    },
    {
      name: 'Konsolosluk Taşımacılığı',
      slug: 'konsolosluk-tasimaciligi',
      description: 'Diplomatik temsilciliklerin ve konsoloslukların taşınması; protokol gereklilikleri, uluslararası mevzuat ve gizlilik standartları çerçevesinde titizlikle yönetilir.',
      metaTitle: 'Konsolosluk Taşımacılığı | Diplomatik Nakliyat Hizmeti',
      metaDescription: 'Konsolosluk ve büyükelçilik taşımacılığında diplomatik protokol, gizlilik standartları ve uluslararası nakliyat deneyimi.',
      benefits: `Diplomatik protokol bilgisi\nUluslararası nakliyat deneyimi\nGizlilik sözleşmesi\nÖzel güvenlik koordinasyonu\nEvrak ve arşiv taşıma\nYabancı dil destekli ekip`,
      content: `<h2>Devlet Mülkü <em>Sıradan Araçla</em> Taşınamaz</h2>
<p>Bir konsolosluğun adres değiştirmesi dışarıdan basit görünür. Oysa içeride diplomatik dokunulmazlık kapsamındaki materyaller, devlet arşivleri ve şifreli iletişim ekipmanları yer alır. <em>Her birinin</em> farklı yasal çerçevesi, farklı taşıma protokolü vardır.</p>
<p>Operasyona dahil olan her kişinin güvenlik soruşturması tamamlanmış olması zorunludur. <strong>Gizlilik taahhütnamesi</strong> noter onaylı şekilde imzalanır; aksi durumda ekip sahaya çıkamaz.</p>
<h2>Diplomatik Taşımada <u>Özel Protokol Gereksinimleri</u></h2>
<ul>
<li>Diplomatik çanta ve poşetlerin dokunulmazlık statüsü korunmalı</li>
<li>Yabancı devlet mülkünün sigortalanma prosedürü ayrıca işlenmeli</li>
<li>Gümrük muafiyeti belgeleri operasyon öncesinde hazırlanmalı</li>
<li>Güvenlik taramasına tabi olmayan materyaller ayrıştırılmalı</li>
<li>Şifreli ekipmanlar yalnızca yetkili personel tarafından taşınmalı</li>
</ul>
<h2>Taşıma Ekibi <strong>Yeterlilik Tablosu</strong></h2>
<table><thead><tr><th>Gereksinim</th><th>Asgari Standart</th><th>Doküman</th></tr></thead><tbody>
<tr><td>Güvenlik soruşturması</td><td>Arşiv araştırması tamamlanmış</td><td>Soruşturma belgesi</td></tr>
<tr><td>Yabancı dil</td><td>B2 düzey İngilizce</td><td>Dil belgesi</td></tr>
<tr><td>Gizlilik taahhüdü</td><td>Yazılı ve noter onaylı</td><td>Taahhütname</td></tr>
<tr><td>Diplomatik protokol</td><td>Sertifikalı eğitim</td><td>Katılım belgesi</td></tr>
</tbody></table>
<h2>Operasyon <em>Koordinasyon Akışı</em></h2>
<ol>
<li>Dışişleri Bakanlığı koordinatörüyle ön görüşme yapılır</li>
<li>Taşıma planı protokol yetkilisine sunulur ve onaylanır</li>
<li>Hassas materyaller ayrıştırılarak mühürlü konteynere yerleştirilir</li>
<li>Nakil boyunca güvenlik eskort eşliği sağlanır</li>
<li>Teslim tutanağı iki taraflı imzalanır; kopyalar saklanır</li>
</ol>
<h2>Uluslararası <strong>Nakliyatta Gümrük Süreci</strong></h2>
<p>Diplomatik malzemeler gümrük muafiyeti kapsamına girse de <u>ATA karnesi ve liste beyanı</u> hazırlanmadan sınır geçilemez. Eksik belge, sevkiyatı günlerce bekleterek operasyonu riske atar.</p>`,
      order: 13,
      active: true,
    },
    {
      name: 'Üniversite Taşımacılığı',
      slug: 'universite-tasimaciligi',
      description: 'Araştırma laboratuvarları, kütüphane koleksiyonları ve idari birimlerin kampüsler arası taşınması; akademik takvime uyum ve hassas ekipman güvencesiyle planlanır.',
      metaTitle: 'Üniversite Taşımacılığı | Kampüs Nakliyat Hizmeti',
      metaDescription: 'Üniversite taşımacılığında laboratuvar cihazları, kütüphane koleksiyonu ve idari birim nakliyatı akademik takvimiyle uyumlu.',
      benefits: `Akademik takvime uyumlu planlama\nLaboratuvar cihazı uzmanlığı\nKütüphane koleksiyonu taşıma\nGeniş kampüs lojistiği\nBütçe dostu fiyatlandırma\nKurum protokolüne uyum`,
      content: `<h2>Spektrometre Kalibrasyonu <em>Yanlış Taşımada</em> Bozulur</h2>
<p>Araştırma ekipmanlarının hassasiyeti, ev eşyasıyla kıyaslanamaz. <em>Elektron mikroskobu</em> milimetre altı titreşime tepki verir; tek bir çarpma aylarca süren kalibrasyonun yeniden yapılmasını zorunlu kılar.</p>
<p>Akademik yatırım bu cihazların içinde somutlaşır. <strong>Yanlış taşınan her alet</strong>, o aleti bekleyen araştırma projesini geri alır.</p>
<h2>Kampüs Birimlerine Göre <u>Taşıma Öncelik Sırası</u></h2>
<ul>
<li>Araştırma laboratuvarları: devam eden proje riski en yüksek</li>
<li>Kütüphane koleksiyonu: nadir eser ve ciltli arşiv öncelikli</li>
<li>Öğrenci hizmetleri: akademik takvime göre zamanlanır</li>
<li>İdari birimler: en esnek; en son taşınır</li>
</ul>
<h2>Laboratuvar Ekipmanı <strong>Ambalaj Standartları</strong></h2>
<table><thead><tr><th>Cihaz Türü</th><th>Ambalaj Yöntemi</th><th>Ek Gereksinim</th></tr></thead><tbody>
<tr><td>Elektron mikroskobu</td><td>Titreşim yalıtımlı özel kasa</td><td>Teknik eleman eşliği</td></tr>
<tr><td>Kimyasal depolama</td><td>UN sertifikalı konteyner</td><td>MSDS belgesi zorunlu</td></tr>
<tr><td>Bilgisayar sunucusu</td><td>Antistatik torba + köpük</td><td>BT uzmanı onayı</td></tr>
<tr><td>Optik cihazlar</td><td>Kilitli alet çantası</td><td>Oryantasyon etiketi</td></tr>
</tbody></table>
<h2><em>Akademik Takvime</em> Göre Dönem Planlaması</h2>
<ol>
<li>Haziran-Eylül arası tercih edilir; sınav dönemi kesinlikle dışında tutulur</li>
<li>Her bölüm sorumlusu akademisyenle ayrı toplantı yapılır</li>
<li>Laboratuvar söküm protokolü yazılı onaya alınır</li>
<li>Nakil sonrası kalibrasyon testleri bölüm teknikeriyle birlikte yapılır</li>
</ol>
<h2>Kütüphane Koleksiyonu <strong>Özel Bakım Gerektiriyor</strong></h2>
<p>Nadir baskılar, el yazmaları ve ciltli arşiv materyalleri nem-ısı kontrolüne duyarlıdır. <u>Asitsiz mukavva kutu</u> ve nem emici silika jel bu materyaller için standart; seçenek değil, zorunluluktur.</p>`,
      order: 14,
      active: true,
    },
    // ─── DİĞER HİZMETLER ───
    {
      name: 'Arşiv Taşımacılığı',
      slug: 'arsiv-tasimaciligi',
      description: 'Kurumsal belgeler, hukuki dosyalar ve tarihi dokümanların taşınması; güvenli zincir, sayım kontrolü ve nem-ısı yönetimiyle arşiv bütünlüğünü korur.',
      metaTitle: 'Arşiv Taşımacılığı | Belge ve Doküman Nakliyat',
      metaDescription: 'Kurumsal arşiv ve hukuki belge taşımacılığında güvenlik zinciri, sayım kontrolü ve nem koruması ile kayıpsız nakliyat.',
      benefits: `Güvenli belge zinciri\nSayım ve envanter kontrolü\nNem ve ısı korumalı ambalaj\nGizlilik taahhütnamesi\nDigital indeksleme desteği\nAcil erişim protokolü`,
      content: `<h2>Kayıp Belge <em>Bazen Yıllık Davayı</em> Duraksatır</h2>
<p>Bir mahkeme dosyası taşıma sırasında kaybedilirse o davayla ilgili yıllarca süren süreç sekteye uğrar. <em>Muhasebe kayıtlarının nem alması</em> ise ağır para cezalarına dönüşebilir. Arşiv taşımacılığı bu yüzden nakliyat değil; belge güvenliği yönetimidir.</p>
<p>Bir kutu bile sayımdan düşse sonuç büyük olabilir. <strong>Barkodlu sistem</strong> her kutuyu takip eder; kayıp mümkün değil, kaybın tespiti anında olur.</p>
<h2>Arşiv Materyali <u>Koruma Standartları</u></h2>
<ul>
<li>Asitsiz mukavva kutu; asitli ambalaj belgeyi yıllar içinde tahrip eder</li>
<li>Her kutuya nem emici silika jel eklenir; çift kat nemden korunur</li>
<li>Araç içi sıcaklık 15-20°C aralığında tutulur</li>
<li>Her kutu barkodlu etiketle numaralandırılır</li>
<li>Dijital envanter taşımadan önce tamamlanır; sonradan güncellenmez</li>
</ul>
<h2>Belge Türlerine Göre <strong>Risk Sınıflandırması</strong></h2>
<table><thead><tr><th>Belge Türü</th><th>Risk Seviyesi</th><th>Özel Önlem</th></tr></thead><tbody>
<tr><td>Hukuki dosyalar</td><td>Kritik</td><td>Mühürlü kilitli kasa</td></tr>
<tr><td>Muhasebe kayıtları</td><td>Yüksek</td><td>Çift sayım tutanağı</td></tr>
<tr><td>Tarihi belgeler</td><td>Çok yüksek</td><td>Arşivci gözetiminde taşıma</td></tr>
<tr><td>Personel dosyaları</td><td>Yüksek</td><td>Gizlilik taahhütnameli ekip</td></tr>
</tbody></table>
<h2>Taşıma Sonrası <em>Yeniden Yerleştirme</em> Protokolü</h2>
<ol>
<li>Yeni arşiv alanının nem ve ısı ölçümleri yapılır; uygun değilse müdahale edilir</li>
<li>Kutular barkod sırasına göre rafa yerleştirilir; karışıklık sıfırlanır</li>
<li>Dijital envanter fiziksel sayımla birebir doğrulanır</li>
<li>Erişim yetkisi listesi güncellenir ve yetkiliye teslim edilir</li>
</ol>
<h2>İlk 24 Saat <strong>Neden Kritik?</strong></h2>
<p>Taşıma tamamlandıktan sonra yapılan ilk sayım, olası sorunları telafi edilebilir kılar. <u>24 saat geçtikten sonra</u> yapılan bildirimler sigorta kapsamı dışına düşebilir; bu süreyi asla kaçırmayın.</p>`,
      order: 15,
      active: true,
    },
    {
      name: 'Müze Taşımacılığı',
      slug: 'muze-tasimaciligi',
      description: 'Sanat eserleri, arkeolojik buluntular ve tarihi objeler; iklim kontrollü araçlar, özel konteynerlere ve müzeci gözetiminde hareket eder.',
      metaTitle: 'Müze Taşımacılığı | Sanat Eseri Nakliyat Hizmeti',
      metaDescription: 'Müze ve galeri taşımacılığında iklim kontrollü araç, özel konteyner ve sigortalı sanat eseri nakliyatı.',
      benefits: `İklim kontrollü araç\nÖzel sanat eseri konteyneri\nMüzeci ve küratör koordinasyonu\nUluslararası nakliyat deneyimi\nSanat sigortası\nVibrasyon izolasyonlu kasa`,
      content: `<h2>2.000 Yıllık Amforada <em>Gözle Görülmeyen</em> Çatlak</h2>
<p>Titreşim seramiği mikro düzeyde çatlatır. Gözle görülmez; ancak X-ray analizinde ortaya çıkar ve eserin değerini yüzde elliye indirir. <em>Müze taşımacılığı</em> bu yüzden yalnızca nakliyatçının değil, küratörün de içinde olduğu bir süreçtir.</p>
<p>İklim koşulları da en az titreşim kadar kritiktir. <strong>Kâğıt ve tekstil eserler</strong> rutubet farkına, ahşap heykeller sıcaklık dalgalanmasına duyarlıdır. Her eser kendi mikro-iklimiyle seyahat etmelidir.</p>
<h2>Eser Kategorilerine Göre <u>Ambalaj Yöntemi</u></h2>
<ul>
<li>Tuval tablolar: asitsiz tampon + kırımsız özel sandık + köpük kenar desteği</li>
<li>Heykel ve bronz: köpük kalıp + ahşap kasalama + titreşim izolasyonu</li>
<li>Seramik ve porselen: çift katlı balonlu naylon + çoklu tampon</li>
<li>Kâğıt ve tekstil: asitsiz doku kâğıdı + nem kontrollü kapaklı kap</li>
</ul>
<h2>İklim Kontrolü <strong>Teknik Parametreler</strong></h2>
<table><thead><tr><th>Parametre</th><th>Hedef Değer</th><th>Sapma Toleransı</th><th>İzleme Aracı</th></tr></thead><tbody>
<tr><td>Sıcaklık</td><td>18–22°C</td><td>±1°C</td><td>Datalogger</td></tr>
<tr><td>Bağıl nem</td><td>%45–55</td><td>±5%</td><td>Hygrometer</td></tr>
<tr><td>Titreşim</td><td>&lt;0,1 g</td><td>Sıfır tolerans</td><td>Shockwatch</td></tr>
</tbody></table>
<h2>Uluslararası Eser <em>Transferi Protokolü</em></h2>
<ol>
<li>Kondisyon raporu küratör tarafından yükleme öncesi hazırlanır</li>
<li>Gümrük ATA karnesi ve kültürel miras belgesi operasyon öncesinde düzenlenir</li>
<li>Sigorta poliçesi rayiç değer; değer düşüklüğü sigortası ayrıca eklenir</li>
<li>Teslimatta karşı kurumun küratörü imzalı kondisyon raporuyla teslim alır</li>
</ol>
<h2>Yalnızca Ulaşmak <strong>Yeterli Değil</strong></h2>
<p>Eserin gideceği yere hasarsız ulaşması tek kriter değildir. <u>Aynı nem ve sıcaklık koşullarında</u> ulaşması gerekir. Fark bu iki cümlededir ve müze taşımacılığını tüm diğer nakliyat türlerinden ayırt eden budur.</p>`,
      order: 16,
      active: true,
    },
    {
      name: 'Bankamatik Taşımacılığı',
      slug: 'bankamatik-tasimaciligi',
      description: 'ATM cihazlarının şube yenileme, konum değişikliği veya servis süreçlerinde taşınması; ağır yük ekipmanı, güvenlik protokolü ve anında devreye alma planıyla teslim edilir.',
      metaTitle: 'Bankamatik Taşımacılığı | ATM Nakliyat Hizmeti',
      metaDescription: 'Bankamatik ve ATM taşımacılığında güvenlik protokolü, ağır yük ekipmanı ve yerinde devreye alma hizmeti.',
      benefits: `Güvenlik eskortlu taşıma\nATM vinç ve forklift\nAnında devreye alma\nHafta sonu operasyon\nSigortalı taşıma\nBanka koordinatörü ile çalışma`,
      content: `<h2>500 Kilogram <em>Elektronik Değil</em>, Güvenlik Sorunudur</h2>
<p>Bankamatik kabini elektronik bir cihazdan çok daha fazlasıdır. Ağır, darbe hassasiyeti yüksek ve içinde nakit barındıran bir yapıdır. <em>Yanlış kaldırma ya da devrilme</em> hem mekanik arızaya hem ciddi güvenlik açığına yol açar.</p>
<p>Bu yüzden her hareket yetkili imzasına dayalı yürütülür. <strong>Kamera kaydı kesiksizdir</strong>; taşıma tamamlanana kadar güvenlik personeli sahadaki konumunu korur.</p>
<h2>ATM Taşıma <u>Ekipman Gereksinimleri</u></h2>
<ul>
<li>Sanayi tipi el arabası; minimum 600 kg yük kapasiteli</li>
<li>Özel ATM kaldırma aparatı; devrilme kilidi entegre</li>
<li>Çift katlı köpük tamponlu koruyucu ambalaj</li>
<li>Güvenlik kilitli, kapalı araç kasası</li>
<li>En az iki güvenlik personeli; biri giriş biri çıkışı izler</li>
</ul>
<h2>Operasyon Boyunca <strong>Güvenlik Kontrol Noktaları</strong></h2>
<table><thead><tr><th>Aşama</th><th>Kontrol Edilen</th><th>Sorumlu</th></tr></thead><tbody>
<tr><td>Söküm öncesi</td><td>Nakit çekildi mi; banka onayı var mı</td><td>Banka yetkilisi</td></tr>
<tr><td>Yükleme</td><td>Kamera kaydı aktif mi</td><td>Güvenlik personeli</td></tr>
<tr><td>Nakil</td><td>GPS takibi + kamera izleme</td><td>Nakliye ekibi</td></tr>
<tr><td>Teslim</td><td>İki yetkili imzası + sayım tutanağı</td><td>Banka + nakliye</td></tr>
</tbody></table>
<h2>Yeni Konumda <em>Devreye Alma</em> Süreci</h2>
<ol>
<li>ATM zemine sabitlenir; cıvata momentleri teknik şemaya göre kontrol edilir</li>
<li>Ağ bağlantısı kurulur; iletişim testi banka IT birimi ile yapılır</li>
<li>Kart okuyucu ve para dispenseri test çekimiyle doğrulanır</li>
<li>Güvenlik kamerasının açısı ayarlanır ve kayıt test edilir</li>
<li>Banka teknik birimi yazılı onay verene kadar cihaz devreye alınmaz</li>
</ol>
<h2>Operasyon Saati <strong>Neden Gizli Tutulur?</strong></h2>
<p>ATM taşıma saati ve güzergâhı yalnızca ilgili yetkililere bildirilir. <u>Üçüncü taraflarla paylaşılmaz</u>; bu gizlilik standart değil, zorunlu güvenlik protokolünün bir parçasıdır.</p>`,
      order: 17,
      active: true,
    },
    {
      name: 'Para Kasası Taşımacılığı',
      slug: 'para-kasasi-tasimaciligi',
      description: 'Çelik kasalar, yangın güvenlikli dolaplar ve değerli eşya muhafazalarının taşınması; ağır yük tekniği, güvenlik zinciri ve titiz teslimat protokolüyle gerçekleşir.',
      metaTitle: 'Para Kasası Taşımacılığı | Güvenli Kasa Nakliyat',
      metaDescription: 'Para kasası ve çelik dolap taşımacılığında güvenlik eskort, forklift ve anlık teslimat onayı ile güvenli nakliyat.',
      benefits: `Güvenlik eskortlu taşıma\nForklift ve özel kaldırma\nAnlık teslimat onayı\nİki yetkili imzası\nGizli rota planlaması\nSigortalı kasa nakliyatı`,
      content: `<h2>800 Kilogram <em>Zorluğu Ağırlıkta</em> Değil, Güvencede</h2>
<p>Bir çelik kasa ağır bir eşyadan çok daha fazlasıdır. İçindekiler bilinmez, bilinmemelidir de. <em>Kasanın hangi saatte, hangi araçla ve kimler tarafından taşındığı</em> en baştan kayıt altına alınır. Güvenlik zinciri bir an bile kırılmaz.</p>
<p>Söküm sırasında kamera kaydı başlar ve teslimat tutanağı imzalanana kadar devam eder. <strong>Hiçbir adım</strong> yetkili olmadan atılamaz.</p>
<h2>Kasa Türleri ve <u>Taşıma Gereksinimleri</u></h2>
<ul>
<li>Duvar kasası: ankraj sökümü + özel kaldırma aparatı</li>
<li>Yer kasası: beton zemin kesimi gerekebilir + vinç</li>
<li>Yangın güvenlikli dolap: köpük ambalaj + darbeye karşı kılıflama</li>
<li>Yüksek değerli müzayede kasası: değer beyanlı sigorta zorunlu</li>
</ul>
<h2>Operasyon Boyunca <strong>Güvenlik Protokolü</strong></h2>
<table><thead><tr><th>Aşama</th><th>Güvenlik Önlemi</th><th>Belge</th></tr></thead><tbody>
<tr><td>Taşıma öncesi</td><td>Kimlik doğrulama + yetki belgesi ibrazı</td><td>Yetki formu</td></tr>
<tr><td>Söküm</td><td>Kamera kaydı başlatılır</td><td>Kayıt tutanağı</td></tr>
<tr><td>Nakil</td><td>Gizli rota + güvenlik eskortlu araç</td><td>GPS kaydı</td></tr>
<tr><td>Yerleştirme</td><td>Müşteri ve nakliye çift imzası</td><td>Teslim tutanağı</td></tr>
</tbody></table>
<h2>Kurulum Sonrası <em>Test ve Onay</em> Adımları</h2>
<ol>
<li>Kasa zemine veya duvara teknik şemaya göre monte edilir</li>
<li>Tüm kilit mekanizmaları yüklü ve boş koşullarda test edilir</li>
<li>Kombinasyon sıfırlama yetkisi yalnızca müşteriye devredilir</li>
<li>Nakliye ekibinin sistem bilgisi yoktur; bu gizlilik kasıtlıdır</li>
<li>Teslimat tutanağı çift imzayla kapatılır; bir kopyası müşteride kalır</li>
</ol>
<h2>Operasyon Saati <strong>Neden Paylaşılmaz?</strong></h2>
<p>Kasa taşıma saati ve güzergâhı yalnızca birinci derece ilgililere bildirilir. <u>Üçüncü taraflarla paylaşım</u> yasaktır; bu kural protokolün değil, güvenlik anlayışının gereğidir.</p>`,
      order: 18,
      active: true,
    },
    // ─── EK HİZMETLER ───
    {
      name: 'Ücretsiz Ekspertiz',
      slug: 'ucretsiz-ekspertiz',
      description: 'Taşınma süreciniz henüz başlamadan, uzman gözü evinizi inceler. Eşya hacmi, asansör boyutu ve merdiven açısı yerinde ölçülür; size şeffaf ve sabit bir teklif sunulur.',
      metaTitle: 'Ücretsiz Ekspertiz | Yerinde Nakliyat Fiyat Tespiti',
      metaDescription: 'Ücretsiz ekspertiz hizmetiyle taşınma maliyetinizi önceden netleştirin. Yerinde ölçüm, yazılı teklif ve sürpriz ek ücret yok.',
      benefits: `Yerinde ücretsiz ölçüm\nYazılı ve sabit fiyat teklifi\nSürpriz ek ücret yok\n24 saat içinde teklif teslimi\nTaşıma planı ön görüşme\nUzman keşif ekibi`,
      content: `<h2>Fiyat Söylenmeden Önce <em>Eviniz Görülmeli</em></h2>
<p>Taşınma bütçesi çoğu zaman telefon başında netleşir. Oysa asansör ölçüsü, merdiven açısı ve kırılgan mobilyaların hacmi hiçbir sözden tam okunamaz. <em>Ekspertiz ziyareti</em> bu belirsizliği baştan kapatır.</p>
<p>Uzman ekip kapıdan girer; her odayı tek tek ölçer, notunu kâğıda geçirir. <strong>Ortaya çıkan teklif değişmez</strong> — taşıma günü de aynı rakam geçerlidir.</p>
<h2>Ziyarette <u>İncelenen Her Nokta</u></h2>
<ul>
<li>Eşya türü, adet ve tahmini toplam hacim</li>
<li>Asansör iç boyutu ve azami yük kapasitesi</li>
<li>Bina giriş kapısı genişliği ile koridor dönüş açısı</li>
<li>Cam, ayna ve tablo gibi kırılabilir parçalar ayrıca not edilir</li>
<li>Söküm gerektiren mobilyalar ve gerekli alet listesi</li>
<li>Yeni adreste montaj gerektirecek ürünler</li>
</ul>
<h2>Teklif Yöntemi <strong>Doğruluk Karşılaştırması</strong></h2>
<table><thead><tr><th>Yöntem</th><th>Fiyat Doğruluğu</th><th>Sürpriz Ek Ücret</th><th>Yazılı Garanti</th></tr></thead><tbody>
<tr><td>Telefon tahmini</td><td>Düşük</td><td>Yüksek risk</td><td>Hayır</td></tr>
<tr><td>Fotoğraf incelemesi</td><td>Orta</td><td>Orta risk</td><td>Kısmi</td></tr>
<tr><td>Yerinde ekspertiz</td><td>Çok yüksek</td><td>Sıfır</td><td>Evet</td></tr>
</tbody></table>
<h2><em>Randevu Günü</em> Hazırlığı</h2>
<ol>
<li>Tüm oda kapılarını açık bırakın; uzman her köşeyi görmelidir</li>
<li>Depo, balkon ve bodrum eşyalarını önceden listeleyin</li>
<li>Taşımayı düşünmediğiniz parçaları belirtin veya ayırın</li>
<li>Taşınma tarihi tercihinizi ve yedek günleri hazırlayın</li>
<li>Aklınızdaki soruları yazılı not alın; uzman yanıtlar</li>
</ol>
<h2>Teklifte <strong>Hangi Kalemler Yer Alır?</strong></h2>
<p>Ziyaret tamamlandıktan sonra <u>24 saat içinde</u> yazılı teklif iletilir. Araç tipi, ekip büyüklüğü, çalışma süresi ve her hizmet kalemi ayrı satırda gösterilir. Hiçbir rakam açıklanmadan geçilmez.</p>
<p>İmzalanan teklife sonradan ek ücret yansıtılamaz. <em>Bu güvence</em>, ekspertiz yapan firmayla yapmayan firma arasındaki en somut farkı oluşturur.</p>`,
      order: 19,
      active: true,
    },
    {
      name: 'Sözleşmeli Evden Eve Nakliyat',
      slug: 'sozlesmeli-evden-eve-nakliyat',
      description: 'Taşıma günü yaşanan fiyat baskısı, kayıp eşya iddiaları ve sorumluluk tartışmalarının tek kalkanı imzalı bir sözleşmedir. Yazılı taahhüt olmadan yapılan nakliyat, her iki taraf için de belirsizlik demektir.',
      metaTitle: 'Sözleşmeli Evden Eve Nakliyat | Yasal Güvenceli Taşıma',
      metaDescription: 'Sözleşmeli nakliyatta fiyat garantisi, sorumluluk kapsamı ve tazminat şartları yazılı olarak belirlenir. Hukuki güvence ile taşının.',
      benefits: `Yazılı fiyat garantisi\nHukuki sorumluluk kapsamı\nTazminat şartları netleştirilmiş\nİptal ve erteleme koşulları\nEşya listesi sözleşmeye eklenir\nNoter onaylı seçenek`,
      content: `<h2>Sözlü Anlaşma <em>Taşıma Günü</em> Geçersizdir</h2>
<p>Araç yola çıktıktan sonra ortaya çıkan itirazlar, sözlü anlaşmalarla hiçbir mercide geçer sayılmaz. Kayıp ya da hasarlı eşya için hukuki yola başvurmak istediğinizde <strong>elinizde yazılı belge olmalıdır.</strong></p>
<p>Türkiye'de her yıl binlerce nakliyat uyuşmazlığı tüketici mahkemelerine taşınır. <em>Neredeyse tamamı</em> imzasız süreçlerden doğar. Yazılı sözleşme bu tartışmayı daha başlamadan bitirir.</p>
<h2>Sözleşmenin <u>Olmazsa Olmaz Maddeleri</u></h2>
<ul>
<li>Taşıma tarihi, başlangıç saati ve teslim penceresi açıkça yazılmış</li>
<li>Alım ve teslim adresi tam adresle belirtilmiş</li>
<li>Toplam ücret ve ödeme yöntemi net rakamlarla yer almış</li>
<li>Hasar durumunda sorumluluk sınırı tanımlanmış</li>
<li>İptal ve erteleme koşulları ayrı maddede açıklanmış</li>
<li>Taşınan eşya listesi ek belge olarak sözleşmeye eklenmiş</li>
</ul>
<h2>Standart ve <strong>Güçlendirilmiş Sözleşme</strong> Farkı</h2>
<table><thead><tr><th>Kapsam</th><th>Standart</th><th>Güçlendirilmiş</th></tr></thead><tbody>
<tr><td>Fiyat garantisi</td><td>Var</td><td>Var + ek ücret yasağı</td></tr>
<tr><td>Hasar tazminatı</td><td>Sınırlı</td><td>Tam rayiç değer</td></tr>
<tr><td>Eşya listesi</td><td>Genel</td><td>Kalemli ve çift imzalı</td></tr>
<tr><td>İptal hakkı</td><td>48 saat</td><td>72 saat + iade garantisi</td></tr>
</tbody></table>
<h2>İmzalamadan Önce <em>Kontrol Listesi</em></h2>
<ol>
<li>Firmanın vergi numarası ve ticari adresi sözleşmede yer alıyor mu?</li>
<li>Sigorta poliçe numarası açıkça yazıyor mu?</li>
<li>Ek hizmet ücretleri tek tek listelenmiş mi?</li>
<li>Teslimatta hasarın nasıl raporlanacağı yazılı mı?</li>
<li>Her sayfayı okuyun; imzanız o bilgiden haberdar olduğunuzu teyit eder</li>
</ol>
<h2>Anlaşmazlık Olursa <strong>İlk 48 Saat</strong></h2>
<p>Sözleşmeli bir nakliyatta hasar yaşandığında fotoğraf ve tutanak alınmalıdır. <u>Firma yazılı olarak</u> bildirilmeli; tazminat talebi bu belgelere dayanarak açılmalıdır. 48 saati geçiren bildirimler hukuki geçerliliğini yitirebilir.</p>
<p>Tüketici Hakem Heyeti'ne başvuru için alt sınır her yıl güncellenir. Daha yüksek talepler asliye hukuk mahkemesine taşınır. <em>Sözleşmesiz</em> hiçbir davada mahkeme firmanın sorumluluğunu otomatik kabul etmez.</p>`,
      order: 20,
      active: true,
    },
    {
      name: 'Sigortalı Evden Eve Nakliyat',
      slug: 'sigortali-evden-eve-nakliyat',
      description: 'Taşıma sırasında kırılan, çizilen ya da kaybolan bir eşya için tazminat alabilmek, ancak taşıma sigortası ile mümkündür. Poliçesiz yapılan nakliyat, tüm riski size bırakır.',
      metaTitle: 'Sigortalı Evden Eve Nakliyat | Taşıma Sigortası Kapsamı',
      metaDescription: 'Sigortalı nakliyatta kırılma, kayıp ve hasar tazminatı güvencesi. Poliçe kapsamı, hasar bildirimi ve tazminat süreci hakkında bilgi alın.',
      benefits: `Yükleme anından teslimata kadar sigorta\nKırılma ve kayıp tazminatı\nRayiç değer üzerinden poliçe\n48 saat içinde hasar bildirimi\nTazminat 15 iş günü\nYazılı poliçe teslimi`,
      content: `<h2>Kırılan Vazo <em>Sadece Para Değil</em>, Güvencesizliktir</h2>
<p>Taşıma sırasında zarar gören bir eşya için tazminat alabilmek, ancak geçerli bir poliçeyle mümkündür. <em>Poliçesiz nakliyatta</em> tüm sorumluluk size kalır; firma kusuru ispat edilemezse karşılık alamazsınız.</p>
<p>Öte yandan her sigorta aynı değildir. <strong>Zorunlu sorumluluk sigortası</strong> yalnızca firmanın kusurunu karşılar. Tam nakliyat poliçesi ise kaza, sel ve yangın gibi dış riskleri de içerir.</p>
<h2>Sigorta Türleri <u>Karşılaştırması</u></h2>
<table><thead><tr><th>Sigorta Türü</th><th>Kapsam</th><th>Tazminat Tabanı</th><th>Ekstra Maliyet</th></tr></thead><tbody>
<tr><td>Zorunlu sorumluluk</td><td>Firma kusuru</td><td>Yasal sınır</td><td>Dahil</td></tr>
<tr><td>Tam nakliyat sigortası</td><td>Her türlü hasar</td><td>Rayiç değer</td><td>%0,5–1,5</td></tr>
<tr><td>Değer beyan sigortası</td><td>Beyan edilen miktar</td><td>Beyan değeri</td><td>Değişken</td></tr>
</tbody></table>
<h2>Poliçe Almadan Önce <strong>Sorulacaklar</strong></h2>
<ul>
<li>Antika ve sanat eserleri ayrıca tanımlanmış mı?</li>
<li>Elektronik cihazlar için iç hasar teminatı var mı?</li>
<li>Reasürans şirketinin adı poliçede açıkça yazıyor mu?</li>
<li>Depolama süresi kapsama dahil mi?</li>
<li>Hasar bildirimi için süre sınırı kaç gün?</li>
</ul>
<h2>Hasar Durumunda <em>İzlenecek Adımlar</em></h2>
<ol>
<li>Teslim anında tüm eşyaları ekip önünde tek tek kontrol edin</li>
<li>Her hasarı fotoğrafla belgeleyin; zaman damgasına dikkat edin</li>
<li>Taşıma firmasına 48 saat içinde yazılı bildirim yapın</li>
<li>Sigorta şirketine hasar ihbar formu doldurun</li>
<li>Tazminat değerleme için eksper randevusu talep edin</li>
</ol>
<h2>Tazminat Sürecinde <strong>Kritik Süreler</strong></h2>
<p>Hasar bildirimi 48 saati geçerse tazminat hakkı önemli ölçüde zayıflar. <u>Eksper değerleme</u> genellikle 5 iş günü içinde tamamlanır. Ödeme kararı ise poliçeye göre 15 ile 30 iş günü arasında çıkar.</p>
<p>Yüksek değerli eşyalar için fatura veya bağımsız değerleme raporu önceden hazırlanmalıdır. <em>Bu belgeler</em> süreci hızlandırır ve itiraz sürecini gereksiz kılar.</p>`,
      order: 21,
      active: true,
    },
    {
      name: 'Asansörlü Evden Eve Nakliyat',
      slug: 'asansorlu-evden-eve-nakliyat',
      description: 'Vinç asansör sistemi, merdivenden çıkarılması imkânsız olan büyük mobilyaları dışarıdan kaldırarak taşır. Bina içi asansörü yetersiz kalan her taşıma için standart çözüm haline gelmiştir.',
      metaTitle: 'Asansörlü Evden Eve Nakliyat | Vinç Asansör ile Taşıma',
      metaDescription: 'Asansörlü nakliyatta vinç asansör sistemi, büyük mobilyaları hızlı ve hasarsız taşır. Rezervasyon ve koordinasyon dahildir.',
      benefits: `Vinç asansör sistemi\nMerdiven hasarı riski sıfır\nBüyük mobilya çözümü\nSite yönetimi koordinasyonu\nHızlı yükleme-tahliye\nSigortalı operasyon`,
      content: `<h2>Koltuk Asansöre <em>Sığmıyorsa</em> Vinç Devreye Girer</h2>
<p>Standart bir bina asansörünün iç ölçüsü 100 × 130 santimetre civarındadır. Üçlü köşe koltuk ya da king-size baza bu alana sığmaz. <em>Vinç asansör</em> bu durumda pencere veya balkon önünde konumlanır; eşyayı dışarıdan kaldırır.</p>
<p>Kurulum göründüğü kadar basit değildir. <strong>Araç parkı, vinç açısı ve pencere erişimi</strong> önceden hesaplanmazsa operasyon gün içinde durabilir.</p>
<h2>Vinç Asansör Gerektiren <u>Eşya Türleri</u></h2>
<ul>
<li>L ve U köşe koltuk takımları; bina asansörüne sığmayan en yaygın parça</li>
<li>King-size yatak kafalığı ve baza çerçeveleri</li>
<li>Piyano ve org gibi ağır müzik aletleri</li>
<li>Özel ölçülü dolap sistemleri ve büyük vitrinler</li>
<li>Jakuzi, küvet ve ankastre mutfak üniteleri</li>
</ul>
<h2>Taşıma Yöntemi <strong>Karşılaştırması</strong></h2>
<table><thead><tr><th>Yöntem</th><th>Büyük Eşya</th><th>Merdiven Hasarı</th><th>Ortalama Süre</th></tr></thead><tbody>
<tr><td>Elle merdiven</td><td>Sınırlı</td><td>Yüksek risk</td><td>Uzun</td></tr>
<tr><td>Bina asansörü</td><td>Orta</td><td>Orta risk</td><td>Orta</td></tr>
<tr><td>Vinç asansör</td><td>Tam çözüm</td><td>Sıfır</td><td>Kısa</td></tr>
</tbody></table>
<h2>Site Yönetimi <em>Koordinasyonu</em></h2>
<ol>
<li>Taşınma tarihi belirlenir belirlenmez site yönetimine bildirim yapılır</li>
<li>Vinç asansör kullanım saati yöneticiyle önceden netleştirilir</li>
<li>Araç ve vinç için park alanı en az bir gün önceden ayrılır</li>
<li>Komşular bilgilendirilir; giriş-çıkış geçici olarak etkilenebilir</li>
<li>Bina sigortasının vinç kullanımını kapsayıp kapsamadığı sorulur</li>
</ol>
<h2>Operasyon Günü <strong>Nasıl İlerler?</strong></h2>
<p>Ekip sabahın erken saatinde gelir; vinç konumunu ayarlar. Küçük parçalar bina asansörüyle, büyük parçalar dışarıdan kaldırılır. <u>Her parça askıya alınmadan önce</u> bağlantı sistemi kontrol edilir.</p>
<p>Tüm operasyon iki saatte tamamlanabilir. <em>Merdiven taşımasının</em> yarısı kadar sürer; merdiven ve duvarı hasarsız terk eder.</p>`,
      order: 22,
      active: true,
    },
    {
      name: 'Ambalaj ve Paketleme',
      slug: 'ambalaj-ve-paketleme',
      description: 'Taşıma sırasındaki hasarların yüzde sekseninden fazlası hatalı paketlemeden kaynaklanır. Doğru malzeme, doğru teknik ve doğru sıra uygulandığında eşyanız bitmemiş gibi çıkar.',
      metaTitle: 'Ambalaj ve Paketleme Hizmeti | Profesyonel Nakliyat Ambalajı',
      metaDescription: 'Nakliyat ambalajında çift kat streç film, balonlu naylon ve tahta kasa ile kırılmaz paketleme hizmeti. Tüm eşya türleri için özel çözüm.',
      benefits: `Eşyaya özel ambalaj tekniği\nÇift kat streç film\nBalonlu naylon ve köpük\nTahta kasa özel üretim\nVakumlu torba seçeneği\nAmbalaj malzemesi dahil`,
      content: `<h2>Hasar Başlamadan <em>Ambalajda</em> Önlenir</h2>
<p>Taşıma hasarlarının büyük bölümü yolda değil, yükleme sırasında başlar. Doğru sabitlenmemiş bir vazo ilk frende sürüklenir. <em>Kırılma anı</em> çoğunlukla rampadan çıkarken yaşanır; araç henüz hareket etmemiştir.</p>
<p>Malzeme kalitesi, katman sayısı ve eşyalar arası dolgu yoğunluğu belirleyicidir. <strong>Gazete kâğıdı ile balonlu naylon</strong> arasındaki fark, taşınma sonrası açılan ilk kutuda ortaya çıkar.</p>
<h2>Eşyaya Göre <u>Doğru Ambalaj Malzemesi</u></h2>
<table><thead><tr><th>Eşya</th><th>İlk Katman</th><th>İkinci Katman</th><th>Dış Koruma</th></tr></thead><tbody>
<tr><td>Cam ve porselen</td><td>Köpük folyosu</td><td>Balonlu naylon</td><td>Tahta kasa</td></tr>
<tr><td>Mobilya yüzeyi</td><td>Tekstil battaniye</td><td>Çift kat streç</td><td>Köşe koruyucu</td></tr>
<tr><td>Elektronik cihaz</td><td>Antistatik torba</td><td>Köpük tampon</td><td>Sert karton</td></tr>
<tr><td>Tekstil ürünleri</td><td>—</td><td>Vakumlu torba</td><td>Dayanıklı naylon çuval</td></tr>
<tr><td>Kitap ve evrak</td><td>Silika jel</td><td>Şeffaf naylon</td><td>Asitsiz mukavva</td></tr>
</tbody></table>
<h2>Kendi Paketleme mi, <strong>Uzman Ambalaj mı?</strong></h2>
<ul>
<li>Evde bulunan malzeme çoğunlukla darbeye dayanıksız kalır</li>
<li>Yetersiz katman sayısı kırılgan parçaları koruyamaz</li>
<li>Yanlış etiketleme taşıma sırasında yönlendirme hatasına yol açar</li>
<li>Uzman ambalajda hasar sigortası poliçeye dahil edilebilir</li>
<li>Profesyonel ekip bir evi kendi başınıza yapacağınız sürenin üçte birinde paketler</li>
</ul>
<h2>Paketleme <em>Sırasının</em> Kuralları</h2>
<ol>
<li>Ağır ve sert eşyalar kutu tabanına yerleştirilir; zemin katmanı oluşturur</li>
<li>Hafif ve kırılgan parçalar üste konur; alt baskıdan korunur</li>
<li>Boşluklar köpük topuyla kapatılır; hareket engellenir</li>
<li>Her kutu içeriğini belirten etiketle kapanır</li>
<li>Kırılacak ürünlerin kutusu kırmızı bant ile ayrıştırılır</li>
</ol>
<h2>Yeni Evde <strong>Ambalaj Açma Sırası</strong></h2>
<p>Kutuları rastgele açmak yerine bir sıra belirleyin. Önce <u>yatak odası kurulur</u>; geceyi geçirecek alan elde edilir. Ardından mutfak, en son oturma odası açılır.</p>
<p>Tüm kutular açılmadan ambalaj malzemelerini dışarı çıkarmayın. <em>Kırık parçalar</em> gazete katları arasında gizli kalabilir; çöpe atılan ambalaj, olası kayıp iddiasını ispatsız bırakır.</p>`,
      order: 23,
      active: true,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    })
    console.log(`✓ ${service.name} eklendi`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
