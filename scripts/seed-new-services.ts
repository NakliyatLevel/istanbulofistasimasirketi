import { config } from 'dotenv'
import { PrismaClient } from '@prisma/client'

config({ path: '.env.local' })

const prisma = new PrismaClient()
const brand = 'İstanbul Ofis Taşıma Şirketi'

type TableRow = {
  label: string
  detail: string
}

type ServiceSeed = {
  name: string
  slug: string
  description: string
  order: number
  showOnHomepage: boolean
  icon: string
  metaTitle: string
  metaDescription: string
  benefits: string[]
  paragraphs: string[]
  listItems: string[]
  tableRows: TableRow[]
}

const services: ServiceSeed[] = [
  {
    name: 'Ofis Taşımacılığı',
    slug: 'ofis-tasimaciligi',
    description: 'Büyük ofis katlarını üretkenliği bozmadan taşıyan proje yönetimi.',
    order: 1,
    showOnHomepage: true,
    icon: 'Briefcase',
    metaTitle: 'Ofis Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Kurumsal ofis taşımacılığında proje yönetimi, BT koruması ve zamanında teslim.',
    benefits: ['Proje yöneticisi eşliğinde planlama', 'BT ekipmanı için statik koruma', 'Hafta sonu ve gece operasyonu'],
    paragraphs: [
      'Yoğun kat planlarına sahip şirket merkezlerinde taşınma günü yalnızca kolilerin hareketi değil, aynı zamanda üretkenliğin korunması anlamına gelir. Proje yöneticilerimiz her departmana özel zaman çizelgesi çıkarır, BT ekiplerinin kesintisiz çalışması için kablo etiketlerinden server rafı boşaltma sırasına kadar tüm ayrıntıları önceden doğrular. Modüler kasa sistemleriyle kahve köşesinden toplantı odasına kadar tüm mobilyalar sökülür, numaralanır ve yeniden kurulum için fotoğraflanır. Rezerv edilen yük asansörleri ile saha güvenliği için kurulan geçici bariyerler personelin kargaşa yaşamamasını sağlar. Böylece çalışanlar pazartesi sabahı masalarına oturduklarında hiçbir gecikme yaşamaz.',
      'Operasyonun ortasında İstanbul Ofis Taşıma Şirketi ekibi, erişim izinlerinden yük asansörü rezervasyonlarına kadar tüm paydaşlarla iletişimi canlı tutar. Kat bazlı teslimat raporları, hangi kutunun hangi personele ait olduğunu gösteren dijital envanterle eşleşir; böylece güvenlik kartları, arşiv kutuları ve ekran panelleri kaybolmaz. Riskli ekipman için titreşim ölçerler kullanılır, tüm süreci belgeleyen fotoğraf setleri yönetim kurullarına gönderilir ve sözleşme kapsamındaki hizmet seviyesi anlaşması eksiksiz şekilde raporlanır. Ayrıca operasyon merkezinden sahaya aktarılan anlık bildirimler sürpriz ziyaretler veya denetim taleplerine karşı hazırlıklı kalmamızı sağlar.'
    ],
    listItems: [
      'Departman bazlı zaman çizelgesi ve sorumlu matrisi',
      'BT altyapısı için etiketli söküm ve korumalı kasalama',
      'Yük asansörü ve erişim izinleri için canlı koordinasyon'
    ],
    tableRows: [
      { label: 'Keşif', detail: 'Kat planı incelemesi, kablo rotalarının ve yük asansörü kapasitesinin ölçülmesi' },
      { label: 'Paketleme', detail: 'Numaralı kasa sistemi ve hassas ekipman için titreşim izleme etiketleri' },
      { label: 'Kurulum', detail: 'Oda bazlı teslim raporu ve fotoğrafla doğrulanan masa düzeni' }
    ]
  },
  {
    name: 'Parça Eşya Taşımacılığı',
    slug: 'parca-esya-tasimaciligi',
    description: 'Küçük hacimli gönderiler için parsiyel taşıma ve hacim bazlı fiyatlama.',
    order: 2,
    showOnHomepage: true,
    icon: 'Package',
    metaTitle: 'Parça Eşya Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Parsiyel taşımada hacim bazlı fiyat, barkodlu mühür ve canlı takip.',
    benefits: ['Kullandığın kadar öde modeli', 'Canlı gönderi takibi', 'Sigortalı mikro taşımalar'],
    paragraphs: [
      'Tekil koliler ya da küçük ekipman grupları için planlama yaparken en kritik unsur, aracın metreküp kapasitesini müşterinin gerçek ihtiyacıyla eşleştirmektir. Parsiyel taşıma algoritmamız aynı rotadaki talepleri birleştirir, böylece müşteriler sadece kullandıkları hacim kadar ödeme yapar ve gereksiz yakıt maliyetine katlanmaz. Her gönderi ayrı barkodlu mühürle kapatılır, yükleme sırası ağırlık merkezine göre tasarlanır ve sürüş boyunca sensörlü kayışlarla sabitlenir. Kutuların çevresine darbeye dayanıklı köşe koruyucular yerleştirir, sık kullanım gören yüzeyleri kaymaz pedlerle destekler ve kamyon içi titreşimleri düzenli olarak kaydederiz. Bu yaklaşım hem şehir içi hem de şehirler arası teslimatlarda hasarı en aza indirir.',
      'İstanbul Ofis Taşıma Şirketi parsiyel operasyonlarında, mobil uygulama üzerinden paylaşılan mil taşıma bildirimleri sayesinde gönderilerin konumu dakikalar içinde raporlanır. Kuryeler dağıtım noktasına vardığında, kiracı değişimi yapan ev sahipleri ya da ofis yöneticileri aynı QR kodunu tarayarak teslim tutanağını imzalar. Soğuk zincir gerektirmeyen ancak sıcaklık dalgalanmasından etkilenebilecek cihazlar için izotermik battaniyeler sağlanır, pil grupları düşük titreşimli raflara alınır ve varışta sensör kayıtları müşteriye gönderilir. Teslim sonrası memnuniyet çağrılarıyla süreç kapatılır, müşterilerimizin gelecek sevkiyatları için rota önerileri hazırlanır, tekrarlayan taşımalarda veriye dayalı puan tabloları paylaşılır.'
    ],
    listItems: [
      'Hacim bazlı fiyatlandırma ve dijital rezervasyon',
      'Barkodlu mühür ve QR kodlu teslimat',
      'Titreşim sensörlü sabitleme kayışları'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Aynı güzergâhta bulunan gönderileri birleştiren parsiyel algoritma' },
      { label: 'Yükleme', detail: 'Metreküp doğrulaması ve ağırlık merkezine göre sıralama' },
      { label: 'Teslim', detail: 'QR kodlu onay ve otomatik fatura paylaşımı' }
    ]
  },
  {
    name: 'Şehir İçi Ofis Taşımacılığı',
    slug: 'sehir-ici-ofis-tasimaciligi',
    description: 'Şehir içindeki ofislerin izin süreçleri ve trafik analizleriyle taşınması.',
    order: 3,
    showOnHomepage: true,
    icon: 'MapPin',
    metaTitle: 'Şehir İçi Ofis Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Şehir içi ofis taşımacılığında izin yönetimi, rota optimizasyonu ve hızlı kurulum.',
    benefits: ['Şehir içi yoğunluk analizi', 'Aynı gün kurulum hedefi', 'SMS ile bina bilgilendirme'],
    paragraphs: [
      'Şehir içinde ofis taşırken mesafeden çok mikrologistik engeller belirleyicidir; sabah trafiği, site güvenlik prosedürleri ve park yasağı olan caddeler senaryoyu değiştirir. Operasyon ekibimiz keşif sırasında belediye izinlerini kontrol eder, yükleme yapılacak alan için reflektörlü koridor oluşturur ve trafiğin en düşük olduğu zaman dilimlerini seçer. Kat bazlı kutu etiketleri, hangi materyalin hangi araçta gideceğini belirler ve ilk kurulum yapılacak ekipmanlar kırmızı renkle işaretlenir. Yükleme sırasındaki adımları kronometreyle ölçer, oluşabilecek gecikmeleri dijital panelde takip ederiz ve böylece şehir içi yoğunluklar hizmet seviyesini düşürmez.',
      'İstanbul Ofis Taşıma Şirketi, şehir içi projelerde scooter ekibiyle önden giderek saha fotoğrafları paylaşır ve sürpriz sokak çalışmaları veya bariyerler varsa yön değiştirir. Operasyon komuta merkezi, sürücülere gerçek zamanlı güzergâh güncellemesi gönderir ve bina yönetimlerine otomatik SMS bildirimi yapar. Aynı gün içerisinde teslim edecek şekilde planlanan bölümlerde, saha şefleri her üç saatte bir rapor yazar, müşteri temsilcisine aktarır ve gerekiyorsa ek ekip talebini tek tuşla iletir. Kapanışta bina yönetimleriyle feedback oturumu yapar, park izin sürelerini sonraki taşımalar için optimize ederiz.'
    ],
    listItems: [
      'Belediye izinlerinin önceden alınması',
      'Renk kodlu kutu sistemi ve öncelik etiketleri',
      'Gerçek zamanlı rota güncellemeleri'
    ],
    tableRows: [
      { label: 'Keşif', detail: 'Site güvenliği ve park alanları için fotoğraflı rapor' },
      { label: 'Yükleme', detail: 'Reflektörlü koridor ve çift yönlü telsiz iletişimi' },
      { label: 'Teslim', detail: 'Üç saatlik periyotlarla müşteriye durum raporu' }
    ]
  },
  {
    name: 'Şehirler Arası Ofis Taşımacılığı',
    slug: 'sehirler-arasi-ofis-tasimaciligi',
    description: 'Uzun mesafeli ofis taşımalarında karayolu izinleri ve veri odaklı rapor.',
    order: 4,
    showOnHomepage: true,
    icon: 'Route',
    metaTitle: 'Şehirler Arası Ofis Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Şehirler arası ofis taşımasında tonaj planı, GPS mühürleri ve yol verisi raporu.',
    benefits: ['Karayolu mevzuatına tam uyum', 'Çift sürücü ve vardiya planı', 'Veri odaklı teslim raporu'],
    paragraphs: [
      'Şehirler arası ofis taşıması planlanırken en kritik unsur, araç filosunun tonaj limitleri ve güzergâhtaki dinlenme zorunluluklarının sözleşmeye yazılmasıdır. Proje planı hazırlarken karayolu geçiş belgeleri, köprü kısıtlamaları ve yol bakım takvimi incelenir; ardından aracın hangi saatlerde mola vereceği bile hesaplanır. Yükleme sonrası tüm kutular GPS destekli mühürlerle kapatılır, araç kasasına yerleştirilen datalogger kabin sıcaklığını kaydeder ve ağırlık merkezi sensörlerle takip edilir. Elektronik ekipmanların dengesini korumak için rafları çift kat kayışla sabitler, şoför değişimlerini resmi dinlenme alanlarıyla eşleştiririz. Yüksek rüzgâr uyarılarında hız limitlerini telematik sistemle düşürür, sürücü kabinine rota düzeltme talimatlarını göndeririz.',
      'İstanbul Ofis Taşıma Şirketi, şehirler arası operasyonlarda güzergâh üzerindeki yetkili servislerle anlaşma yaparak olası arıza risklerini minimize eder. Her araçta ikincil rota planı bulunur; sürücüler meteoroloji uyarılarında anında bilgilendirilir ve gerekirse alternatif yollara yönlendirilir. Teslim noktasında aynı gün içinde mekânsal ölçüm yapılır, kurulum çizelgesi güncellenir ve yolculuk sırasında kaydedilen sıcaklık, titreşim ve hız verileri raporlanarak müşteriye teslim edilir. Ayrıca gümrük ya da şehir giriş istasyonlarında talep edilebilecek belgeler operasyon klasöründe hazır tutulur, sigorta poliçeleri dijital imzayla paylaşılır. Teslim sonrası yolculuk verileri lojistik paneline işlenir ve ekip performansı değerlendirilir.'
    ],
    listItems: [
      'Karayolu izinleri ve köprü kısıtlarına uygun plan',
      'GPS mühürlü kutular ve datalogger izleme',
      'Alternatif rota ve servis anlaşmaları'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Tonaj, mola ve bakım takvimini içeren yol haritası' },
      { label: 'Nakliye', detail: 'Çift GPS sistemi ve meteoroloji bildirimleri' },
      { label: 'Teslim', detail: 'Yolculuk verilerinin raporlanması ve kurulum ölçümü' }
    ]
  },
  {
    name: 'Ev Taşıma',
    slug: 'ev-tasima',
    description: 'Aile odaklı planlama ve sigortalı ev taşımacılığı.',
    order: 5,
    showOnHomepage: true,
    icon: 'Home',
    metaTitle: 'Ev Taşıma | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Ev taşımasında oda bazlı envanter, sigorta ve hızlı yerleşim.',
    benefits: ['Sigortalı ev taşıma', 'Aile odaklı planlama', 'Hızlı temizlik desteği'],
    paragraphs: [
      'Ev taşımalarında planlama, yaşam alanlarının ritmini bozmadan ilerleyen çok aşamalı bir koreografi olmak zorundadır. Keşif ekibi tüm odaları lazerle ölçer, kırılacak eşyaları numaralı kutulara ayırır ve öncelik etiketleri yapıştırır. Gardıroplar için askılı kasalar, beyaz eşyalar için su tahliye planları, salon mobilyaları için nefes alan kılıflar hazırlanır. Çocuk odası ve evcil hayvan alanları ayrı tutulur, duvar köşeleri köpükle kaplanır, ağır parçalar ağırlık merkezine göre gruplandırılır. Araç içi sensörlü kayışlar kaymayı önler, sürüş öncesi check-list ile sigorta değerleri doğrulanır, son kontroller yapılır.',
      'İstanbul Ofis Taşıma Şirketi teslimat adresine ulaştığında, tabletindeki oda planını açar ve müşteriyle eşzamanlı ilerler. Montaj teknisyenleri yatak ve dolap bağlantılarını tork anahtarıyla sıkar, beyaz eşyaların su-elektrik bağlantılarını sızıntı sensörleriyle test eder. Kutular oda bazlı renk kodlarına göre açılır, fotoğraflı durum raporu hem e-posta hem de SMS olarak gönderilir. Ambalaj atıkları sıkıştırılmış balyalar halinde dışarı alınır, sigorta poliçesi dijital imza ile kapatılır ve teslim tutanağı oluşturulur. Müşteri deneyimi temsilcisi aynı anda memnuniyet anketi başlatır ve bir sonraki bakım ziyareti için hatırlatıcı planlar.'
    ],
    listItems: [
      'Oda bazlı envanter ve hassas eşya listesi',
      'Gardırop ve beyaz eşya için özel aparatlar',
      'Tek koordinatör ile aile iletişimi'
    ],
    tableRows: [
      { label: 'Keşif', detail: 'Metrekare analizi ve paketleme planı' },
      { label: 'Paketleme', detail: 'Çift kat streç, askılı sistem ve köpük kasa' },
      { label: 'Teslim', detail: 'Oda bazlı yerleştirme ve ambalaj toplama' }
    ]
  },
  {
    name: 'Villa Taşımacılığı',
    slug: 'villa-tasimaciligi',
    description: 'Peyzaj dostu platformlarla villa ve bahçe ekipmanlarının taşınması.',
    order: 6,
    showOnHomepage: true,
    icon: 'Building2',
    metaTitle: 'Villa Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Villa taşımacılığında peyzaj koruması, antika ambalajı ve vinç koordinasyonu.',
    benefits: ['Peyzaj dostu lojistik', 'Antika korumalı paketleme', 'Akıllı ev yeniden kurulum desteği'],
    paragraphs: [
      'Villa taşımaları geniş yaşam hacmini ve bahçe ekipmanlarını birlikte içerdiği için keşif ekibi hem iç hem dış mekânı lazerle tarar. Teras mobilyaları için nefes alan kılıflar hazırlanır, antika tablolar mikroklima sandıklarına alınır, havuz aksesuarları renk kodlu kasalara yerleştirilir. Vinç kullanılacaksa zemin taşıma kapasitesi mühendisler tarafından ölçülür, peyzajı korumak amacıyla modüler raylı platformlar serilir. Rüzgâr ve eğim hesapları tamamlanmadan ağır objeler listesine dokunulmaz, merdiven trabzanları köpükle kaplanır, cam yüzeyler için darbe sensörlü kalkanlar kullanılır. Böylece taşınma günü yüzey çizikleri ve beklenmedik gecikmeler en aza iner.',
      'İstanbul Ofis Taşıma Şirketi operasyon günü meteoroloji verilerini canlı takip eder, yağış veya rüzgâr değiştiğinde vinç ekibine talimat verir. Akıllı ev bileşenleri numaralandırılır, güvenlik kameraları geçici olarak yalıtılır, enerji hatları etiketlenir ve teslim adresinde yeniden programlanır. Müşteriye tablet üzerinden gösterilen yerleşim planı sayesinde mobilyalar lazerle hizalanır, güzel sanatlar eserlerinin kondisyon raporları güncellenir. Teslim sonrası peyzaj üzerinde kullanılan koruyucu pedler kaldırılır, tüm ambalaj atıkları sahadan alınır ve fotoğraflı durum raporu paylaşılır. Böylece hem iç mekân hem de bahçe düzeni aynı gün içinde tekrar hizmete hazır hale gelir.'
    ],
    listItems: [
      'Peyzajı koruyan raylı platform sistemleri',
      'Antika ve kav koleksiyonları için mikroklima sandıkları',
      'Vinç operasyonu için zemin taşıma hesapları'
    ],
    tableRows: [
      { label: 'Keşif', detail: 'Bahçe, teras ve iç mekân ölçümlerinin alınması' },
      { label: 'Paketleme', detail: 'Nefes alan kılıflar, köpük korumalar ve numaralı kasalar' },
      { label: 'Teslim', detail: 'Akıllı ev cihazlarının test edilmesi ve raporlanması' }
    ]
  },
  {
    name: 'Yalı Taşımacılığı',
    slug: 'yali-tasimaciligi',
    description: 'Tarihi yalı ve sahil konutları için nem kontrollü taşıma.',
    order: 7,
    showOnHomepage: false,
    icon: 'Anchor',
    metaTitle: 'Yalı Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Yalı taşımacılığında nem ölçümü, iskele planı ve eser danışmanlığı.',
    benefits: ['Tarihi yapıya zarar vermeyen yöntemler', 'Nem kontrollü taşımacılık', 'Sahil güvenlik koordinasyonu'],
    paragraphs: [
      'Yalı taşımalarında ahşap döşemeler, dar iskeleler ve tuzlu hava aynı anda yönetilmelidir, bu yüzden keşif ekibi rutubet ölçerle her odayı tarar. Duvar panelleri nefes alan kumaşlarla kaplanır, merdivenlerde kaymaz pedler kullanılır ve odaların fotoğrafları çekilerek restorasyon riskleri kayıt altına alınır. Deniz cephesinde modüler platform kurulur, akıntı haritaları incelenir, tekneye yüklenecek sandıkların sırası ağırlık ve kırılganlık katsayısına göre belirlenir. Kıyıya paralel vinç çalışacaksa zemine basınç dağıtan plakalar yerleştirilir, komşu parsellerle iletişim kurulur ve bütün süreç ayrıntılı raporlarla belgelenir. İskele vardiya planları yazılı hale getirilip ilgili güvenlik ekiplerine gönderilir, paslanmaz kılıflar metal aksamı korur.',
      'İstanbul Ofis Taşıma Şirketi sahil güvenlik ve belediye birimleriyle eş zamanlı çalışır, her mühürlü sandığın nem ve sıcaklık verisini datalogger üzerinden izler. Limit aşıldığında operasyon kontrollü şekilde durdurulur, sandık yeniden kondisyona sokulur ve kayıt müşteriye paylaşılır. Varış noktasında küratör veya yapı koruma danışmanı ile sandıklar açılır, sensör verileri teslim edilir ve yapı bütünlüğü raporu hazırlanır. Güzergâh izinleri tamamlandıktan sonra platformlar kaldırılır, alan orijinal haline getirilir ve sürecin sonunda tek bir çizik bile bırakılmaz. Son kontrol turunda iskele bağlantıları ve kıyı korumaları tekrar gözden geçirilir, rapor dijital arşive yüklenir.',
    ],
    listItems: [
      'Nem ve sıcaklık ölçümleriyle risk analizi',
      'İskele ve tekne operasyon planı',
      'Tarihî eser danışmanı koordinasyonu'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Akıntı haritaları ve iskele izinleri' },
      { label: 'Paketleme', detail: 'Nefes alan kumaşlar ve nem dengeleyiciler' },
      { label: 'Teslim', detail: 'Yapı bütünlüğü raporu ve sensör verileri' }
    ]
  },
  {
    name: 'Kurumsal Taşımacılık',
    slug: 'kurumsal-tasimacilik',
    description: 'Çok lokasyonlu şirketler için merkezi proje yönetimi.',
    order: 8,
    showOnHomepage: false,
    icon: 'Building',
    metaTitle: 'Kurumsal Taşımacılık | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Kurumsal taşımada dijital komuta paneli, KPI raporu ve koordinatör ağı.',
    benefits: ['Merkezi proje yönetimi', 'Şeffaf performans göstergeleri', 'Geçici ofis çözümleri'],
    paragraphs: [
      'Kurumsal taşımalar aynı anda birden fazla lokasyonun taşınması anlamına geldiği için merkezi proje ofisi günlük sprint planları çıkarır. Her lokasyona saha koordinatörü atanır, risk matrisleri güncellenir, departman bazlı eşyalar renk kodlu kasalara yerleştirilir ve geçici çalışma alanları hazır tutulur. İnsan kaynaklarıyla birlikte oturma planları revize edilir, kritik ekipmanların yedekleri etiketlenir, iletişim kanalları dijital komuta paneline işlenir. Tüm belgeler paylaşımlı depoya aktarılır, onay süreçleri otomatik bildirimlerle takip edilir. Aynı anda devam eden iş akışını aksatmamak için geçici VPN tünelleri ve paylaşımlı yazıcı kümeleri devreye alınır.',
      'İstanbul Ofis Taşıma Şirketi yönetim kurulu üyelerine 7/24 erişilebilen gösterge paneli sunar, saha ekiplerinden gelen fotoğraf ve durum mesajlarını aynı dakika içinde rapora işler. Gecikme ihtimali belirdiğinde alternatif kaynak listeleri devreye alınır, kritik kilometre taşları yeniden planlanır ve müşteri temsilcisiyle paylaşılan hizmet seviyesi anlaşması güncellenir. Operasyon tamamlandığında her lokasyon için KPI analizi yapılır, maliyet gerçekleşmesi sözleşme tahminleriyle karşılaştırılır ve öğrenilen dersler oturumu belgelenir. Tüm çıktıların dijital imzalı kopyaları paylaşılır, böylece kurumsal hafıza güçlenir. Bulgular sonraki fazlar için iyileştirme planına dönüştürülür ve yönetim onayına sunulur.'
    ],
    listItems: [
      'Çok lokasyonlu koordinatör ataması',
      'Dijital komuta paneli ve KPI raporları',
      'Geçici çalışma alanı organizasyonu'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Günlük stand-up toplantıları ve risk matrisi' },
      { label: 'Nakliye', detail: 'Lokasyon bazlı ekipler ve olay müdahale planı' },
      { label: 'Kapanış', detail: 'KPI raporu ve öğrenilen dersler oturumu' }
    ]
  },
  {
    name: 'Fabrika Taşımacılığı',
    slug: 'fabrika-tasimaciligi',
    description: 'Ağır makine ve üretim hatlarının mühendis gözetiminde taşınması.',
    order: 9,
    showOnHomepage: false,
    icon: 'Factory',
    metaTitle: 'Fabrika Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Fabrika taşımacılığında mühendislik hesapları, vinç koordinasyonu ve kalibrasyon testleri.',
    benefits: ['Mühendis gözetimli söküm', 'Çevre mevzuatına uyum', 'Escortlu ağır nakliye'],
    paragraphs: [
      'Fabrika taşımaları ağır makineler, kimyasal ekipmanlar ve raf sistemlerini içerdiğinden mühendislik hesapları yapılmadan tek bir civata bile sökülmez. Üretici teknik çizimleri toplanır, kaldırma noktaları belirlenir, hidrolik kriko kapasitesi hesaplanır ve yağ-soğutma sıvıları çevre mevzuatına uygun biçimde boşaltılır. CNC tezgâhları titreşim sönümleyici pedlere yerleştirilir, kablolar numaralı etiketlerle paketlenir, personel için ayrıntılı iş güvenliği planı yayımlanır. Vinç yerleşimi için zemin dayanımı ölçülür, forklift rotaları bariyerlerle belirlenir ve enerji kesinti planı duyurulur. Böylece üretim hatları kontrollü biçimde devre dışı kalır, yeniden devreye alma süresi kısalır.',
      'İstanbul Ofis Taşıma Şirketi ağır yük güzergâhı için karayolu izinlerini önceden alır, escort araçları ve acil durum servisleriyle anlaşır, vinç hareketlerini iş güvenliği uzmanlarıyla anlık denetler. Yeni tesiste enerji ve basınç hatları teste tabi tutulur, üretim hatları kalibrasyon uzmanlarıyla birlikte devreye alınır ve üretim kaybı raporu yönetime sunulur. Kapanış sürecinde yedek parça listeleri güncellenir, garanti kayıtları üretici temsilcileriyle paylaşılır ve tesis yöneticisine fotoğraflı kapanış dosyası verilir. Ayrıca acil durum tatbikatı sonuçları raporlanır ve sonraki genişleme projeleri için öneri listesi teslim edilir.'
    ],
    listItems: [
      'Makine üreticilerinden alınan teknik çizimler',
      'Titreşim sönümleyici pedler ve numaralı kablolar',
      'İş güvenliği uzmanı eşliğinde vinç operasyonu'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Kaldırma noktaları ve hidrolik kapasite hesapları' },
      { label: 'Demontaj', detail: 'Yağ tahliyesi ve numaralı kablo paketleme' },
      { label: 'Kurulum', detail: 'Kalibrasyon testleri ve enerji planı' }
    ]
  },
  {
    name: 'Banka Taşımacılığı',
    slug: 'banka-tasimaciligi',
    description: 'Gizlilik protokolleriyle banka şube ve kasa taşımacılığı.',
    order: 10,
    showOnHomepage: false,
    icon: 'Landmark',
    metaTitle: 'Banka Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Banka taşımacılığında gizlilik, eskort ve alarm testleri.',
    benefits: ['Gizlilik sözleşmeli ekip', 'Escortlu taşıma güvenliği', 'Test edilmiş alarm sistemi'],
    paragraphs: [
      'Banka şube taşımalarında gizlilik ve güvenlik protokolleri süreç boyunca kesintisiz uygulanır. Değerli evraklar mühürlü kasalara aktarılır, ATM bileşenleri kilitli poşetlere alınır, tüm kutular çift imzalı tutanakla kayda geçer ve taşıma alanı yirmi dört saat kamera ile izlenir. Kasa odaları boşaltılırken alarm sistemleri geçici moda alınır, güzergâh planı bankanın güvenlik birimiyle eşleştirilir, nakit çekmeceleri sıfırlanır. Yedek anahtarlar ayrı mühür torbalarına konur, personel listeleri güvenlik amiri tarafından onaylanır ve bekleme alanları bariyerlerle kapatılır. Güzergâh boyunca kullanılacak tüm personel kartları ayrı bir kasada taşınır ve teslim anında aktif edilir.',
      'İstanbul Ofis Taşıma Şirketi güzergâhı polis ve banka güvenlik ekipleriyle paylaşır, eskort araçları eşliğinde hareket eder ve yeni şubede kasa yerleşmeden diğer mobilyaların kurulmasına izin vermez. Alarm, kamera ve bankacılık yazılımları test edilir, müşteriye ayrıntılı güvenlik raporu sunulur ve tüm personel gizlilik sözleşmesini imzalayarak operasyonu kapatır. Teslim sonrası ATM bileşenleri tekrar devreye alınır, deneme işlemleri kayda alınır ve şube açılışından önce temizlik-atık toplama tamamlanır. Raporda elde edilen veriler dijital arşive yüklenir ve şube yönetimine operasyon sonrası öneri listesi ile bakım takvimi sunulur.'
    ],
    listItems: [
      'Mühürlü evrak kasaları ve çift imza prosedürü',
      'ATM bileşenleri için kilitli poşetler',
      'Polis koordinasyonlu eskort planı'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Kasa odası boşaltma ve evrak barkodlama' },
      { label: 'Nakliye', detail: 'Escort araçları ve canlı GPS paylaşımı' },
      { label: 'Teslim', detail: 'Alarm testleri ve güvenlik raporu' }
    ]
  },
  {
    name: 'Fuar Taşımacılığı',
    slug: 'fuar-tasimaciligi',
    description: 'Stand ekipmanları ve demo ürünlerinin dakik teslimi.',
    order: 11,
    showOnHomepage: false,
    icon: 'Store',
    metaTitle: 'Fuar Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Fuar taşımacılığında dakik teslim, özel bölmeli kasalar ve dijital plan.',
    benefits: ['Dakik teslimat garantisi', 'Yedek parça shuttle servisi', 'Dijital durum panosu'],
    paragraphs: [
      'Fuar taşımalarında dakika bazlı planlama şarttır; stand panelleri, LED ekranlar ve demo ürünleri belirtilen teslim penceresinde alanda olmalıdır. Ekiplerimiz ajanslarla ortak kurulum çizelgesi çıkarır, kasa içi yerleşim ürün kırılganlığına göre düzenlenir, özel bölmeli raflar ve hava yastıklı sabitlemeler kullanılır. Forklift randevuları önceden alınır, bekleme süresi azaltılır, depolama gerekiyorsa geçici raf sistemleri kurulur ve kablo setleri renk kodlarına göre paketlenir. Araç içi sensörler ani fren anlarını raporlar, sürücüler radyo üzerinden yönlendirilir. Bu sayede sergi açılışındaki ilk ziyaretçi karşılaması hiçbir gecikmeye uğramaz.',
      'İstanbul Ofis Taşıma Şirketi sahaya vardığında dijital durum panosunu açar, gecikme risklerini kırmızı olarak işaretler, alternatif kurulum senaryolarını stand ekipleriyle paylaşır ve stok tüketimini canlı takip eder. Sergi boyunca ihtiyaç duyulan yedek parçaları shuttle araçla getirir, kapanışta demontajı aynı disiplinle yönetir, tüm hareketleri kayıt altına alır ve organizatöre ayrıntılı rapor gönderir. Stand alanı teslim edilmeden önce temizlik yapılır, zemine zarar verebilecek kalıntılar kaldırılır ve müşteri onayı alınır. Ayrıca sponsorluk ekiplerinin talep ettiği promosyon ürünlerini sahaya ulaştırırız ve kapanış raporlarına gelecekteki fuarlar için not düşeriz.'
    ],
    listItems: [
      'Ajanslarla entegre kurulum planı',
      'Özel bölmeli kasa ve hava yastıklı raflar',
      'Şeffaf dijital zaman çizelgesi'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Kurulum saatleri ve forklift randevuları' },
      { label: 'Kurulum', detail: 'Ekipman kırılganlığına göre kasalama' },
      { label: 'Sergi Sonu', detail: 'Demontaj ve geri taşıma planı' }
    ]
  },
  {
    name: 'Hastane Taşımacılığı',
    slug: 'hastane-tasimaciligi',
    description: 'Biyomedikal onaylı tıbbi cihaz taşıma ve hijyen protokolleri.',
    order: 12,
    showOnHomepage: false,
    icon: 'Hospital',
    metaTitle: 'Hastane Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Hastane taşımacılığında biyomedikal protokol, hijyen kılıfı ve kalibrasyon testi.',
    benefits: ['Biyomedikal ekip desteği', 'Hijyen protokollerine uyum', 'Kesintisiz hasta hizmeti'],
    paragraphs: [
      'Hastane taşımalarında biyomedikal protokoller sürecin temelidir; operasyon öncesi cihaz kapanış planları hazırlanır, MRI ve tomografi tüpleri üretici talimatına göre kilitlenir, sterilizatörler boşaltılır. Yoğun bakım yatakları tek kullanımlık hijyen kılıflarına alınır, ilaç dolapları mühürlenir, rota seçimi ambulans trafiğini etkilemeyecek şekilde planlanır. Geçici servis alanları kurulur, enfeksiyon kontrol ekipleriyle eşgüdüm sağlanır, personel koruyucu ekipmanla çalışır. Tüm adımlar yazılı check-list ile doğrulanır, atık yönetimi planları hazırlanır ve tıbbi gaz hatları kapatılmadan önce güvenlik onayı alınır. Sterilizasyon ekipleriyle yapılan toplantılar sonucunda her bölüm için ayrı teslim penceresi tanımlanır.',
      'İstanbul Ofis Taşıma Şirketi genellikle gece operasyonunu tercih eder, cihazları antistatik kasalara yerleştirir, varışta üretici teknisyenleriyle birlikte kalibrasyon testlerini tamamlar ve sonuçları biyomedikal ekibe teslim eder. Hijyen prosedürleri kayıt altına alınır, atıklar tıbbi yönergelere göre bertaraf edilir, kritik servisler devreye girene kadar geçici çözümler sürdürülür. Son olarak hasta yönlendirme tabelaları güncellenir, yönetimle kapanış toplantısı yapılır ve sigorta dosyaları paylaşılır. Kalibrasyon raporları dijital arşive yüklenir ve mevzuat denetimleri için hazır tutulur. Bakım planları için periyodik hatırlatıcı oluşturulur ve ilk 24 saat boyunca destek hattı hazır tutulur.',
    ],
    listItems: [
      'Biyomedikal onaylı cihaz kapanış protokolleri',
      'Tek kullanımlık hijyen kılıfları',
      'Geçici servis alanı kurulumu'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Cihaz kilitleme ve sterilizasyon planı' },
      { label: 'Nakliye', detail: 'Hijyenik paketleme ve gece operasyonu' },
      { label: 'Teslim', detail: 'Kalibrasyon testleri ve raporlama' }
    ]
  },
  {
    name: 'Konsolosluk Taşımacılığı',
    slug: 'konsolosluk-tasimaciligi',
    description: 'Diplomatik protokollere uygun güvenli taşıma.',
    order: 13,
    showOnHomepage: false,
    icon: 'ShieldCheck',
    metaTitle: 'Konsolosluk Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Konsolosluk taşımacılığında diplomatik mühürler, güvenlik soruşturmalı ekip ve gizlilik raporu.',
    benefits: ['Diplomatik protokol uzmanlığı', 'Gizlilik taahhütlü ekipler', 'Resmî kurum koordinasyonu'],
    paragraphs: [
      'Konsolosluk taşımalarında diplomatik dokunulmazlığa sahip dosyalar ve haberleşme cihazları bulunduğu için erişim listeleri önceden onaylanır. Evraklar mühürlü diplomat çantalarına alınır, anti-statik kasalar hazırlanır, taşıma alanı güvenlik kameralarıyla izlenir ve personel güvenlik soruşturması yapılır. Güzergâh planı ilgili dışişleri makamlarına bildirilir, duraklama noktaları resmi yazışmalarda belirtilir, araçlar yedek plaka ve yakıtla donatılır. Her sandık numarası diplomatik deftere işlenir, çift imza ile mühürlenir ve koridorlar bariyerlerle kapatılır. Tüm süreç boyunca iletişim kanalları şifreli tutulur ve toplantı notları fiziksel kasada saklanır; ayrıca risk senaryoları yedek dosyada tutulur.',
      'İstanbul Ofis Taşıma Şirketi taşıma günü boyunca sahadaki güvenlik ekipleriyle sürekli iletişim kurar, her sandığın mühür numarasını dijital kayda işler ve gerekirse sahada anında rapor oluşturur. Varışta karşı kurumla ortak sayım yapılır, gizlilik raporu imzalanır ve tüm kayıtlar şifreli arşive yüklenir. Operasyon tamamlandığında kullanılan ekipmanlar sahadan hızla çekilir, rota bilgilerinin saklanması için güvenlik prosedürleri uygulanır ve müşteriye nihai rapor gönderilir. Kapanışta diplomatik ekipler için değerlendirme oturumu yapılır, alınan dersler protokole eklenir ve gelecekteki taşımalara ışık tutar; raporun bir kopyası güvenli kasada saklanır.',
    ],
    listItems: [
      'Diplomatik çanta ve mühür prosedürü',
      'Güvenlik soruşturmalı personel',
      'Resmî güzergâh bildirimi'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Dışişleri onayları ve erişim listeleri' },
      { label: 'Nakliye', detail: 'Anti-statik kasalar ve eskort koordinasyonu' },
      { label: 'Teslim', detail: 'Ortak sayım ve gizlilik raporu' }
    ]
  },
  {
    name: 'Üniversite Taşımacılığı',
    slug: 'universite-tasimaciligi',
    description: 'Akademik takvime uyumlu kampüs taşımacılığı.',
    order: 14,
    showOnHomepage: false,
    icon: 'GraduationCap',
    metaTitle: 'Üniversite Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Üniversite taşımacılığında fakülte koordinasyonu, laboratuvar testi ve öğrenci bilgilendirmesi.',
    benefits: ['Akademik takvim uyumu', 'Fakülte temsilcisi koordinasyonu', 'Öğrenci iletişim desteği'],
    paragraphs: [
      'Üniversite taşımalarında akademik takvimin ritmine sadık kalmak zorunludur. Keşif ekibi sınav haftalarını, kayıt dönemlerini ve öğrenci oryantasyon tarihlerini takvime işler. Laboratuvar cihazları fakülte temsilcileri eşliğinde paketlenir, kütüphane koleksiyonları nem kontrollü torbalara alınır, kampüs içi trafik planı oluşturulur ve geçici danışma noktaları belirlenir. Öğrenci hizmetlerinin kesintiye uğramaması için yedek ekipler hazır bekletilir, elektrik ve ağ altyapısı önceden test edilir. Öğrenci kulüplerine ait depolar için özel etiketleme yapılır, böylece kampüs yaşamı taşınma sırasında bile sürdürülebilir ve iletişim kesintisiz devam eder; ayrıca kampüs güvenliğiyle gece vardiyası planlanır.',
      'İstanbul Ofis Taşıma Şirketi her fakülteye koordinatör atar, ilerleme kilometre taşlarını günlük olarak paylaşır, öğrencileri bilgilendiren duyuru şablonları hazırlar. Taşıma sonrası laboratuvar havalandırma testleri yapılır, kütüphane rafları aynı sıra numarasıyla kurulur, üniversite yönetimine kapsamlı teslim dosyası ve erişim planı sunulur. Gerektiğinde geçici dersliklerin hizmete alınması için teknik destek sağlar ve kapanış toplantısında gelecekteki projeler için öneriler paylaşılır. Tüm belgeler dijital arşive aktarılır, böylece sonraki akademik projeler için referans oluşturulur. Öğrenci temsilcileriyle yapılan geri bildirim oturumları süreci tamamlar ve memnuniyet raporları paylaşılır.',
    ],
    listItems: [
      'Akademik takvime göre operasyon planı',
      'Laboratuvar cihazları için fakülte onaylı süreç',
      'Öğrenci bilgilendirme duyuruları'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Takvim eşleştirmesi ve koordinatör ataması' },
      { label: 'Nakliye', detail: 'Nem kontrollü paketleme ve kampüs içi trafik yönetimi' },
      { label: 'Teslim', detail: 'Laboratuvar testleri ve raf sıralamasının korunması' }
    ]
  },
  {
    name: 'Arşiv Taşımacılığı',
    slug: 'arsiv-tasimaciligi',
    description: 'Kronolojik düzeni koruyan arşiv taşıma çözümleri.',
    order: 15,
    showOnHomepage: false,
    icon: 'Archive',
    metaTitle: 'Arşiv Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Arşiv taşımacılığında renk kodlu kutular, nem kontrolü ve çift sayım.',
    benefits: ['Kronolojik düzenin korunması', 'Nem kontrolü', 'Belgelendirilmiş teslim'],
    paragraphs: [
      'Arşiv taşımalarında belgelerin kronolojik düzeni korunmalıdır. Taşıma öncesi renk kodlu kutular hazırlanır, dijital indeks doğrulanır, nem seviyesini sabit tutmak için silika jel paketleri yerleştirilir ve kamera kaydı açılır. Yükleme sırasında her kutu çift imzalı tutanakla kayıt altına alınır, güvenlik zinciri bozulmaz, barkodlar taranır, araç içi klima sabit sıcaklıkta tutulur ve raf planları tabletlerde saklanır. Süreç boyunca erişim yetkileri kontrol listesiyle takip edilir ve araç içindeki titreşim değerleri kaydedilerek kutuların konumu gerektiğinde yeniden düzenlenir; böylece kronoloji korunur ve doğrulama kolaylaşır, denetim süreci hızlanır.',
      'İstanbul Ofis Taşıma Şirketi teslimat adresinde müşteri temsilcisiyle eş zamanlı sayım yapar, lazerle hizalanmış raflara kutuları yerleştirir, dijital indeks güncellemesini tamamlar. Sürecin sonunda erişim yetki listeleri ve yeni yerleşim planı raporu paylaşılır, olası revizyonlar için danışmanlık takvimi sunulur. Ayrıca eski rafların sökülmesi ve alanın temizlenmesi koordineli şekilde tamamlanır, müşteriye fotoğraflı kapanış paketi gönderilir. Yeni alanın yangın güvenlik sistemleri test edilerek kayıt altına alınır ve personel kısa bir erişim eğitimi alır, böylece sistem hazırdır ve olası denetimlere açıktır; süreç sonrası destek hattı açık tutulur.',
    ],
    listItems: [
      'Renk kodlu kutu ve dijital indeks kontrolü',
      'Silika jel ile nem stabilizasyonu',
      'Çift taraflı sayım ve tutanak'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Kutu etiketleme ve indeks doğrulama' },
      { label: 'Nakliye', detail: 'Nem kontrollü konteyner ve kamera kaydı' },
      { label: 'Teslim', detail: 'Raf hizalaması ve erişim planı' }
    ]
  },
  {
    name: 'Müze Taşımacılığı',
    slug: 'muze-tasimaciligi',
    description: 'Küratör onaylı, iklim kontrollü eser taşımacılığı.',
    order: 16,
    showOnHomepage: false,
    icon: 'Palette',
    metaTitle: 'Müze Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Müze taşımacılığında küratör iş birliği, sabit sıcaklık ve şok sensörleri.',
    benefits: ['Küratör iş birliği', 'Şok ve sıcaklık izleme', 'Dijital kayıt paylaşımı'],
    paragraphs: [
      'Müze taşımalarında eserlerin değerine göre özel ambalaj ve iklim kontrolü gerekir. Kayıtlı küratörler ile eser kondisyon raporları hazırlanır, yüzeyler asitsiz kâğıtlarla sarılır, sandık içine şok sensörleri yerleştirilir ve taşıma araçları sabit sıcaklıkta tutulur. Güzergâh boyunca ani duruşları önlemek için güvenli sürüş protokolü uygulanır, sandıklar ağırlık merkezine göre sıralanır, riskli parçalar için yedek yol haritası oluşturulur. Her sandığın nem verisi datalogger aracılığıyla takip edilir, limitler aşıldığında aksiyon planı devreye girer ve güzergâh üzerinde dinlenme noktaları sensör verilerini kontrol etmek için planlanır.',
      'İstanbul Ofis Taşıma Şirketi müze ekipleriyle birlikte taşıma sırasında oluşabilecek titreşimleri anlık izler, limit aşılırsa araç kontrollü şekilde durdurulur ve durum raporlanır. Varışta küratörle birlikte sandıklar açılır, kondisyon raporları güncellenir ve iklim değerleri karşılaştırılarak süreç tamamlanır. Tüm kayıtlar dijital arşive aktarılır, güvenlik kopyaları müşteriye teslim edilir ve gelecek sergiler için önerilen lojistik iyileştirmeler raporda yer alır. Teslim sonrası saklama alanının iklim değerleri izlenmeye devam eder ve gerektiğinde ek nem dengeleyiciler yerleştirilir; böylece eserler stabil kalır ve sonraki sergilere hazır olur.',
    ],
    listItems: [
      'Küratör onaylı kondisyon raporları',
      'Asitsiz paketleme ve şok sensörleri',
      'Sabit sıcaklıklı araç filosu'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Eser seçimi ve rapor hazırlığı' },
      { label: 'Nakliye', detail: 'Şok sensörleri ve sabit sıcaklık' },
      { label: 'Teslim', detail: 'Küratör eşliğinde açma ve rapor güncelleme' }
    ]
  },
  {
    name: 'Bankamatik Taşımacılığı',
    slug: 'bankamatik-tasimaciligi',
    description: 'ATM cihazlarının güvenlik protokolleriyle taşınması ve kurulumu.',
    order: 17,
    showOnHomepage: false,
    icon: 'CreditCard',
    metaTitle: 'Bankamatik Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Bankamatik taşımacılığında nakit tahliyesi, özel aparat ve kurulum testi.',
    benefits: ['Güvenlik onaylı süreç', 'Özel ATM aparatları', 'Kurulum sonrası testler'],
    paragraphs: [
      'Bankamatik taşımalarında ağır kasa yapısı ile elektronik bileşenlerin hassasiyeti aynı anda düşünülür. Taşıma öncesi ATM kasasındaki nakit bankaya teslim edilir, güvenlik modülü mühürlenir, cihaz zemine sabitlenmişse ankrajlar sökülür. Özel ATM taşıma aparatı ile cihaz dengede tutulur, kablolar etiketlenir, erişim panelleri kapatılır ve taşıma koridoru bariyerlerle ayrılır. Kayma riskini azaltmak için çelik kızaklar ve sensörlü kayışlar birlikte kullanılır, saha kameraları tüm süreci kaydeder. Titreşim kayıtları bankayla paylaşılarak ilerideki kurulumlar için referans oluşturur ve ekipler arasında bilgi paylaşımı sağlanır; navigasyon ekibi de güzergâh rüzgâr verilerini izler.',
      'İstanbul Ofis Taşıma Şirketi güzergâhı banka güvenlik birimiyle paylaşır, eskort araçları eşliğinde hareket eder ve varış noktasında zemin güçlendirmesini kontrol eder. Kurulum sonrası enerji, iletişim ve kart testleri yapılır; güvenlik kameraları ayarlanır ve bankaya ayrıntılı rapor gönderilir. Cihazın çevresine geçici bariyerler yerleştirilir, müşteri yönlendirme tabelaları konur, şube açılışından önce temizlik yapılır ve tüm kayıtlar dijital arşive aktarılır. Ayrıca kurulum raporu operasyon merkezine yüklenir ve bakım hatırlatıcıları planlanır. Gerektiğinde uzaktan izleme sistemi devreye alınarak ilk gün performansı takip edilir, sapmalar raporlanır.',
    ],
    listItems: [
      'Nakit tahliyesi ve güvenlik modülü mühürleme',
      'Özel ATM taşıma aparatı',
      'Enerji ve iletişim testleri'
    ],
    tableRows: [
      { label: 'Hazırlık', detail: 'Nakit boşaltma ve ankraj sökümü' },
      { label: 'Nakliye', detail: 'Escortlu sevkiyat ve denge aparatı' },
      { label: 'Kurulum', detail: 'Enerji iletişim testleri ve bariyer kurulumu' }
    ]
  },
  {
    name: 'Para Kasası Taşımacılığı',
    slug: 'para-kasasi-tasimaciligi',
    description: 'Ağır para kasalarının mühendislik hesaplarıyla taşınması.',
    order: 18,
    showOnHomepage: false,
    icon: 'Vault',
    metaTitle: 'Para Kasası Taşımacılığı | İstanbul Ofis Taşıma Şirketi',
    metaDescription: 'Para kasası taşımacılığında zemin mühendisliği, çelik kızak ve kilit testi.',
    benefits: ['Ağır yük mühendisliği', 'Gizlilik protokolü', 'Kilit mekanizması testi'],
    paragraphs: [
      'Para kasaları yüzlerce kilogram ağırlığında olduğu için taşıma öncesi zemin dayanımı hesaplanır, demontaj planı hazırlanır ve kasanın içi boşaltılır. Kasa kaymayı önleyen çelik kızaklara alınır, hidrolik krikolarla yükseltilir, araç rampasına alınırken zincirli sabitleme kullanılır. Tüm hareketler kamera ile kaydedilir, güzergâh üzerindeki kapılar ölçülür, gerekirse geçici söküm yapılır. Güvenlik zinciri kırılmaması için yetkisiz kişiler alana alınmaz, saat bazlı ilerleme raporları tutulur ve beklenmedik duraklamalar kontrol listesinden düşülür. Saha ekibi her adımı telsizle bildirir ve zaman çizelgesine işler, gerektiğinde geçici rampa kurar.',
      'İstanbul Ofis Taşıma Şirketi varış noktasında kasanın yeni yerine oturtulması için beton ankraj deliklerini hazırlar, moment anahtarlarıyla cıvataları sıkar ve kilit mekanizmasını test eder. Operasyon boyunca gizlilik protokolü uygulanır, sadece yetkili kişiler sahaya alınır ve teslim tutanağı çift imzayla kapanır. Gerekirse ek güvenlik için hareket sensörlü bariyer kurulur, müşteriye bakım önerileri verilir ve kapanışta eski yerin zemin onarımı kontrol edilir. Kilit kombinasyonları teslim tutanağına şifreli olarak eklenir ve dosyalar güvenli arşive aktarılır; son kademede yeni alanın kameraları test edilir ve izleme kayıtları müşteriye sunulur.',
    ],
    listItems: [
      'Zemin dayanım hesapları ve boşaltma planı',
      'Çelik kızaklar ve zincirli sabitleme',
      'Moment anahtarıyla montaj ve kilit testi'
    ],
    tableRows: [
      { label: 'Planlama', detail: 'Zemin mühendisliği ve demontaj adımları' },
      { label: 'Nakliye', detail: 'Hidrolik kriko ve çelik kızak kullanımı' },
      { label: 'Kurulum', detail: 'Ankraj montajı ve güvenlik testi' }
    ]
  }
]

const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length

if (process.argv.includes('--check')) {
  services.forEach((service) => {
    console.log(`\n${service.name}`)
    service.paragraphs.forEach((paragraph, idx) => {
      console.log(`  Paragraph ${idx + 1}: ${wordCount(paragraph)} kelime`)
    })
    const brandCount = service.paragraphs.reduce(
      (total, paragraph) => total + (paragraph.match(new RegExp(brand, 'g'))?.length ?? 0),
      0
    )
    console.log(`  Marka kullanım sayısı: ${brandCount}`)
  })
  process.exit(0)
}

const buildContent = (service: ServiceSeed) => {
  service.paragraphs.forEach((paragraph, idx) => {
    const count = wordCount(paragraph)
    if (count < 80 || count > 120) {
      throw new Error(`${service.name} paragraf ${idx + 1} kelime sayısı ${count}`)
    }
  })

  const brandCount = service.paragraphs.reduce((total, paragraph) => total + (paragraph.match(new RegExp(brand, 'g'))?.length ?? 0), 0)
  if (brandCount !== 1) {
    throw new Error(`${service.name} metninde marka ${brandCount} kez geçti`)
  }

  const paragraphHtml = service.paragraphs.map((p) => `<p>${p}</p>`).join('\n')
  const listHtml = `<ul>${service.listItems.map((item) => `<li>${item}</li>`).join('')}</ul>`
  const tableHtml = `<table><thead><tr><th>Kapsam</th><th>Detay</th></tr></thead><tbody>${service.tableRows
    .map((row) => `<tr><td>${row.label}</td><td>${row.detail}</td></tr>`)
    .join('')}</tbody></table>`

  return [paragraphHtml, listHtml, tableHtml].join('\n')
}

async function main() {
  console.log('🧼 Mevcut hizmetler temizleniyor...')
  await prisma.service.deleteMany()

  for (const service of services) {
    const content = buildContent(service)
    await prisma.service.create({
      data: {
        name: service.name,
        slug: service.slug,
        description: service.description,
        order: service.order,
        showOnHomepage: service.showOnHomepage,
        icon: service.icon,
        benefits: service.benefits.join('\n'),
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
        content
      }
    })
    console.log(`✓ ${service.name} eklendi`)
  }

  console.log('🎯 Tüm hizmetler başarıyla oluşturuldu')
}

main()
  .catch((error) => {
    console.error('❌ Hizmetler eklenirken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
