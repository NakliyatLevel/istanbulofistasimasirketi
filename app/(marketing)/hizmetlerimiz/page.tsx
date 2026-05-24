import { getSiteSettings } from '@/lib/settings'
import { Metadata } from 'next'
import { PageHeading } from '@/components/ui/page-heading'
import Link from 'next/link'
import {
  Home,
  Building2,
  Anchor,
  Route,
  Package,
  Briefcase,
  Building,
  Factory,
  Store,
  Hospital,
  ShieldCheck,
  GraduationCap,
  Archive,
  Landmark,
  Palette,
  CreditCard,
  Vault,
  ArrowRight,
} from 'lucide-react'
import { SERVICE_MENU_GROUPS } from '@/lib/service-menu'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  
  return {
    title: `Hizmetlerimiz | ${settings.site_title}`,
    description: 'Bireysel ve kurumsal taşımacılık hizmetlerimiz hakkında detaylı bilgi edinin.',
  }
}

export default async function HizmetlerimizPage() {
  const settings = await getSiteSettings()
  const bireyselGroup = SERVICE_MENU_GROUPS.find((group) => group.id === 'bireysel')
  const kurumsalGroup = SERVICE_MENU_GROUPS.find((group) => group.id === 'kurumsal')
  const digerGroup = SERVICE_MENU_GROUPS.find((group) => group.id === 'diger')

  const bireyselServices = bireyselGroup?.items ?? []
  const kurumsalServices = kurumsalGroup?.items ?? []
  const digerServices = digerGroup?.items ?? []

  return (
    <div className="min-h-screen">
      <PageHeading
        title="Hizmetlerimiz"
        description={settings.page_desc_hizmetlerimiz || 'Bireysel ve kurumsal taşımacılık ihtiyaçlarınız için profesyonel çözümler sunuyoruz.'}
        breadcrumbs={[{ label: 'Hizmetlerimiz' }]}
      />

      {/* Bireysel Taşımacılık */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Bireysel Taşımacılık</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ev, villa ve yalı taşımacılığından parça eşya taşımaya kadar tüm bireysel ihtiyaçlarınız için hizmetinizdeyiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bireyselServices.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">{service.name}</h3>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kurumsal Taşımacılık */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Kurumsal Taşımacılık</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofis, fabrika, banka ve diğer kurumsal taşımacılık ihtiyaçlarınız için özel çözümler sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kurumsalServices.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center text-primary text-sm font-medium">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Diğer Hizmetler</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Özel taşımacılık ihtiyaçlarınız için uzman ekibimiz ve özel ekipmanlarımız ile hizmetinizdeyiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digerServices.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center text-primary text-sm font-medium">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Size Özel Çözümler Sunuyoruz</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İhtiyacınıza özel paket ve hizmetler için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
            >
              Ücretsiz Teklif Al
            </Link>
            <a
              href={`tel:${settings.phone}`}
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition"
            >
              {settings.phone || '444 65 02'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
