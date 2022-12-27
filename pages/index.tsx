import { useRouter } from 'next/navigation'

export default function IndexHome() {
  const router = useRouter()
  if (typeof window === "undefined") return null;
  router.replace("/pt-br")
}
