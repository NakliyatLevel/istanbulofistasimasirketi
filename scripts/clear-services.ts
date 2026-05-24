import { config } from 'dotenv'
import { PrismaClient } from '@prisma/client'

config({ path: '.env.local' })

const prisma = new PrismaClient()

async function clearServices() {
  console.log('🗑️ Tüm hizmet kayıtları siliniyor...')
  const { count } = await prisma.service.deleteMany()
  console.log(`✅ ${count} hizmet kaydı silindi`)
}

clearServices()
  .catch((error) => {
    console.error('❌ Hizmetler silinirken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
