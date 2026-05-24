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

async function resetServices() {
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

resetServices()
  .catch((error) => {
    console.error('❌ Hizmetler güncellenirken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
