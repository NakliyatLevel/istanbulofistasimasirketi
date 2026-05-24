import type { LucideIcon } from 'lucide-react'
import {
  Home,
  Building2,
  Anchor,
  Package,
  MapPin,
  Route,
  Briefcase,
  Building,
  Factory,
  Landmark,
  Store,
  Hospital,
  ShieldCheck,
  GraduationCap,
  Archive,
  Palette,
  CreditCard,
  Vault,
} from 'lucide-react'

export type ServiceMenuGroupId = 'bireysel' | 'kurumsal' | 'diger'

export type ServiceMenuItem = {
  name: string
  slug: string
  icon: LucideIcon
}

export type ServiceMenuGroup = {
  id: ServiceMenuGroupId
  title: string
  items: ServiceMenuItem[]
}

export const SERVICE_MENU_GROUPS: ServiceMenuGroup[] = [
  {
    id: 'bireysel',
    title: 'Bireysel Taşımacılık',
    items: [
      { name: 'Ev Taşıma', slug: 'ev-tasima', icon: Home },
      { name: 'Villa Taşımacılığı', slug: 'villa-tasimaciligi', icon: Building2 },
      { name: 'Yalı Taşımacılığı', slug: 'yali-tasimaciligi', icon: Anchor },
      { name: 'Parça Eşya Taşımacılığı', slug: 'parca-esya-tasimaciligi', icon: Package },
      { name: 'Şehir İçi Ofis Taşımacılığı', slug: 'sehir-ici-ofis-tasimaciligi', icon: MapPin },
      { name: 'Şehirler Arası Ofis Taşımacılığı', slug: 'sehirler-arasi-ofis-tasimaciligi', icon: Route },
    ],
  },
  {
    id: 'kurumsal',
    title: 'Kurumsal Taşımacılık',
    items: [
      { name: 'Ofis Taşımacılığı', slug: 'ofis-tasimaciligi', icon: Briefcase },
      { name: 'Kurumsal Taşımacılık', slug: 'kurumsal-tasimacilik', icon: Building },
      { name: 'Fabrika Taşımacılığı', slug: 'fabrika-tasimaciligi', icon: Factory },
      { name: 'Banka Taşımacılığı', slug: 'banka-tasimaciligi', icon: Landmark },
      { name: 'Fuar Taşımacılığı', slug: 'fuar-tasimaciligi', icon: Store },
      { name: 'Hastane Taşımacılığı', slug: 'hastane-tasimaciligi', icon: Hospital },
      { name: 'Konsolosluk Taşımacılığı', slug: 'konsolosluk-tasimaciligi', icon: ShieldCheck },
      { name: 'Üniversite Taşımacılığı', slug: 'universite-tasimaciligi', icon: GraduationCap },
    ],
  },
  {
    id: 'diger',
    title: 'Diğer Hizmetler',
    items: [
      { name: 'Arşiv Taşımacılığı', slug: 'arsiv-tasimaciligi', icon: Archive },
      { name: 'Müze Taşımacılığı', slug: 'muze-tasimaciligi', icon: Palette },
      { name: 'Bankamatik Taşımacılığı', slug: 'bankamatik-tasimaciligi', icon: CreditCard },
      { name: 'Para Kasası Taşımacılığı', slug: 'para-kasasi-tasimaciligi', icon: Vault },
    ],
  },
]
