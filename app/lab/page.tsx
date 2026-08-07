import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { CampaignConsole } from '@/components/CampaignConsole'
export const metadata: Metadata = { title:'Campaign Lab' }
export default function Lab(){return <><PageHero kicker="PRODUCT CONCEPT / CAMPAIGN LAB" title="The website becomes a product surface." copy="A front-end concept for the future SnarkLogic workspace: angle portfolio, agent run status, risk flags and experiment design. It is interactive client-side UI living inside the same Next.js application."/><section className="lab-section section-pad"><CampaignConsole/></section></>}
